var app = app || {};

(function(a) {    
    a.accelerometer = {
        init:function() {
        try{
            var options = { frequency: 500 };
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

            function onSuccess(acceleration) {
                  
                if( acceleration.z >3)
                {
                    var element = document.getElementById('id');
                    element.innerHTML = 'acceleration.z: ' + acceleration.z;

                    app.pageCount++;
                    
                    if (app.pageCount == 37) {
                        app.pageCount = 1;
                    }
                    
                    app.fishes.reload();  
                }
            }

            function onError(e) {
                
            };
       }
       catch(err)
       {
          //prefer to do nothing    
       }
    },
   }
}(app));