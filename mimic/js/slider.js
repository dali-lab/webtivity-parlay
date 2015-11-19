function getScrollBar(){
  return document.getElementById('scrollBarHider');
}

var initalizeScrollBar = function() {
  getScrollBar().scrollLeft = 0;
}

initalizeScrollBar();

var run = function(){
//  var scrollController = document.getElementById('scrollBarHider');

  scrollController = getScrollBar();
  var scrollX = scrollController.scrollLeft;
  //document.getElementById('logger').innerHTML = 'scrollX: ' + scrollX;
  var scLength = scrollController.offsetWidth;
  var ctLength = document.getElementById('content').offsetWidth;

  var sL = ctLength - scLength;
  var p1 = document.getElementById('p1');
  var p2 = document.getElementById('p2');
  var p3 = document.getElementById('p3');
  var mb = document.getElementById('mb');

  if(scrollX <= sL/3) {
    p1.checked = true;
    p2.checked = false;
    p3.checked = false;
    mb.style.width = '0';
  } else if(scrollX > sL/3 && scrollX <= 2 * sL/3) {
    p2.checked = true;
    p3.checked = false;
    p1.checked = false;
    mb.style.width = '50%';
  } else {
    p3.checked = true;
    p2.checked = false;
    p1.checked = false;
    mb.style.width = '100%';
  }
}
