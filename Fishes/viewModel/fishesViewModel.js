var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
        fishes:[],
        change:onFishClick,
    });
    
    a.pageCount = 0;
    a.SelectedItem="";
    function init(e) {
        kendo.bind(e.view.element, viewModel);
        //request
        if(a.pageCount == 0)
        {
            a.pageCount = 1;
        }
        
        a.getFishesByPage(a.pageCount).then(function (fishesFromRequests) {
            viewModel.set("fishes", fishesFromRequests[0].articles);            
        });       
    }
    
    function onFishClick(e) {  
        var selectedFish= e.data;
        a.SelectedItem = selectedFish;
       app.application.navigate("views/detailsView.html#detail-view");
    }
    
    function reload()
    {
        viewModel.set("fishes", []); 
        a.getFishesByPage(a.pageCount).then(function (fishesFromRequests) {
            viewModel.set("fishes", fishesFromRequests[0].articles);            
        });    
    }
    

    
    
    a.fishes = {
        init:init,
        reload:reload,
    };
}(app));