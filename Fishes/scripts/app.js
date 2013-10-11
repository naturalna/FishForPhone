(function (global) {
   
    var mobileSkin = "",
        app = global.app = global.app || {};

    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
        Parse.initialize("ysDURIfbhT1mbccZpqHbNSNbSegaWLTDUiEDQyzk", "g5202vXW8V58kTVqzqKSELLil3ms54ZLmMrzXsl1");
       
    }, false);

    app.changeSkin = function (e) {
        if (e.sender.element.text() === "Flat") {
            e.sender.element.text("Native");
            mobileSkin = "flat";
        }
        else {
            e.sender.element.text("Flat");
            mobileSkin = "";
        }

        app.application.skin(mobileSkin);
    };
})(window);