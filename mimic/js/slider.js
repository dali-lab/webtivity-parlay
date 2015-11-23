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
    mb.style.width = '0';
    setTimeout(function(){
      p1.checked = true;
      p2.checked = false;
      p3.checked = false;
    },600);
  } else if(scrollX > sL/3 && scrollX <= 2 * sL/3) {
    mb.style.width = '50%';
    setTimeout(function(){
      p2.checked = true;
      p1.checked = false;
      p3.checked = false;
    },600);
  } else {
    mb.style.width = '100%';
    setTimeout(function(){
      p3.checked = true;
      p1.checked = false;
      p2.checked = false;
    },600);
  }
}
