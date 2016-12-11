$(document).ready(function(){


//  $("#loadHtml").load("header1.html");
var royalSuiteVal = 500;
var noOfRoyalSuiteRooms = 150;
var royalSuiteTotalVal = royalSuiteVal * noOfRoyalSuiteRooms * 30 * (.75);

var noOfRomanticSuiteRooms = 100;
var romanticSuiteVal = 350;
var romanticSuiteTotalVal = noOfRomanticSuiteRooms * romanticSuiteVal  * 30 * (.75) ;

var noOfCorporateSuiteRooms = 150;
var corporateSuiteVal = 300;
var corporateSuiteTotalVal = noOfCorporateSuiteRooms * corporateSuiteVal * 30 * (.75) ;

var noOfLuxurySuiteRooms = 100;
var luxurySuiteVal = 400;
var luxurySuiteTotalVal = noOfLuxurySuiteRooms * luxurySuiteVal * 30 * (.75) ;

var totalRev = (royalSuiteTotalVal + romanticSuiteTotalVal + corporateSuiteTotalVal + luxurySuiteTotalVal) * 12 ;

var salPaid = '4461960';




//alert('inside revenuejs');
    //Royal
    $("#noOfRoyalSuiteRooms").text(noOfRoyalSuiteRooms);
    $("#royalSuiteVal").text('$'+royalSuiteVal);
    $("#royalSuiteTotalVal").text('$'+royalSuiteTotalVal);

    //Romantic
    $("#noOfRomanticSuiteRooms").text(noOfRomanticSuiteRooms);
    $("#romanticSuiteVal").text('$'+romanticSuiteVal);
    $("#romanticSuiteTotalVal").text('$'+romanticSuiteTotalVal);

    //Corporate
    $("#noOfCorporateSuiteRooms").text(noOfCorporateSuiteRooms);
    $("#corporateSuiteVal").text('$'+corporateSuiteVal);
    $("#corporateSuiteTotalVal").text('$'+corporateSuiteTotalVal);

    //Luxury
    $("#noOfLuxurySuiteRooms").text(noOfLuxurySuiteRooms);
    $("#luxurySuiteVal").text('$'+luxurySuiteVal);
    $("#luxurySuiteTotalVal").text('$'+luxurySuiteTotalVal);

    $("#totalRev").text('$'+totalRev);

      //$("#totalHotelRev").text('$'+totalRev);
      $("#totalSalPaid").text('$'+salPaid);
        $("#totalHotelRev").text('$'+(totalRev-salPaid));



});
