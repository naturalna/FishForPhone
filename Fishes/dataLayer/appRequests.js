var app = app || {};

(function(a) {
    a.servicesUrl = "http://fishencyclopedia.apphb.com/api/Page/getbypage?id=";
     var el = new Everlive('3iAB4xqjMTrGwsJB');
   
    a.getFishesByPage = function(pageNumber) {  
        return httpRequest.getJSON(a.servicesUrl + "" + pageNumber);
    }
    
    a.getAllPictures = function()
    {
       var books = Everlive.$.data('Pictures');
       return books.get();
    }
    
    var createUserPicture = function(username, url)
    {
        var data = Everlive.$.data('Pictures');
        data.create({ 'username' : username,'imageURL':url },
           function(data){
              a.allPictures.reload(); 
           },
           function(error){
              alert(JSON.stringify(error));
           }); 
    }
    
    a.createPicture =function(file, username)
    {
         var f = {
            "Filename": "everlive.jpg",
            "ContentType": "image/jpg",            
            "base64": file
            };
       return Everlive.$.Files.create(f,
        function (data) {
            var url = data.result.Uri;
            createUserPicture(username, url);            
            a.notifications.alert("File was succsesfully sended.");
        },
        function (error) {
            alert(JSON.stringify(error));
        });
    }
    
}(app));


























