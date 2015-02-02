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
		console.log('new begDate: '+begDate);
		plotTempPress();

    });
    $('#pastMonth').click(function() {
        $('.time-rng').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    	begDateObj = moment();
		begDateObj.days(-30);
		console.log(begDateObj);
		begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
		console.log('new begDate: '+begDate);
		plotTempPress();
    	
    });
    $('#pastYear').click(function() {
        $('.time-rng').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    	begDateObj = moment();
		begDateObj.days(-365);
		console.log(begDateObj);
		begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
		console.log('new begDate: '+begDate);
		plotTempPress();
    	
    });
    $('#pastAll').click(function() {
        $('.time-rng').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    	begDateObj = moment('2012-03-02T00:00:00');
		begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
		console.log('new begDate: '+begDate);
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

//The default values to plot:
var plotGratingTemp = 1;
var plotTableCenterTemp = 1;
var plotEnclosureTemp = 1;
var plotIodineCellTemp = 0;
var plotEnclosureSetpoint = 0;
var plotIodineCellSetpoint = 0;
var plotEnclosureTemp2 = 1;
var plotTableTempLow = 1;
var plotStructureTemp = 1;
var plotInstrumentSetpoint = 1;
var plotInstrumentTemp = 1;
var plotCoudeTemp = 1;
var plotHeaterSetpoint = 1;
var plotBarometer = 0;
var plotEchellePressure = 0;
var plotCcdTemp = 0;
var plotNeckTemp = 0;
var plotCcdSetpoint = 0;



//default sampling:
var smplrate='Smpl-Hourly';

var begDate = begDateObj.format('YYYY-MM-DDTHH:mm:ss');
var endDate = endDateObj.format('YYYY-MM-DDTHH:mm:ss');

console.log('beginning date: '+begDate);
//returns: beginning date: 2014-12-01 21:03:08
console.log('end date: '+endDate);
//returns end date: 2014-12-01 21:03:08
