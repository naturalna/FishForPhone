var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        allPictures:[],
        change:onFishClick,
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
       
       /* a.getAllPictures().then(function (pictures) {
            viewModel.set("allPictures", pictures);            
        });  */     
    }
    
    function onFishClick(e) {  
        var selectedFish= e.data;
        a.SelectedItem = selectedFish;
        app.notifications.alert();
       app.application.navigate("views/detailsView.html#detail-view");
    }
    
    function reload()
    {
        viewModel.set("fishes", []); 
        a.getFishesByPage(a.pageCount).then(function (fishesFromRequests) {
            viewModel.set("fishes", fishesFromRequests[0].articles);            
        });    
    }
    
    

    a.allPictures = {
        init:init,
    };
}(app));