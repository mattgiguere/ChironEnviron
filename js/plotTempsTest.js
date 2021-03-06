/*     ***Begin D3 Global Variables***
These are used for both makeInitTimeSeriesPlot()
and updateTimePlot()
*/

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 10, bottom: 100, left: 60},
    margin2 = {top:430, right: 10, bottom: 20, left:60},
    padding = {top:5, right:5, bottom:20, left: 20},
    height = 500 - margin.top - margin.bottom,
    height2 = 500 - margin2.top - margin2.bottom;

//make a responsize width:
var width = parseInt(d3.select(".d3-plot-window").style('width'), 10) - margin.left - margin.right;


//calculate fractional padding:
var fpad = padding/100;

// Parse the date / time
//This is the line for the CSV
//var parseDate = d3.time.format("%d-%b-%y").parse;
//This is the line for data from the DB
var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse;

// Set the ranges
var xScale = d3.time.scale().range([0, width]);
var xScale2 = d3.time.scale().range([0, width]);
var yScale = d3.scale.linear().range([height, 0]);
var yScale2 = d3.scale.linear().range([height2, 0]);

//add tool-tips:
var tooltip = d3.select("body")
  .append("div")
  .attr('class', 'd3-tip')
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .text("a simple tooltip");


// Define the axes
var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .ticks(5);

var xAxis2 = d3.svg.axis()
                .scale(xScale2)
                .orient("bottom")
                .ticks(5);

var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .ticks(5);


var brush = d3.svg.brush()
    .x(xScale2)
    .on("brush", brushed);

var area = d3.svg.area()
    .interpolate("linear")
    .x(function(d) { return xScale(d.date); })
    .y0(height)
    .y1(function(d) { return yScale(d.tableCenterTemp); });

var area2 = d3.svg.area()
    .interpolate("linear")
    .x(function(d) { return xScale2(d.date); })
    .y0(height2)
    .y1(function(d) { return yScale2(d.tableCenterTemp); });

/*Add the svg canvas to the "d3" class div on the page.
The "d3" div is just a marker location so that I could
put the plot where I wanted it within the HTML.*/
var svg = d3.select(".d3-plot-window")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

svg.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

var focus = svg.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var context = svg.append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

//These groups are needed for update purposes:
var focuspathgrp = focus.append("g");
var focuscircgrp = focus.append("g");
var contextpathgrp = context.append("g");
var contextcircgrp = context.append("g");

var xAxisSVG = focus.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

//Add x-label:
xAxisSVG.append("text")
    .attr("class", "x label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")            
    .text('Observation Date');

var yAxisSVG = focus.append("g")
    .attr("class", "y axis")
    .call(yAxis);

//Add y-label:
yAxisSVG.append("text")
    .attr("class", "y label")
    .attr("transform", "rotate(-90)")
    .attr("x", -15)
    .attr("y", 6)
    .attr("dy", ".71em")
    //.attr("x", width)
    .style("text-anchor", "end")
    .text('Temperature');

var xAxis2SVG = context.append("g")
          .attr("class", "x axis2")
          .attr("transform", "translate(0," + height2 + ")")
          .call(xAxis2);

var mytemps = ["gratingTemp", "tableCenterTemp", "enclosureTemp",
               "iodineCellTemp", "enclosureSetpoint", "iodineCellSetpoint",
               "enclosureTemp2", "tableTempLow", "structureTemp",
               "instrumentSetpoint", "instrumentTemp", "coudeTemp",
               "heaterSetpoint", "barometer", "echellePressure",
               "ccdTemp", "neckTemp", "ccdSetpoint"];

var dotClassMap = {
  "gratingTemp": ".gratingTemp.dot",
  "tableCenterTemp": ".tabcen.dot",
  "enclosureTemp": ".enclTemp.dot",
  "iodineCellTemp": ".iodTemp.dot",
  "enclosureSetpoint": ".enclStpt.dot",
  "iodineCellSetpoint": ".iodStpt.dot",
  "enclosureTemp2": ".enclTemp2.dot",
  "tableTempLow": ".tabTmpLow.dot",
  "structureTemp": ".strctrTemp.dot",
  "instrumentSetpoint": ".instrmntStpt.dot",
  "instrumentTemp": ".instrmntTmp.dot",
  "coudeTemp": ".coudeTmp.dot",
  "heaterSetpoint": ".heaterStpt.dot",
  "barometer": ".barometer.dot",
  "echellePressure": ".echpres.dot",
  "ccdTemp": ".ccdTmp.dot",
  "neckTemp": ".nckTmp.dot",
  "ccdSetpoint": ".ccdStpt.dot"
}

var addClassMap = {
  "gratingTemp": "gratingTemp dot",
  "tableCenterTemp": "tabcen dot",
  "enclosureTemp": "enclTemp dot",
  "iodineCellTemp": "iodTemp dot",
  "enclosureSetpoint": "enclStpt dot",
  "iodineCellSetpoint": "iodStpt dot",
  "enclosureTemp2": "enclTemp2 dot",
  "tableTempLow": "tabTmpLow dot",
  "structureTemp": "strctrTemp dot",
  "instrumentSetpoint": "instrmntStpt dot",
  "instrumentTemp": "instrmntTmp dot",
  "coudeTemp": "coudeTmp dot",
  "heaterSetpoint": "heaterStpt dot",
  "barometer": "barometer dot",
  "echellePressure": "echpres dot",
  "ccdTemp": "ccdTmp dot",
  "neckTemp": "nckTmp dot",
  "ccdSetpoint": "ccdStpt dot"
}

var descriptionMap = {
  "gratingTemp": "Grating Temp (C)",
  "tableCenterTemp": "Table Center (C)",
  "enclosureTemp": "Enclosure Temp (C)",
  "iodineCellTemp": "Iodine Temp (C)",
  "enclosureSetpoint": "Enclosure Setpoint (C)",
  "iodineCellSetpoint": "Iodine Cell Setpoint (C)",
  "enclosureTemp2": "Enclosure Temp 2 (C)",
  "tableTempLow": "Table Temp Low (C)",
  "structureTemp": "Structure Temp (C)",
  "instrumentSetpoint": "Instrument Setpoint (C)",
  "instrumentTemp": "Instrument Temp (C)",
  "coudeTemp": "Coude Room Temp (C)",
  "heaterSetpoint": "Heater Setpoint (C)",
  "barometer": "Barometer Pressure (mbar)",
  "echellePressure": "Echelle Grating Pressure (mbar)",
  "ccdTemp": "CCD Temp (C)",
  "neckTemp": "Dewar Neck Temp (C)",
  "ccdSetpoint": "CCD Setpoint (C)"
}

/* ***End D3 Global Variables*** */
function brushed() {
    xScale.domain(brush.empty() ? xScale2.domain() : brush.extent());
    focus.select(".area").attr("d", area);
    focus.select(".x.axis").call(xAxis);

    mytemps.forEach(function(tempKey) {

      //console.log(tempKey);
      var newdots = focuscircgrp
        .selectAll(dotClassMap[tempKey])
        .attr('cx', function(d) { return xScale(d.date); })
        .attr('cy', function(d) { return yScale(d[tempKey]); });
    });

/*    focuscircgrp.selectAll(".dot")
        .attr("cx", function(d) { return xScale(d.date); })
        .attr("cy", function(d) { return yScale(d.gratingTemp); }); */
}

if (plotLegend) {
    legend = svg.append("g")
      .attr("class","legend")
      .attr("transform","translate(90,30)")
      .call(d3.legend);
} else {
    legend = svg.append("g");
}

function plotTempPress(param) {

  var setTemps = {
    "gratingTemp": plotGratingTemp,
    "tableCenterTemp": plotTableCenterTemp,
    "enclosureTemp": plotEnclosureTemp,
    "iodineCellTemp": plotIodineCellTemp,
    "enclosureSetpoint": plotEnclosureSetpoint,
    "iodineCellSetpoint": plotIodineCellSetpoint,
    "enclosureTemp2": plotEnclosureTemp2,
    "tableTempLow": plotTableTempLow,
    "structureTemp": plotStructureTemp,
    "instrumentSetpoint": plotInstrumentSetpoint,
    "instrumentTemp": plotInstrumentTemp,
    "coudeTemp": plotCoudeTemp,
    "heaterSetpoint": plotHeaterSetpoint,
    "barometer": plotBarometer,
    "echellePressure": plotEchellePressure,
    "ccdTemp": plotCcdTemp,
    "neckTemp": plotNeckTemp,
    "ccdSetpoint": plotCcdSetpoint
  }

  var phpCall = '';
  if (plotGratingTemp) { phpCall += '&gratingTemp=True'};
  if (plotTableCenterTemp) { phpCall += '&tableCenterTemp=True'};
  if (plotEnclosureTemp) { phpCall += '&enclosureTemp=True'};
  if (plotIodineCellTemp) { phpCall += '&iodineCellTemp=True'};
  if (plotEnclosureSetpoint) { phpCall += '&enclosureSetpoint=True'};
  if (plotIodineCellSetpoint) { phpCall += '&iodineCellSetpoint=True'};
  if (plotEnclosureTemp2) { phpCall += '&enclosureTemp2=True'};
  if (plotTableTempLow) { phpCall += '&tableTempLow=True'};
  if (plotStructureTemp) { phpCall += '&structureTemp=True'};
  if (plotInstrumentSetpoint) { phpCall += '&instrumentSetpoint=True'};
  if (plotInstrumentTemp) { phpCall += '&instrumentTemp=True'};
  if (plotCoudeTemp) { phpCall += '&coudeTemp=True'};
  if (plotHeaterSetpoint) { phpCall += '&heaterSetpoint=True'};
  if (plotBarometer) { phpCall += '&barometer=True'};
  if (plotEchellePressure) { phpCall += '&echellePressure=True'};
  if (plotCcdTemp) { phpCall += '&ccdTemp=True'};
  if (plotNeckTemp) { phpCall += '&neckTemp=True'};
  if (plotCcdSetpoint) { phpCall += '&ccdSetpoint=True'};

  fullPhpCall = "php/getNewData.php?begDate="+begDate+"&endDate="+endDate+"&smplRate="+smplrate+phpCall;
  console.log(fullPhpCall);
  d3.json(fullPhpCall, function(error, data) {
    if (error) {
      console.log("There was an error loading the JSON blob.");
      console.log("The dates passed to getNewData.php were:");
      console.log(begDate);
      console.log(endDate);
      console.log(error);
    } else {

      //declare 3 new vars: an empty object, a list, and a number:
      var tempsByMonitor = {},
          temps = d3.keys(data[0]).filter(function (d) { return d !== 'date'; }),
          n = temps.length;
      console.log(temps);
      console.log(n);

      data.forEach(function(d) {
          d.date = parseDate(d.date);
          temps.forEach(function(k) {
            d[k] = +d[k];
          })
      });

      //now fill the tempsByMonitor object with the data:
      temps.forEach(function(temp) {
          tempsByMonitor[temp] = d3.extent(data, function (d) { return d[temp]; });
      });

      // Scale the range of the data
      xScale.domain(d3.extent(data, function(d) { return d.date; }));
      yScale.domain([d3.min(data, function(d) { return getMinValue(d); }), 
          d3.max(data, function(d) { return getMaxValue(d); })]);
      xScale2.domain(xScale.domain());
      yScale2.domain(yScale.domain());

      contextpathgrp.append("path")
          .datum(data)
          .attr("class", "area")
          .attr("d", area2);
      
      contextcircgrp.selectAll(".tabcen.dot")
          .data(data)
          .enter()
          .append("circle")
          .attr("class", "tabcen dot")
          .attr('r', 3.5)
          .attr('cx', function(d) { return xScale2(d.date); })
          .attr('cy', function(d) { return yScale2(d.tableCenterTemp); });

      //Remove the legend to start fresh:
      legend.selectAll('g').remove();

      //////////////////////////////////////////////////
      //Update all focus data points:
      //////////////////////////////////////////////////
      mytemps.forEach(function(tempKey) {

        var newFocusDots = focuscircgrp
          .selectAll(dotClassMap[tempKey])
          .data(data);

        var newContextDots = contextcircgrp
          .selectAll(dotClassMap[tempKey])
          .data(data)
        
        newFocusDots.exit()
            .remove();

        newContextDots.exit()
            .remove();

        if (setTemps[tempKey]) {
          newFocusDots
              .transition()
              .duration(1000)
              .attr('cx', function(d) { return xScale(d.date); })
              .attr('cy', function(d) { return yScale(d[tempKey]); });

          newContextDots
            .transition()
            .duration(1000)
            .attr('cx', function(d) { return xScale2(d.date); })
            .attr('cy', function(d) { return yScale2(d[tempKey]); });

          newFocusDots
              .enter()
              .append("circle")
              .attr("class", addClassMap[tempKey])
              .attr('r', 2.5)
              .attr('cx', function(d) { return xScale(d.date); })
              .attr('cy', function(d) { return yScale(d[tempKey]); })
              .attr("data-legend",function(d) { return descriptionMap[tempKey]; })
              .on('mouseover', function(d){
                var content = "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>";
                content += "<p><strong>" + descriptionMap[tempKey] + ":</strong> <span style='color:#428BCA'>" + d[tempKey] + "</span></p>";
                return tooltip
                  .style("visibility", "visible")
                  .html(content);
              })
              .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
              .on('mouseout', function(){return tooltip.style("visibility", "hidden");})
              .transition()
              .duration(1000);          


          newContextDots
            .enter()
            .append("circle")
            .attr("class", addClassMap[tempKey])
            .attr('r', 2.5)
            .attr('cx', function(d) { return xScale2(d.date); })
            .attr('cy', function(d) { return yScale2(d[tempKey]); })
            .transition()
            .duration(1000);


        } else {
          focuscircgrp.selectAll(dotClassMap[tempKey]).remove();
          contextcircgrp.selectAll(dotClassMap[tempKey]).remove();
        }
      });


      if (plotLegend) {
          legend = svg.append("g")
            .attr("class","legend")
            .attr("transform","translate(90,30)")
            .call(d3.legend);
      }

      //Make the blue path in the context region:
      contextpathgrp.selectAll("path")
          .datum(data)
          .attr("class", "area")
          .attr("d", area2)
          .transition()
          .duration(1000);

      contextpathgrp.select("path")
          .remove();
      
      contextpathgrp
          .append('path')
          .datum(data)
          .attr("class", "area")
          .attr("d", area2);

      context.append("g")
          .attr("class", "x brush")
          .call(brush)
          .selectAll('rect')
          .attr("y", -6)
          .attr("height", height2 + 7);

      /*Now update the axes. */
      // Update the X Axis
      svg.select(".x.axis")
          .transition()
          .duration(1000)
          .call(xAxis);

      svg.select(".x.axis2")
          .transition()
          .duration(1000)
          .call(xAxis2);

      // Update the Y Axis
      svg.select(".y.axis")
          .transition()
          .duration(1000)
          .call(yAxis);

      //Update X Axis Label:
      focus.select(".x.label")
          .attr("class", "x label")
          .attr("x", width)
          .attr("y", -6)
          .style("text-anchor", "end")            
          .text('Observation Date');

      //Add y-label:
      focus.select(".y.label")
          .attr("class", "y label")
          .attr("transform", "rotate(-90)")
          .attr("x", -15)
          .attr("y", 6)
          .attr("dy", ".71em")
          //.attr("x", width)
          .style("text-anchor", "end")
          .text('Temperature');

    }

  });
}

function getMinValue(d) {
    var newmin = 1e6;
    if (plotTableCenterTemp) { newmin = d.tableCenterTemp; }
    if (plotGratingTemp) { newmin = (newmin < d.gratingTemp) ? newmin : d.gratingTemp; }
    if (plotEnclosureTemp) { newmin = (newmin < d.enclosureTemp) ? newmin : d.enclosureTemp; }
    if (plotIodineCellTemp) { newmin = (newmin < d.iodineCellTemp) ? newmin : d.iodineCellTemp; }
    if (plotEnclosureSetpoint) { newmin = (newmin < d.enclosureSetpoint) ? newmin : d.enclosureSetpoint; }
    if (plotIodineCellSetpoint) { newmin = (newmin < d.iodineCellSetpoint) ? newmin : d.iodineCellSetpoint; }
    if (plotEnclosureTemp2) { newmin = (newmin < d.enclosureTemp2) ? newmin : d.enclosureTemp2; }
    if (plotTableTempLow) { newmin = (newmin < d.tableTempLow) ? newmin : d.tableTempLow; }
    if (plotStructureTemp) { newmin = (newmin < d.structureTemp) ? newmin : d.structureTemp; }
    if (plotInstrumentSetpoint) { newmin = (newmin < d.instrumentSetpoint) ? newmin : d.instrumentSetpoint; }
    if (plotInstrumentTemp) { newmin = (newmin < d.instrumentTemp) ? newmin : d.instrumentTemp; }
    if (plotCoudeTemp) { newmin = (newmin < d.coudeTemp) ? newmin : d.coudeTemp; }
    if (plotHeaterSetpoint) { newmin = (newmin < d.heaterSetpoint) ? newmin : d.heaterSetpoint; }
    if (plotBarometer) { newmin = (newmin < d.barometer) ? newmin : d.barometer; }
    if (plotEchellePressure) { newmin = (newmin < d.echellePressure) ? newmin : d.echellePressure; }
    if (plotCcdTemp) { newmin = (newmin < d.ccdTemp) ? newmin : d.ccdTemp; }
    if (plotNeckTemp) { newmin = (newmin < d.neckTemp) ? newmin : d.neckTemp; }
    if (plotCcdSetpoint) { newmin = (newmin < d.ccdSetpoint) ? newmin : d.ccdSetpoint; }
    newmin -= 0.5;

    return newmin;
}

function getMaxValue(d) {
    var newmax = 0;
    if (plotTableCenterTemp) { newmax = d.tableCenterTemp; }
    if (plotGratingTemp) { newmax = (newmax > d.gratingTemp) ? newmax : d.gratingTemp; }
    if (plotEnclosureTemp) { newmax = (newmax > d.enclosureTemp) ? newmax : d.enclosureTemp; }
    if (plotIodineCellTemp) { newmax = (newmax > d.iodineCellTemp) ? newmax : d.iodineCellTemp; }
    if (plotEnclosureSetpoint) { newmax = (newmax > d.enclosureSetpoint) ? newmax : d.enclosureSetpoint; }
    if (plotIodineCellSetpoint) { newmax = (newmax > d.iodineCellSetpoint) ? newmax : d.iodineCellSetpoint; }
    if (plotEnclosureTemp2) { newmax = (newmax > d.enclosureTemp2) ? newmax : d.enclosureTemp2; }
    if (plotTableTempLow) { newmax = (newmax > d.tableTempLow) ? newmax : d.tableTempLow; }
    if (plotStructureTemp) { newmax = (newmax > d.structureTemp) ? newmax : d.structureTemp; }
    if (plotInstrumentSetpoint) { newmax = (newmax > d.instrumentSetpoint) ? newmax : d.instrumentSetpoint; }
    if (plotInstrumentTemp) { newmax = (newmax > d.instrumentTemp) ? newmax : d.instrumentTemp; }
    if (plotCoudeTemp) { newmax = (newmax > d.coudeTemp) ? newmax : d.coudeTemp; }
    if (plotHeaterSetpoint) { newmax = (newmax > d.heaterSetpoint) ? newmax : d.heaterSetpoint; }
    if (plotBarometer) { newmax = (newmax > d.barometer) ? newmax : d.barometer; }
    if (plotEchellePressure) { newmax = (newmax > d.echellePressure) ? newmax : d.echellePressure; }
    if (plotCcdTemp) { newmax = (newmax > d.ccdTemp) ? newmax : d.ccdTemp; }
    if (plotNeckTemp) { newmax = (newmax > d.neckTemp) ? newmax : d.neckTemp; }
    if (plotCcdSetpoint) { newmax = (newmax > d.ccdSetpoint) ? newmax : d.ccdSetpoint; }

    return newmax;
}

window.onload = plotTempPress(); //makeInitTimeSeriesPlot();
