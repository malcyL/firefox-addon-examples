// content-script.js

self.port.on('alert', function(message) {
  window.alert(message);
});