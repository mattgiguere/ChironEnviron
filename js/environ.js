$(document).ready(function () {
    $('.btn-tps').click(function() {

        $(this).toggleClass('btn-plotted');

    });
    $('#pastWeek').click(function() {

    });
    $('#pastMonth').click(function() {
    	
    });
    $('#pastCustom').click(function() {
    	
    });
});

//The default is to plot the past month:
var endDateObj = moment();
var begDateObj = moment();
begDateObj.days(-4);

var begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
var endDate = endDateObj.format('YYYY-MM-DDTHH:mm:ss');

console.log('beginning date: '+begDate);
//returns: beginning date: 2014-12-01 21:03:08
console.log('end date: '+endDate);
//returns end date: 2014-12-01 21:03:08
