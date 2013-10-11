var app = app || {};

(function(a) {
    a.servicesUrl = "http://fishencyclopedia.apphb.com/api/Page/getbypage?id=";
    Parse.initialize("ysDURIfbhT1mbccZpqHbNSNbSegaWLTDUiEDQyzk", "g5202vXW8V58kTVqzqKSELLil3ms54ZLmMrzXsl1");
   
    a.getFishesByPage = function(pageNumber) {  
        return httpRequest.getJSON(a.servicesUrl + "" + pageNumber);
    }
    a.getAllPictures = function()
    {
       var Pictures = Parse.Object.extend("Pictures");
        var query = new Parse.Query(Pictures);
        query.find({
          success: function(results) {
            alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              alert(object.id + ' - ' + object.get('username'));
            }
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
    }
    
    var createPicture =function(username, file)
    {
        var Pictures = Parse.Object.extend("Pictures");
        var pictures = new Pictures();
         
        pictures.set("username", "test");
        pictures.set("file", file);
        
       pictures.save(null, {
          success: function(gameScore) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + gameScore.id);
          },
          error: function(gameScore, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
          //  alert('Failed to create new object, with error code: ' + error.description);
          }
        });
    }
    
    a.createFile = function(imageURI, username)
    {
        
        /*if (imageURI.length > 0) {
          var file = imageURI;
          var name = "photo.jpg";
         
          var parseFile = new Parse.File(name, file);
            parseFile.save().then(function(f) {
              // The file has been saved to Parse.
                createPicture(f,username);
            }, function(error) {
              // The file either could not be read, or could not be saved to Parse.
            });
        }*/
        
        
        
        var fileUploadControl = $("#profilePhotoFileUpload")[0];
        if (fileUploadControl.files.length > 0) {
         var file = fileUploadControl.files[0];
          var name = "photo.png";
         
          var oFReader = new FileReader();
          var test = oFReader.readAsArrayBuffer(file);
            
          var parseFile = new Parse.File(name, test);
           
            parseFile.save();
            createPicture(parseFile, username);
                        
                        
            }
                
            }
}(app));