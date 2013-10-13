var app = app || {};

(function(a) {    
    a.notifications = {
        alert: function(message) {
            navigator.notification.alert(message);
        },
       
        beep: function() {
            navigator.notification.beep(1);
        },
        vibrate: function() {
            navigator.notification.vibrate(2000);
        }
    };
}(app));