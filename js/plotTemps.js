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
var tctip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Table Center Temp (C):</strong> <span style='color:#428BCA'>" + d.ydata + "</span></p>";
  });

var grtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Grating Temp (C):</strong> <span style='color:#428BCA'>" + d.gratingTemp + "</span></p>";
  });

var encltmptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Enclosure Temp (C):</strong> <span style='color:#428BCA'>" + d.enclosureTemp + "</span></p>";
  });

var iodtmptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Iodine Temp (C):</strong> <span style='color:#428BCA'>" + d.iodineCellTemp + "</span></p>";
  });

var enclsptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Enclosure Setpoint (C):</strong> <span style='color:#428BCA'>" + d.enclosureSetpoint + "</span></p>";
  });

var iodsptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Iodine Setpoint (C):</strong> <span style='color:#428BCA'>" + d.iodineCellSetpoint + "</span></p>";
  });

var encltmp2tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Enclosure Temp 2 (C):</strong> <span style='color:#428BCA'>" + d.enclosureTemp2 + "</span></p>";
  });

var ttlowtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Table Temp Low(C):</strong> <span style='color:#428BCA'>" + d.tableTempLow + "</span></p>";
  });

var strtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Structure Temp (C):</strong> <span style='color:#428BCA'>" + d.structureTemp + "</span></p>";
  });

var instsptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Instrument Setpoint (C):</strong> <span style='color:#428BCA'>" + d.instrumentSetpoint + "</span></p>";
  });

var instrmntTmptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Instrument Temp (C):</strong> <span style='color:#428BCA'>" + d.instrumentTemp + "</span></p>";
  });

var coudtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Coude Temp (C):</strong> <span style='color:#428BCA'>" + d.coudeTemp + "</span></p>";
  });

var htrtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Heater Setpoint (C):</strong> <span style='color:#428BCA'>" + d.heaterSetpoint + "</span></p>";
  });

var baromtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Barometer Temp (C):</strong> <span style='color:#428BCA'>" + d.barometer + "</span></p>";
  });

var echprestip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Echelle Pressure (C):</strong> <span style='color:#428BCA'>" + d.echellePressure + "</span></p>";
  });

var ccdtip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>CCD Temp (C):</strong> <span style='color:#428BCA'>" + d.ccdTemp + "</span></p>";
  });

var ncktip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>Neck Temp (C):</strong> <span style='color:#428BCA'>" + d.neckTemp + "</span></p>";
  });

var ccdsptip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<p><strong>Date:</strong> <span style='color:#428BCA'>" + d.date + "</span></p>" +
            "<p><strong>CCD Setpoint (C):</strong> <span style='color:#428BCA'>" + d.ccdSetpoint + "</span></p>";
  });

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
    .y1(function(d) { return yScale(d.ydata); });

var area2 = d3.svg.area()
    .interpolate("linear")
    .x(function(d) { return xScale2(d.date); })
    .y0(height2)
    .y1(function(d) { return yScale2(d.ydata); });

/*Add the svg canvas to the "d3" class div on the page.
The "d3" div is just a marker location so that I could
put the plot where I wanted it within the HTML.*/
var svg = d3.select(".d3-plot-window")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

svg.call(tctip);
svg.call(grtip);
svg.call(encltmptip);
svg.call(iodtmptip);
svg.call(enclsptip);
svg.call(iodsptip);
svg.call(encltmp2tip);
svg.call(ttlowtip);
svg.call(strtip);
svg.call(instsptip);
svg.call(instrmntTmptip);
svg.call(coudtip);
svg.call(htrtip);
svg.call(baromtip);
svg.call(ccdtip);
svg.call(ncktip);
svg.call(ccdsptip);

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


/* ***End D3 Global Variables*** */
function plotInitTempPress() {
    console.log("php/getNewData.php?begDate="+begDate+"&endDate="+endDate+"&smplRate="+smplrate);
    d3.json("php/getNewData.php?begDate="+begDate+"&endDate="+endDate+"&smplRate="+smplrate, function(error, data) {
        if (error) {
            console.log("There was an error loading the JSON blob.");
            console.log("The dates passed to getNewData.php were:");
            console.log(begDate);
            console.log(endDate);
            console.log(error);
        } else {

            
            data.forEach(function(d) {
                d.date = parseDate(d.date);
                d.ydata = +d.ydata;
                d.gratingTemp = +d.gratingTemp;
            });
            
            //console.log("Now in d3.json...");

            // Scale the range of the data
            xScale.domain(d3.extent(data, function(d) { return d.date; }));
            yScale.domain([d3.min(data, function(d) { return getMinValue(d); }), 
                d3.max(data, function(d) { return getMaxValue(d); })]);
            xScale2.domain(xScale.domain());
            yScale2.domain(yScale.domain());
            
            focuscircgrp.selectAll(".tabcen.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "tabcen dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ydata); })
                .attr("data-legend",function(d) { return 'Table Center'; })
                .on('mouseover', tctip.show)
                .on('mouseout', tctip.hide);

            if (plotGratingTemp) {
                focuscircgrp.selectAll(".gratingTemp.dot")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("class", "gratingTemp dot")
                    .attr('r', 2.5)
                    .attr('cx', function(d) { return xScale(d.date); })
                    .attr('cy', function(d) { return yScale(d.gratingTemp); })
                    .attr("data-legend", function(d) { return 'Grating Temp'; })
                    .on('mouseover', grtip.show)
                    .on('mouseout', grtip.hide);
            }

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
                .attr('cy', function(d) { return yScale2(d.ydata); });

            context.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height2 + ")")
                .call(xAxis2);

            context.append("g")
                .attr("class", "x brush")
                .call(brush)
                .selectAll('rect')
                .attr("y", -6)
                .attr("height", height2 + 7);

            legend = svg.append("g")
              .attr("class","legend")
              .attr("transform","translate(90,30)")
              .call(d3.legend);

        }
    });

}

function brushed() {
    xScale.domain(brush.empty() ? xScale2.domain() : brush.extent());
    focus.select(".area").attr("d", area);
    focus.select(".x.axis").call(xAxis);
    focuscircgrp.selectAll(".dot")
        .attr("cx", function(d) { return xScale(d.date); })
        .attr("cy", function(d) { return yScale(d.ydata); });
}

function type(d) {
    d.date = parseDate(d.date);
    d.ydata = +d.ydata;
    return d;
}

function plotTempPress(param) {
    console.log("php/getNewData.php?begDate="+begDate+"&endDate="+endDate+"&smplRate="+smplrate);
    d3.json("php/getNewData.php?begDate="+begDate+"&endDate="+endDate+"&smplRate="+smplrate, function(error, data) {
        if (error) {
            console.log("There was an error loading the JSON blob.");
            console.log("The dates passed to getNewData.php were:");
            console.log(begDate);
            console.log(endDate);
            console.log(error);
        } else {


            data.forEach(function(d) {
                d.date = parseDate(d.date);
                d.ydata = +d.ydata;
            });

            // Scale the range of the data
            xScale.domain(d3.extent(data, function(d) { return d.date; }));
            yScale.domain([d3.min(data, function(d) { return getMinValue(d); }), 
                d3.max(data, function(d) { return getMaxValue(d); })]);
            xScale2.domain(xScale.domain());
            yScale2.domain(yScale.domain());

            //Remove the legend to start fresh:
            legend.selectAll('g').remove();

            /*
            focuspathgrp.select('path')
                .remove()

            focuspathgrp.append("path")
                .datum(data)
                .attr("class", "area")
                .attr("d", area);
            */

            /*
            focuspathgrp.append("path")
                .datum(data)
                .attr("class", "area")
                .attr("d", area);
            */
            //focus.select(".area").attr("d", area);

            //////////////////////////////////////////////////
            //Update all focus data points:
            //////////////////////////////////////////////////
            //1. TableCenterTemp
            if (plotTableCenterTemp) {
            focuscircgrp.selectAll(".tabcen.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ydata); });

            focuscircgrp.selectAll(".tabcen.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".tabcen.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "tabcen dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ydata); })
                .attr("data-legend",function(d) { return 'Grating Temp'; })
                .on('mouseover', tctip.show)
                .on('mouseout', tctip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".tabcen.dot")
                    .data(data)
                    .remove();
                }

            //2. GratingTemp
            if (plotGratingTemp) {
            focuscircgrp.selectAll(".gratingTemp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.gratingTemp); });

            focuscircgrp.selectAll(".gratingTemp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".gratingTemp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "gratingTemp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.gratingTemp); })
                .attr("data-legend", function(d) { return 'Grating Temp'; })
                .on('mouseover', grtip.show)
                .on('mouseout', grtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".gratingTemp.dot")
                    .data(data)
                    .remove();
            }

            //3. EnclosureTemp
            if (plotEnclosureTemp) {
            focuscircgrp.selectAll(".enclTemp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.enclosureTemp); });

            focuscircgrp.selectAll(".enclTemp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".enclTemp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "enclTemp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.enclosureTemp); })
                .attr("data-legend", function(d) { return 'Enclosure Temp'; })
                .on('mouseover', encltmptip.show)
                .on('mouseout', encltmptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".enclTemp.dot")
                    .data(data)
                    .remove();
            }

            //4. IodineTemp
            if (plotIodineCellTemp) {
            focuscircgrp.selectAll(".iodTemp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.iodineCellTemp); });

            focuscircgrp.selectAll(".iodTemp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".iodTemp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "iodTemp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.iodineCellTemp); })
                .attr("data-legend", function(d) { return 'Iodine Temp'; })
                .on('mouseover', iodtmptip.show)
                .on('mouseout', iodtmptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".iodTemp.dot")
                    .data(data)
                    .remove();
            }
            //end of 4

            //5. Enclosure Setpoint
            if (plotEnclosureSetpoint) {
            focuscircgrp.selectAll(".enclStpt.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.enclosureSetpoint); });

            focuscircgrp.selectAll(".enclStpt.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".enclStpt.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "enclStpt dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.enclosureSetpoint); })
                .attr("data-legend", function(d) { return 'Enclosure Setpoint'; })
                .on('mouseover', enclsptip.show)
                .on('mouseout', enclsptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".enclStpt.dot")
                    .data(data)
                    .remove();
            }
            //end of 5

            //6. Iodine Cell Setpoint
            if (plotIodineCellSetpoint) {
            focuscircgrp.selectAll(".iodStpt.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.iodineCellSetpoint); });

            focuscircgrp.selectAll(".iodStpt.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".iodStpt.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "iodStpt dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.iodineCellSetpoint); })
                .attr("data-legend", function(d) { return 'Iodine Setpoint'; })
                .on('mouseover', iodsptip.show)
                .on('mouseout', iodsptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".iodStpt.dot")
                    .data(data)
                    .remove();
            }
            //end of 6

            //7. Enclosure Temp 2
            if (plotEnclosureTemp2) {
            focuscircgrp.selectAll(".enclTemp2.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.enclosureTemp2); });

            focuscircgrp.selectAll(".enclTemp2.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".enclTemp2.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "enclTemp2 dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.enclosureTemp2); })
                .attr("data-legend", function(d) { return 'Enclosure Temp 2'; })
                .on('mouseover', encltmp2tip.show)
                .on('mouseout', encltmp2tip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".enclTemp2.dot")
                    .data(data)
                    .remove();
            }
            //end of 7


            //8. Table Temp Low
            if (plotTableTempLow) {
            focuscircgrp.selectAll(".tabTmpLow.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.tableTempLow); });

            focuscircgrp.selectAll(".tabTmpLow.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".tabTmpLow.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "tabTmpLow dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.tableTempLow); })
                .attr("data-legend", function(d) { return 'Table Temp Low'; })
                .on('mouseover', ttlowtip.show)
                .on('mouseout', ttlowtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".tabTmpLow.dot")
                    .data(data)
                    .remove();
            }
            //end of 8


            //9. Structure Temp
            if (plotStructureTemp) {
            focuscircgrp.selectAll(".strctrTemp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.structureTemp); });

            focuscircgrp.selectAll(".strctrTemp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".strctrTemp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "strctrTemp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.structureTemp); })
                .attr("data-legend", function(d) { return 'Structure Temp'; })
                .on('mouseover', strtip.show)
                .on('mouseout', strtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".strctrTemp.dot")
                    .data(data)
                    .remove();
            }
            //end of 9


            //10. Instrument Setpoint
            if (plotInstrumentSetpoint) {
            focuscircgrp.selectAll(".instrmntStpt.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.instrumentSetpoint); });

            focuscircgrp.selectAll(".instrmntStpt.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".instrmntStpt.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "instrmntStpt dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.instrumentSetpoint); })
                .attr("data-legend", function(d) { return 'Instrument Setpoint'; })
                .on('mouseover', instsptip.show)
                .on('mouseout', instsptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".instrmntStpt.dot")
                    .data(data)
                    .remove();
            }
            //end of 10


            //11. Instrument Temp
            if (plotInstrumentTemp) {
            focuscircgrp.selectAll(".instrmntTmp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.instrumentTemp); });

            focuscircgrp.selectAll(".instrmntTmp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".instrmntTmp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "instrmntTmp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.instrumentTemp); })
                .attr("data-legend", function(d) { return 'Instrument Temp'; })
                .on('mouseover', instrmntTmptip.show)
                .on('mouseout', instrmntTmptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".instrmntTmp.dot")
                    .data(data)
                    .remove();
            }
            //end of 11


            //12. Coude TEmp
            if (plotCoudeTemp) {
            focuscircgrp.selectAll(".coudeTmp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.coudeTemp); });

            focuscircgrp.selectAll(".coudeTmp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".coudeTmp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "coudeTmp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.coudeTemp); })
                .attr("data-legend", function(d) { return 'Coude Temp'; })
                .on('mouseover', coudtip.show)
                .on('mouseout', coudtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".coudeTmp.dot")
                    .data(data)
                    .remove();
            }
            //end of 12


            //13. Heater Setpoint
            if (plotHeaterSetpoint) {
            focuscircgrp.selectAll(".heaterStpt.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.heaterSetpoint); });

            focuscircgrp.selectAll(".heaterStpt.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".heaterStpt.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "heaterStpt dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.heaterSetpoint); })
                .attr("data-legend", function(d) { return 'Heater Setpoint'; })
                .on('mouseover', htrtip.show)
                .on('mouseout', htrtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".heaterStpt.dot")
                    .data(data)
                    .remove();
            }
            //end of 13


            //14. Barometer
            if (plotBarometer) {
            focuscircgrp.selectAll(".barometer.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.barometer); });

            focuscircgrp.selectAll(".barometer.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".barometer.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "barometer dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.barometer); })
                .attr("data-legend", function(d) { return 'Barometer'; })
                .on('mouseover', baromtip.show)
                .on('mouseout', baromtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".barometer.dot")
                    .data(data)
                    .remove();
            }
            //end of 14


            //15. Echelle Pressure
            if (plotEchellePressure) {
            focuscircgrp.selectAll(".echpres.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.echellePressure); });

            focuscircgrp.selectAll(".echpres.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".echpres.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "echpres dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.echellePressure); })
                .attr("data-legend", function(d) { return 'Echelle Pressure'; })
                .on('mouseover', echprestip.show)
                .on('mouseout', echprestip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".echpres.dot")
                    .data(data)
                    .remove();
            }
            //end of 15


            //16. CCD Temp
            if (plotCcdTemp) {
            focuscircgrp.selectAll(".ccdTmp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ccdTemp); });

            focuscircgrp.selectAll(".ccdTmp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".ccdTmp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "ccdTmp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ccdTemp); })
                .attr("data-legend", function(d) { return 'CCD Temp'; })
                .on('mouseover', ccdtip.show)
                .on('mouseout', ccdtip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".ccdTmp.dot")
                    .data(data)
                    .remove();
            }
            //end of 16


            //17. Neck Temp
            if (plotNeckTemp) {
            focuscircgrp.selectAll(".nckTmp.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.neckTemp); });

            focuscircgrp.selectAll(".nckTmp.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".nckTmp.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "nckTmp dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.neckTemp); })
                .attr("data-legend", function(d) { return 'Neck Temp'; })
                .on('mouseover', ncktip.show)
                .on('mouseout', ncktip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".nckTmp.dot")
                    .data(data)
                    .remove();
            }
            //end of 17


            //18. CCD Setpoint
            if (plotCcdSetpoint) {
            focuscircgrp.selectAll(".ccdStpt.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ccdSetpoint); });

            focuscircgrp.selectAll(".ccdStpt.dot")
                .data(data)
                .exit()
                .remove();

            focuscircgrp.selectAll(".ccdStpt.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "ccdStpt dot")
                .attr('r', 2.5)
                .attr('cx', function(d) { return xScale(d.date); })
                .attr('cy', function(d) { return yScale(d.ccdSetpoint); })
                .attr("data-legend", function(d) { return 'CCD Setpoint'; })
                .on('mouseover', ccdsptip.show)
                .on('mouseout', ccdsptip.hide)
                .transition()
                .duration(1000);
            } else {
                focuscircgrp.selectAll(".ccdStpt.dot")
                    .data(data)
                    .remove();
            }
            //end of 18

            if (plotLegend) {
                legend = svg.append("g")
                  .attr("class","legend")
                  .attr("transform","translate(90,30)")
                  .call(d3.legend);
            }

            contextpathgrp.selectAll("path")
                .datum(data)
                .attr("class", "area")
                .attr("d", area2)
                .transition()
                .duration(1000);
//                .data(data)

            contextpathgrp.select("path")
                .remove();
            
            contextpathgrp
                .append('path')
                .datum(data)
                .attr("class", "area")
                .attr("d", area2);

            //Update all focus data points:
            contextcircgrp.selectAll(".tabcen.dot")
                .data(data)
                .transition()
                .duration(1000)
                .attr('cx', function(d) { return xScale2(d.date); })
                .attr('cy', function(d) { return yScale2(d.ydata); });

            contextcircgrp.selectAll(".tabcen.dot")
                .data(data)
                .exit()
                .remove();

            contextcircgrp.selectAll(".tabcen.dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "tabcen dot")
                .attr('r', 3.5)
                .attr('cx', function(d) { return xScale2(d.date); })
                .attr('cy', function(d) { return yScale2(d.ydata); })
                .transition()
                .duration(1000);


            /*Now update the axes. */
            // Update the X Axis
            svg.select(".x.axis")
                .transition()
                .duration(1000)
                .call(xAxis);

            // Update the Y Axis
            svg.select(".y.axis")
                .transition()
                .duration(1000)
                .call(yAxis);

            //Update X Axis Label:
            svg.select(".x.label")
                .transition()
                .duration(1000)
                .text(param);

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
    if (plotTableCenterTemp) { newmin = d.ydata; }
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

    return newmin;
}

function getMaxValue(d) {
    var newmax = 0;
    if (plotTableCenterTemp) { newmax = d.ydata; }
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

function addAxes() {
    /*Now add the axes. Adding them last makes them 
    on top of everything else. */
    // Add the X Axis
    var xAxisSVG = svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height - fpad*height) + ")")
        .call(xAxis);

    //Add x-label:
    xAxisSVG.append("text")
        .attr("class", "x label")
        .attr("x", (width - fpad*width))
        .attr("y", -6)
        .style("text-anchor", "end")            
        .text('Observation Date');


    // Add the Y Axis
    var yAxisSVG = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + fpad*width + ",0)")
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
        .text('mnvel');

}
window.onload = plotInitTempPress(); //makeInitTimeSeriesPlot();
