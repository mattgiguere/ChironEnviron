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
var begDate = endDate.setDate(endDate.getDate() - 30);



