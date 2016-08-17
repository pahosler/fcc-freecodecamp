(function () {
  var robot_walk = ['0px','-50px','-100px','-150px','-200px','-250px','-300px'];
  var el = document.getElementById("hello");
  console.log(el);
  var i = 0;
  setInterval(function(){
    (i<7) ? ++i : i=0;
    el.backgroundPosition = robot_walk[i] + ' 0';
  },100);
})()
