$(document).ready(function(){


  $("#loadHtml").load("header1.html");

  var mesage = "This is a prototype. Hold On guys, Wait until the Website goes live.";
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

function orgChartClick(){

  window.open("OrgChart/example/example.html","popup","height=1500px,width=1500px");
//  window.open(url, windowName, "height=200,width=200");
}
