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
var endDate = new Date();
var begDate = new Date();
begDate.setDate(endDate.getDate() - 30);

console.log('beginning date: '+begDate);
console.log('end date: '+endDate);

