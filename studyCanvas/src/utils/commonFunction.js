window.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozReauestAnimationFrame || window.oReauestAnimationFrame || window.msReauestAnimationFrame || function (/* funciton FrameRequestCallback */ callback, /* DOMElement */ element) {
    return window.setTimeout(callback, 1000 / 60)
  }
}
