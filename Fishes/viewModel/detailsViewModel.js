var app = app || {};

(function(a) {
    var viewModel = kendo.observable({
         selectedFish:[],
    });
    
    function init(e)
    {
        kendo.bind(e.view.element, viewModel);
        var selectedImage = a.SelectedItem.ImageURL;
        var selectedDescription = a.SelectedItem.Description;
        
        var item = {
            "Description":selectedDescription,
            "ImageURL": selectedImage
        };
        var arr = [];
        arr.push(item);
        viewModel.set("selectedFish",arr);
       // viewModel.set(selectedFish[0]["Description"], );
    }
    
   /* a.pageCount = 0;
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
    }*/
    
    a.details = {
        init:init          
    };
}(app));