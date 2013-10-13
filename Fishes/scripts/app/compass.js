var app = app || {};

(function(a) {    
    a.compass = {
        colorBase:"0",
        init:function() {
        try{
            var options = { frequency: 700 };
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);

            function onSuccess(heading) { 
               a.compass.colorBase = Math.floor(heading.magneticHeading / 1.45);
                var holder = document.getElementById("user");
                holder.style.background = "rgb(" + app.compass.colorBase +","+ 100 + 
                ","+ 100 + ")";
            }

            function onError(e) {
                
            };
       }
       catch(err)
       {
          a.notifications.alert("Error in compass");     
       }
    },
   }
}(app));