$(document).ready(function(){


  $("#loadHtml").load("header1.html");

  var mesage = "This is a prototype. Please, wait until the website goes live.";
  // function orgChartClick(){
  //   window.open("OrgChart/example/example.html","popup","height=1500px,width=1500px");
  // //  window.open(url, windowName, "height=200,width=200");
  // }

  $("#cirque").click(function(){
      alert(mesage);
  });

  $("#kevin").click(function(){
      alert(mesage);
  });

  $("#belly").click(function(){
      alert(mesage);
  });

  $("#magic").click(function(){
      alert(mesage);
  });

  $("#casino").click(function(){
      alert(mesage);
  });

  $("#concert").click(function(){
      alert(mesage);
  });

});

var it=3;

// for (i = 1; i < it; i++) {
//   //  alert("Index is : "+ 1)
//     alert($("#sal1").val());
// }

function orgChartClick(){

  window.open("OrgChart/example/example.html","popup","height=1500px,width=1500px");
//  window.open(url, windowName, "height=200,width=200");
}
