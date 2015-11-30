var rangeObject = document.getElementById('rangeObj');

//rangeObject.value = 0;

var vv = rangeObject.value;
var s = rangeObject.step;

rangeObject.addEventListener('input', function(){
  if(rangeObject.value > vv) {
    for(var i = 0; i < 30/s; i++) {
      this.stepUp(s);
    }
  }
  if(rangeObject.value < vv) {
    for(var i = 0; i < 30/s; i++) {
      this.stepDown(s);
    }
  }
});
