$(document).ready(function () {
    $('.btn-tps').click(function() {

        $(this).toggleClass('btn-plotted');
        var clickedTP = $(this).attr('id');
        if (clickedTP == 'tableTempCen') { plotTableCenterTemp = 1 - plotTableCenterTemp; }
        if (clickedTP == 'gratingTemp') { plotGratingTemp = 1 - plotGratingTemp; }
        if (clickedTP == 'enclosureTemp') { plotEnclosureTemp = 1 - plotEnclosureTemp; }
        if (clickedTP == 'iodineTemp') { plotIodineCellTemp = 1 - plotIodineCellTemp; }
        if (clickedTP == 'enclosureSetpoint') { plotEnclosureSetpoint = 1 - plotEnclosureSetpoint; }
        if (clickedTP == 'i2Setpoint') { plotIodineCellSetpoint = 1 - plotIodineCellSetpoint; }
        if (clickedTP == 'enclosureTemp2') { plotEnclosureTemp2 = 1 - plotEnclosureTemp2; }
        if (clickedTP == 'tableTempLow') { plotTableTempLow = 1 - plotTableTempLow; }
        if (clickedTP == 'structureTemp') { plotStructureTemp = 1 - plotStructureTemp; }
        if (clickedTP == 'instrumentSetpoint') { plotInstrumentSetpoint = 1 - plotInstrumentSetpoint; }
        if (clickedTP == 'instrumentTemp') { plotInstrumentTemp = 1 - plotInstrumentTemp; }
        if (clickedTP == 'coudeTemp') { plotCoudeTemp = 1 - plotCoudeTemp; }
        if (clickedTP == 'heaterSetpoint') { plotHeaterSetpoint = 1 - plotHeaterSetpoint; }
        if (clickedTP == 'barometerPress') { plotBarometer = 1 - plotBarometer; }
        if (clickedTP == 'echellePress') { plotEchellePressure = 1 - plotEchellePressure; }
        if (clickedTP == 'ccdTemp') {  plotCcdTemp = 1 - plotCcdTemp; }
        if (clickedTP == 'neckTemp') {  plotNeckTemp = 1 - plotNeckTemp; }
        if (clickedTP == 'ccdSetpoint') {  plotCcdSetpoint = 1 - plotCcdSetpoint; }

        plotTempPress();
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

    //the legend toggle
    $('.lgnd-opt').click(function() {

        $('.lgnd-opt').removeClass('active-legend');

        var $this = $(this);
        if (!$this.hasClass('active-legend')) {
            $this.addClass('active-legend');
        }
        plotLegend = 1 - plotLegend;
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
var plotLegend = 1;
var plotGratingTemp = 1;
var plotTableCenterTemp = 1;
var plotEnclosureTemp = 0;
var plotIodineCellTemp = 0;
var plotEnclosureSetpoint = 0;
var plotIodineCellSetpoint = 0;
var plotEnclosureTemp2 = 0;
var plotTableTempLow = 0;
var plotStructureTemp = 0;
var plotInstrumentSetpoint = 0;
var plotInstrumentTemp = 0;
var plotCoudeTemp = 0;
var plotHeaterSetpoint = 0;
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
