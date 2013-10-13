var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        change:onTakePictureClick,
        username:"default",
        allPictures:[],
    });
    
    function init(e) {
        try{
            kendo.bind(e.view.element, viewModel);
           
            a.getAllPictures().then(function (pictures) {
                viewModel.set("allPictures", pictures.result); 
                a.compass.init();
            }, function(err){
                a.notifications.alert("Lost internet connection! Please try again later.");
            }); 
       }
       catch(err){
          console.log(err);  
       }
    }
    
    function onTakePictureClick() {  
      try{
        navigator.camera.getPicture(onSuccess, onFail, 
            { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            });

            function onSuccess(imageData) {          
                a.createPicture(imageData,viewModel.username); 
            }

            function onFail(message) {
                a.notifications.alert('Failed because: ' + message);
                throw err;
            }
      }
      catch(err){
          console.log(err);  
      }
    }
    
    function reload()
    {
        try{
            viewModel.set("allPictures", []); 
            a.getAllPictures().then(function (pictures) {
                viewModel.set("allPictures", pictures.result);            
            }, function(err){
                 a.notifications.alert("Lost internet connection! Please try again later.");
                throw err;
            }); 
       }
       catch(err){
          console.log(err);  
       }
    }
    
    a.allPictures = {
        init:init,
        reload:reload,
    };
}(app));