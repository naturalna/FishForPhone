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
            "Description" : selectedDescription,
            "ImageURL": selectedImage
        };
        
        var arr = [];
        arr.push(item);
        viewModel.set("selectedFish", arr);
    }

    a.details = {
        init:init          
    };
}(app));