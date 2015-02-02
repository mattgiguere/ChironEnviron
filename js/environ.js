$(document).ready(function () {
    $('.btn-tps').click(function() {

        $(this).toggleClass('btn-plotted');

    });
    //the sampling rates
    $('.smpl-opt').click(function() {

        $('.smpl-opt').removeClass('active-sampling');

        var $this = $(this);
        if (!$this.hasClass('active-sampling')) {
            $this.addClass('active-sampling');
        }
        console.log($(this).attr('id'));
        smplrate = $(this).attr('id');
        plotTempPress();

    });

    $('#pastWeek').click(function() {
        $('.time-rng').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    	begDateObj = moment();
		begDateObj.days(-7);
		begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
		plotTempPress();

    });
    $('#pastMonth').click(function() {
        $('.time-rng').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    	begDateObj = moment();
		begDateObj.month(-1);
		begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
		plotTempPress();
    	
    });
    $('#pastCustom').click(function() {
        $('.time-rng').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    	
    });
});

//The default is to plot the past month:
var endDateObj = moment();
var begDateObj = moment();
begDateObj.days(-7);

//default sampling:
var smplrate='Smpl-Hourly';

var begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
var endDate = endDateObj.format('YYYY-MM-DDTHH:mm:ss');

console.log('beginning date: '+begDate);
//returns: beginning date: 2014-12-01 21:03:08
console.log('end date: '+endDate);
//returns end date: 2014-12-01 21:03:08
