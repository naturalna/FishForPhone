var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        fishes:[],
        change:onFishClick,
    });
    
    document.addEventListener("volumeupbutton", function(){
        a.pageCount++;   
        if (app.pageCount == 37) {
            app.pageCount = 1;
        }
        
        app.fishes.reload();  
    }, false);
    
    document.addEventListener("volumedownbutton", function(){
        a.pageCount--;   
        
        if (app.pageCount == 0) {
            app.pageCount = 36;
        }
         
        app.fishes.reload();  
    }, false);
    
    a.pageCount = 0;
    a.SelectedItem="";
    
    function init(e) {
        try{
            kendo.bind(e.view.element, viewModel);

            if(a.pageCount == 0)
            {
                a.pageCount = 1;
            }
            
            a.getFishesByPage(a.pageCount).then(function (fishesFromRequests) {
                viewModel.set("fishes", fishesFromRequests[0].articles); 
                a.accelerometer.init(); 
            }, function(err){
                a.notifications.alert("Lost internet connection!");
                throw err;
            });   
       }
       catch(err){
           console.log(err); 
       }
    }
    
    function onFishClick(e) {  
        var selectedFish= e.data;
        a.SelectedItem = selectedFish;
        app.notifications.beep();
        app.application.navigate("views/detailsView.html#detail-view");
    }
    
    function reload()
    {
        try{
            viewModel.set("fishes", []); 
            
            a.getFishesByPage(a.pageCount).then(function (fishesFromRequests) {
                viewModel.set("fishes", fishesFromRequests[0].articles);            
            },function(err){
                a.notifications.alert("Lost internet connection!");
                throw err;
            }); 
       }
       catch(err){
           console.log(err); 
       }
    }

    a.fishes = {
        init:init,
        reload:reload,
    };
}(app));