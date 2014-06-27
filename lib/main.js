var urlbarButton = require('urlbarbutton').UrlbarButton,
  button;

exports.main = function () {
  button = urlbarButton({
    id : 'foobar-button',
    image : "./installed.png",
    onClick : doTheThing,
  });
};

exports.onUnload = function (reason) {
  if (reason !== 'shutdown') {
    button.remove();
  }
};

function doTheThing () {

}