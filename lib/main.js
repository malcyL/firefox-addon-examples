// main.js

var tabs = require("sdk/tabs");
var self = require("sdk/self");

tabs.on("ready", function(tab) {
  worker = tab.attach({
    contentScriptFile: self.data.url("content-script.js")
  });
  worker.port.emit("alert", "Message from the add-on");
});

tabs.open("http://www.mozilla.org");