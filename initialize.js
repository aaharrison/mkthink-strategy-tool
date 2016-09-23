// JS for Strategy Tool

//**VARIABLES**

// initial parameters for canvas
var width = 950;
var height = 950;

var oRingMargin = 120;

// positional parameters derivative of canvas settings
var posX = (width-oRingMargin)/2;
var posY = (height-oRingMargin)/2;

var rangeRightLeft = width/2 - oRingMargin*2;
var rangeTopBottom = height/2 - oRingMargin*2;

// Define Axis Names

function saveAxisName(){
    var orgAxisName = document.getElementById("orgAxis");
    localStorage.setItem("orgAxis", orgAxisName.value);

    var opsAxisName = document.getElementById("opsAxis");
    localStorage.setItem("opsAxis", opsAxisName.value);

    var quantityAxisName = document.getElementById("quantityAxis");
    localStorage.setItem("quantityAxis", quantityAxisName.value);

    var qualityAxisName = document.getElementById("qualityAxis");
    localStorage.setItem("qualityAxis", qualityAxisName.value);

    var kpiName = document.getElementById("kpiName");
    localStorage.setItem("kpiName", kpiName.value);

    var quantity_org_Metric = document.getElementById("metric1");
    localStorage.setItem("quantity_org_Metric", quantity_org_Metric.value);

    var ops_quality_Metric = document.getElementById("metric2");
    localStorage.setItem("ops_quality_Metric", ops_quality_Metric.value);

    var kpiTarget = document.getElementById("kpiTarget");
    localStorage.setItem("kpiTarget", kpiTarget.value);
  };

// Define the Minimum and Maximum Axis Values

function saveMinMax(){
  var orgMinValue = document.getElementById("orgMin");
  sessionStorage.setItem("orgMinValue", orgMinValue.value);

  var orgMaxValue = document.getElementById("orgMax");
  sessionStorage.setItem("orgMaxValue", orgMaxValue.value);

  var opsMinValue = document.getElementById("opsMin");
  localStorage.setItem("opsMinValue", opsMinValue.value);

  var opsMaxValue = document.getElementById("opsMax");
  localStorage.setItem("opsMaxValue", opsMaxValue.value);

  var quantityMinValue = document.getElementById("quantityMin");
  localStorage.setItem("quantityMinValue", quantityMinValue.value);

  var quantityMaxValue = document.getElementById("quantityMax");
  localStorage.setItem("quantityMaxValue", quantityMaxValue.value);

  var qualityMinValue = document.getElementById("qualityMin");
  localStorage.setItem("qualityMinValue", qualityMinValue.value);

  var qualityMaxValue = document.getElementById("qualityMax");
  localStorage.setItem("qualityMaxValue", qualityMaxValue.value);
};

// Set the initial box size

function initialBoxSize(){
  var initialOrgValue = document.getElementById("initialOrg");
  sessionStorage.setItem("initialOrgValue", initialOrgValue.value);

  var initialOpsValue = document.getElementById("initialOps");
  sessionStorage.setItem("initialOpsValue", initialOpsValue.value);
  
  var initialQuantityValue = document.getElementById("initialQuantity");
  sessionStorage.setItem("initialQuantityValue", initialQuantityValue.value);

  var initialQualityValue = document.getElementById("initialQuality");
  sessionStorage.setItem("initialQualityValue", initialQualityValue.value);
    };

// Assign the scaling relationships

function saveScale(){
  var org_ops_Scale = document.getElementById("org_ops_Scale");
  localStorage.setItem("org_ops_Scale", org_ops_Scale.value);

  var org_quantity_Scale = document.getElementById("org_quantity_Scale");
  localStorage.setItem("org_quantity_Scale", org_quantity_Scale.value);

  var org_quality_Scale = document.getElementById("org_quality_Scale");
  localStorage.setItem("org_quality_Scale", org_quality_Scale.value); 

  var ops_org_Scale = document.getElementById("ops_org_Scale");
  localStorage.setItem("ops_org_Scale", ops_org_Scale.value);

  var ops_quantity_Scale = document.getElementById("ops_quantity_Scale");
  localStorage.setItem("ops_quantity_Scale", ops_quantity_Scale.value);

  var ops_quality_Scale = document.getElementById("ops_quality_Scale");
  localStorage.setItem("ops_quality_Scale", ops_quality_Scale.value);

  var quantity_org_Scale = document.getElementById("quantity_org_Scale");
  localStorage.setItem("quantity_org_Scale", quantity_org_Scale.value);

  var quantity_ops_Scale = document.getElementById("quantity_ops_Scale");
  localStorage.setItem("quantity_ops_Scale", quantity_ops_Scale.value);

  var quantity_quality_Scale = document.getElementById("quantity_quality_Scale");
  localStorage.setItem("quantity_quality_Scale", quantity_quality_Scale.value);

  var quality_org_Scale = document.getElementById("quality_org_Scale");
  localStorage.setItem("quality_org_Scale", quality_org_Scale.value);

  var quality_ops_Scale = document.getElementById("quality_ops_Scale");
  localStorage.setItem("quality_ops_Scale", quality_ops_Scale.value);

  var quality_quantity_Scale = document.getElementById("quality_quantity_Scale");
  localStorage.setItem("quality_quantity_Scale", quality_quantity_Scale.value);
  };

// Update variable names on the visualization page

document.getElementById("orgName").innerHTML = localStorage.getItem("orgAxis");

document.getElementById("opsName").innerHTML = localStorage.getItem("opsAxis");

document.getElementById("quantityName").innerHTML = localStorage.getItem("quantityAxis");

document.getElementById("qualityName").innerHTML = localStorage.getItem("qualityAxis");

document.getElementById("kpiName").innerHTML = localStorage.getItem("kpiName");

// Create scaling relationship values

org_ops_Ratio = parseInt(localStorage.getItem("org_ops_Scale"))
org_quantity_Ratio = parseInt(localStorage.getItem("org_quantity_Scale"))
org_quality_Ratio = parseInt(localStorage.getItem("org_quality_Scale"))

ops_org_Ratio = parseInt(localStorage.getItem("ops_org_Scale"))
ops_quantity_Ratio = parseInt(localStorage.getItem("ops_quantity_Scale"))
ops_quality_Ratio = parseInt(localStorage.getItem("ops_quality_Scale"))

quantity_org_Ratio = parseInt(localStorage.getItem("quantity_org_Scale"))
quantity_ops_Ratio = parseInt(localStorage.getItem("quantity_ops_Scale"))
quantity_quality_Ratio = parseInt(localStorage.getItem("quantity_quality_Scale"))

quality_org_Ratio = parseInt(localStorage.getItem("quality_org_Scale"))
quality_ops_Ratio = parseInt(localStorage.getItem("quality_ops_Scale"))
quality_quantity_Ratio = parseInt(localStorage.getItem("quality_quantity_Scale"))



// default values for controls, rectangle dimensions and calculated metrics

var rule = 0;

maxTop = parseInt(localStorage.getItem("opsMaxValue"));
maxBottom = parseFloat(localStorage.getItem("qualityMaxValue"));
maxRight = parseInt(localStorage.getItem("quantityMaxValue"));
maxLeft = parseInt(sessionStorage.getItem("orgMaxValue"));

minTop = parseInt(localStorage.getItem("opsMinValue"));
minBottom = parseFloat(localStorage.getItem("qualityMinValue"));
minRight = parseInt(localStorage.getItem("quantityMinValue"));
minLeft = parseInt(sessionStorage.getItem("orgMinValue"));

oTop = parseInt(sessionStorage.getItem("initialOpsValue"));
oBottom = parseFloat(sessionStorage.getItem("initialQualityValue"));
oRight = parseInt(sessionStorage.getItem("initialQuantityValue"));
oLeft = parseInt(sessionStorage.getItem("initialOrgValue"));

// 
// 

nTop = parseInt(sessionStorage.getItem("initialOpsValue"));
nBottom = parseFloat(sessionStorage.getItem("initialQualityValue"));
nRight = parseInt(sessionStorage.getItem("initialQuantityValue"));
nLeft = parseInt(sessionStorage.getItem("initialOrgValue"));


// set default Target KPI value
var target = parseInt(localStorage.getItem("kpiTarget"));
fTargetValue.innerHTML = target;

// create as of yet, empty variables
var yMetric;
var xMetric;
var areaMetric;

// create variables for arrow proportions

var arrowHeight = oRingMargin*.95
var arrowBase = oRingMargin*.5
var arrowShaft = oRingMargin*.6
var arrowConcavity = oRingMargin*.1

// create variables for toggling the lock/link status and icons. Default value is 0 i.e. "unlocked" or "unlinked".
var topLinkToggle = 0;
var bottomLinkToggle = 0;
var leftLinkToggle = 0;
var rightLinkToggle = 0;
var targetLockToggle = 0;

var linkedCounter = 0;


//**INITIALIZERS**

//startup sequence
initializeCanvas();
initializeAxes();
initializeRect();
initializeSliders();

function initializeCanvas () {
// create svg canvas
  holder = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// create the inner border based on max dimensions
  holder.append("rect")
    .attr("id", "innerBorder")
    .attr("x", posX - rangeRightLeft - oRingMargin/2)
    .attr("y", posY - rangeTopBottom - oRingMargin/2)
    .attr("height", (rangeTopBottom + oRingMargin)*2)
    .attr("width", (rangeRightLeft + oRingMargin)*2)
    .style("stroke", "grey");

  initializeArrows(holder);
}

function initializeArrows (holder) {
// label the margins with arrows
  holder.append("polygon")
    .attr("class","arrow")
    .attr("points", 
      (arrowShaft - arrowConcavity) + ",0" + " " + 
      arrowHeight + "," + (arrowHeight/2) + " " + 
      (arrowShaft - arrowConcavity) + "," + arrowHeight + " " + 
      arrowShaft + "," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 - arrowBase/2) + " " +
      arrowShaft + "," + (arrowHeight/2 - arrowBase/2))
    .attr("transform","translate(" + (width - oRingMargin*.95) + ", " + (posY + 2) + ")rotate(0)");

  holder.append("text")
    .text("QUANTITY")
    .attr("text-anchor","start")
    .attr("class","arrowTitle")
    .attr("transform","translate(" + (posX + oRingMargin/2 + rangeRightLeft + oRingMargin + 15) + "," + (posY + oRingMargin/2 + 3) + ")rotate(0)");

  holder.append("polygon")
    .attr("class","arrow")
    .attr("points", 
      (arrowShaft - arrowConcavity) + ",0" + " " + 
      arrowHeight + "," + (arrowHeight/2) + " " + 
      (arrowShaft - arrowConcavity) + "," + arrowHeight + " " + 
      arrowShaft + "," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 - arrowBase/2) + " " +
      arrowShaft + "," + (arrowHeight/2 - arrowBase/2))
    .attr("transform","translate(" + posX + "," + (oRingMargin*.95) + ")rotate(270)");

  holder.append("text")
    .text("OPERATIONS")
    .attr("text-anchor","start")
    .attr("class","arrowTitle")
    .attr("transform","translate(" + (posX + oRingMargin/2 + 3) + "," + (posY + oRingMargin/2 - rangeTopBottom - oRingMargin - 15) + ")rotate(270)");

  holder.append("polygon")
    .attr("class","arrow")
    .attr("points", 
      (arrowShaft - arrowConcavity) + ",0" + " " + 
      arrowHeight + "," + (arrowHeight/2) + " " + 
      (arrowShaft - arrowConcavity) + "," + arrowHeight + " " + 
      arrowShaft + "," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 - arrowBase/2) + " " +
      arrowShaft + "," + (arrowHeight/2 - arrowBase/2))
    .attr("transform","translate(" + (oRingMargin*0.95) + "," + (posY + 2 + arrowHeight) + ")rotate(180)");

  holder.append("text")
    .text("ORGANIZATION")
    .attr("text-anchor","end")
    .attr("class","arrowTitle")
    .attr("transform","translate(" + (posX + oRingMargin/2 - rangeRightLeft - oRingMargin - 15) + "," + (posY + oRingMargin/2 + 3) + ")rotate(0)");

  holder.append("polygon")
    .attr("class","arrow")
    .attr("points", 
      (arrowShaft - arrowConcavity) + ",0" + " " + 
      arrowHeight + "," + (arrowHeight/2) + " " + 
      (arrowShaft - arrowConcavity) + "," + arrowHeight + " " + 
      arrowShaft + "," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 + arrowBase/2) + " " +
      "0," + (arrowHeight/2 - arrowBase/2) + " " +
      arrowShaft + "," + (arrowHeight/2 - arrowBase/2))
    .attr("transform","translate(" + (posX + arrowHeight) + "," + (height - oRingMargin*.95) + ")rotate(90)");

  holder.append("text")
    .text("QUALITY")
    .attr("text-anchor","start")
    .attr("class","arrowTitle")
    .attr("transform","translate(" + (posX + oRingMargin/2 - 7) + "," + (posY + oRingMargin/2 + rangeTopBottom + oRingMargin + 15) + ")rotate(90)");

}

function initializeAxes () {
// create global scales for the axis
  xScale = d3.scaleLinear()
    .domain([0, maxRight])
    .range([0, rangeRightLeft + oRingMargin - 25]);

  yScale = d3.scaleLinear()
    .domain([maxTop, 0])
    .range([-rangeTopBottom - oRingMargin + 25, 0]);

  xScale2 = d3.scaleLinear()
    .domain([minLeft, (maxLeft-minLeft)*1.3333+minLeft])
    .range([-rangeRightLeft - oRingMargin + 25, 0]);

  yScale2 = d3.scaleLinear()
    .domain([0, maxBottom])
    .range([0, rangeTopBottom + oRingMargin - 25]);

// create the generate axis functions
  xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues([maxRight, maxRight*.75, maxRight*.5, maxRight*.25])
    .tickSize(3);

  yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues([maxTop, maxTop*.75, maxTop*.5, maxTop*.25])
    .tickSize(2);

  xAxis2 = d3.axisBottom()
    .scale(xScale2)
    .tickValues([maxLeft,(maxLeft-minLeft)*.6666+minLeft,(maxLeft-minLeft)*.3333+minLeft,minLeft])
    .tickSize(3);

  yAxis2 = d3.axisLeft()
    .scale(yScale2)
    .tickValues([maxBottom, maxBottom*.75, maxBottom*.5, maxBottom*.25])
    .tickFormat(d3.format(".0%"))
    .tickSize(2);

// draw the axes by calling the axis function, each as its own group
  holder.append("g")
    .attr("class", "axis")
    .attr("id", "x1")
    .attr("transform", "translate(" + (posX + oRingMargin/2) + "," + (posY + oRingMargin/2) + ")")
    .attr("stroke-width",1.5)
    .call(xAxis);

  holder.append("g")
    .attr("class", "axis")
    .attr("id", "y1")
    .attr("transform", "translate(" + (posX + oRingMargin/2) + "," + (posY + oRingMargin/2) + ")")
    .attr("stroke-width",1.5)
    .call(yAxis);

  holder.append("g")
    .attr("class", "axis")
    .attr("id", "x2")
    .attr("transform", "translate(" + (posX + oRingMargin/2) + "," + (posY + oRingMargin/2) + ")")
    .attr("stroke-width",1.5)
    .call(xAxis2);

  holder.append("g")
    .attr("class", "axis")
    .attr("id", "y2")
    .attr("transform", "translate(" + (posX + oRingMargin/2) + "," + (posY + oRingMargin/2) + ")")
    .attr("stroke-width",1.5)
    .call(yAxis2);


// label the axes with variable names

  var qualityAxis = holder.append("text")
    .attr("text-anchor","start")
    .attr("transform","translate(" + (posX + oRingMargin/2 + 4) + "," + (posY + oRingMargin/2 + rangeTopBottom + oRingMargin - 25 + 4) + ")")
    .text(localStorage.getItem("qualityAxis"));

  var opsAxis = holder.append("text")
    .attr("text-anchor","start")
    .attr("transform","translate(" + (posX + oRingMargin/2 + 4) + "," + (posY + oRingMargin/2 - rangeTopBottom - oRingMargin + 25 + 4) + ")")
    .text(localStorage.getItem("opsAxis"));

  var orgAxis = holder.append("text")
    .attr("text-anchor","start")
    .attr("transform","translate(" + (posX + oRingMargin/2 - rangeRightLeft - oRingMargin + 20) + "," + (posY + oRingMargin/2 - 4) + ")")
    .text(localStorage.getItem("orgAxis"));

  var quantityAxis = holder.append("text")
    .attr("text-anchor","end")
    .attr("transform","translate(" + (posX + oRingMargin/2 + rangeRightLeft + oRingMargin - 15) + "," + (posY + oRingMargin/2 - 4) + ")")
    .text(localStorage.getItem("quantityAxis"));
}

function initializeRect () {

// create & format the static rectangle based on inital inputs
  holder.append("rect")
    .attr("id", "staticRect")
    .attr("x", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y", posY + yScale(oTop) + oRingMargin/2)
    .attr("width", xScale(oRight) - xScale2(oLeft))
    .attr("height", yScale2(oBottom) - yScale(oTop))
    .style("fill", "rgba(200, 200, 200, .8)");

// create dynamic target rectangle components
  holder.append("rect")
    .attr("id", "targetRect1")
    .style("fill", "none");

  holder.append("rect")
    .attr("id", "targetRect2")
    .style("fill", "none");

  holder.append("rect")
    .attr("id", "targetRect3")
    .style("fill", "none");

  holder.append("rect")
    .attr("id", "targetRect4")
    .style("fill", "none");

// create dynamic text labels for KPI values
  holder.append("text")
    .attr("id", "ewhLabel")
    .attr("text-anchor", "middle")
    .attr("font-family", "Roboto Condensed", "sans-serif")
    .attr("font-size", "20px")
    .attr("font-weight", "700")
    .attr("fill", "black");

  holder.append("text")
    .attr("id", "workstationLabel")
    .attr("text-anchor", "middle")
    .attr("font-family", "Roboto Condensed", "sans-serif")
    .attr("font-size", "15px")
    .attr("font-weight", "350")
    .attr("fill", "black");

  holder.append("text")
    .attr("id", "wwhLabel")
    .attr("text-anchor", "middle")
    .attr("font-family", "Roboto Condensed", "sans-serif")
    .attr("font-size", "15px")
    .attr("font-weight", "350")
    .attr("fill", "black");
 
// calculate additional variables based on default settings (important for initial KPI text positioning)
  updateMetrics ();

// populate and position text labels for KPI values
  d3.select("#ewhLabel")
    .text(areaMetric.toFixed(0) + " " +localStorage.getItem("kpiName"))
    .attr("x", posX + oRingMargin/2 + xScale2(nLeft)+(xScale(nRight)-xScale2(nLeft))/2)
    .attr("y", posY + oRingMargin/2 + yScale(nTop)+(yScale2(nBottom)-yScale(nTop))/2 - 10);
  d3.select("#workstationLabel")
    .text(xMetric.toFixed(0) + " "+localStorage.getItem("quantity_org_Metric"))
    .attr("x", posX + oRingMargin/2 + xScale2(nLeft)+(xScale(nRight)-xScale2(nLeft))/2)
    .attr("y", posY + oRingMargin/2 + yScale(nTop)+(yScale2(nBottom)-yScale(nTop))/2 + 20);
  d3.select("#wwhLabel")
    .text(yMetric.toFixed(0)+" "+localStorage.getItem("ops_quality_Metric"))
    .attr("x", posX + oRingMargin/2 + xScale2(nLeft)+(xScale(nRight)-xScale2(nLeft))/2)
    .attr("y", posY + oRingMargin/2 + yScale(nTop)+(yScale2(nBottom)-yScale(nTop))/2 + 40);
  
//create static rect border
  holder.append("rect")
    .attr("id", "staticRectBorder")
    .attr("x", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y", posY + yScale(oTop) + oRingMargin/2)
    .attr("width", xScale(oRight) - xScale2(oLeft))
    .attr("height", yScale2(oBottom) - yScale(oTop))
    .style("stroke-width", "1px")
    .style("stroke","rgb(30, 30, 30)")
    .style("stroke-dasharray", ("5, 5"))
    .style("fill", "rgba(200, 200, 200, .0)");

// create lines for corner-connectors
  holder.append("line")
    .attr("id", "c1a")
    .attr("x1", posX + xScale2(oLeft))
    .attr("y1", posY + yScale(oTop))
    .attr("x2", posX + xScale2(oLeft))
    .attr("y2", posY + yScale(oTop))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c1b")
    .attr("x1", posX + xScale2(oLeft))
    .attr("y1", posY + yScale(oTop))
    .attr("x2", posX + xScale2(oLeft))
    .attr("y2", posY + yScale(oTop))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c2a")
    .attr("x1", posX + xScale(oRight))
    .attr("y1", posY + yScale(oTop))
    .attr("x2", posX + xScale(oRight))
    .attr("y2", posY + yScale(oTop))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c2b")
    .attr("x1", posX + xScale(oRight))
    .attr("y1", posY + yScale(oTop))
    .attr("x2", posX + xScale(oRight))
    .attr("y2", posY + yScale(oTop))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c3a")
    .attr("x1", posX + xScale(oRight))
    .attr("y1", posY + yScale2(oBottom))
    .attr("x2", posX + xScale(oRight))
    .attr("y2", posY + yScale2(oBottom))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c3b")
    .attr("x1", posX + xScale(oRight))
    .attr("y1", posY + yScale2(oBottom))
    .attr("x2", posX + xScale(oRight))
    .attr("y2", posY + yScale2(oBottom))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c4a")
    .attr("x1", posX + xScale2(nLeft))
    .attr("y1", posY + yScale2(nBottom))
    .attr("x2", posX + xScale2(nLeft))
    .attr("y2", posY + yScale2(nBottom))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

  holder.append("line")
    .attr("id", "c4b")
    .attr("x1", posX+xScale2(nLeft))
    .attr("y1", posY+yScale2(nBottom))
    .attr("x2", posX+xScale2(nLeft))
    .attr("y2", posY+yScale2(nBottom))
    .style("stroke-width", "1px")
    .style("stroke","black")
    .style("stroke-dasharray", ("5, 5"));

// create dynamic outer edges
  holder.append("line")
    .attr("id", "topEdge")
    .attr("class", "edge");

  holder.append("line")
    .attr("id", "bottomEdge")
    .attr("class", "edge");

  holder.append("line")
    .attr("id", "leftEdge")
    .attr("class", "edge");

  holder.append("line")
    .attr("id", "rightEdge")
    .attr("class", "edge");
}

function initializeSliders() {
// set the initial value of the variable sliders, and in the adjacent text field

  d3.select("#sTop-value").text(nTop.toFixed(0));
  d3.select("#sTop").property("min", minTop);
  d3.select("#sTop").property("max", maxTop);
  d3.select("#sTop").property("value", nTop);

  d3.select("#sBottom-value").text(d3.format("0.0%")(nBottom));
  d3.select("#sBottom").property("min", minBottom);
  d3.select("#sBottom").property("max", maxBottom);
  d3.select("#sBottom").property("value", nBottom);

  d3.select("#sRight-value").text((nRight/100).toFixed(0)*100);
  d3.select("#sRight").property("min", minRight);
  d3.select("#sRight").property("max", maxRight);
  d3.select("#sRight").property("value", nRight);

  d3.select("#sLeft-value").text(nLeft.toFixed(0));
  d3.select("#sLeft").property("min", minLeft);
  d3.select("#sLeft").property("max", maxLeft);
  d3.select("#sLeft").property("value", nLeft);

// set the initial max/min values in the designated text fields
  topMin.innerHTML = minTop;
  topMax.innerHTML = maxTop;

  bottomMin.innerHTML = (minBottom*100).toFixed(0) + "%";
  bottomMax.innerHTML = (maxBottom*100).toFixed(0) + "%";

  rightMin.innerHTML = minRight;
  rightMax.innerHTML = maxRight;

  leftMin.innerHTML = minLeft;
  leftMax.innerHTML = maxLeft;
}


//**LISTENERS**

// read a change in the top input
d3.select("#sTop").on("input", function() {
  updateTop(+this.value);
});

// read a change in the bottom input
d3.select("#sBottom").on("input", function() {
  updateBottom(+this.value);
});

// read a change in the right input
d3.select("#sRight").on("input", function() {
  updateRight(+this.value);
});

// read a change in the left input
d3.select("#sLeft").on("input", function() {
  updateLeft(+this.value);
});

// read a change in the target (method 1)
function updateTarget() {
  document.getElementById("fTargetInput").innerHTML = Number(fTargetInput.value);
  document.getElementById("fTargetValue").innerHTML = Number(fTargetInput.value);
  target = Number(fTargetInput.value);
  document.getElementById("fTargetValue").style.display = "inline-block";
  document.getElementById("fTargetInput").style.visibility = "hidden";
  document.getElementById("fTargetButton").style.visibility = "hidden";
  updateRect(0);
};


function opssoloLock(){
  if (topLinkToggle == "0" && linkedCounter*1 == 0) {
    topLinkToggle = "1";
    linkedCounter = linkedCounter + 1
    document.getElementById("sTop").disabled = true;
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png";
  }
  else {
    topLinkToggle = "0";
    linkedCounter = linkedCounter - 1
    document.getElementById("sTop").disabled = false
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png"
  }
  };

function qualitysoloLock(){
  if (bottomLinkToggle == "0" && linkedCounter*1 == 0) {
    topLinkToggle = "1";
    linkedCounter = linkedCounter + 1
    document.getElementById("sBottom").disabled = true
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"
  }
  else {
    topLinkToggle = "0";
    linkedCounter = linkedCounter - 1
    document.getElementById("sBottom").disabled = false
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png"
  }
  };

function quantitysoloLock(){
  if (rightLinkToggle == "0" && linkedCounter*1 == 0) {
    rightLinkToggle = "1";
    linkedCounter = linkedCounter + 1
    document.getElementById("sRight").disabled = true
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"
  }
  else {
    rightLinkToggle = "0";
    linkedCounter = linkedCounter - 1
    document.getElementById("sRight").disabled = false
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png"
  }
  };

function orgsoloLock(){
  if (leftLinkToggle == "0" && linkedCounter*1 == 0) {
    leftLinkToggle = "1";
    linkedCounter = linkedCounter + 1
    document.getElementById("sLeft").disabled = true
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"
  }
  else {
    rightLinkToggle = "0";
    linkedCounter = linkedCounter - 1
    document.getElementById("sLeft").disabled = false
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png"
  }
  };


// toggle target Lock icon (activated from html)
function toggleTargetLock() {
  if (targetLockToggle == "0") {
    targetLockToggle = "1";
    document.getElementById("targetLock").src = "http://mkthinkstrategy.info/wggtest/admin/ic_lock.png";
  }
  else if (targetLockToggle != "0") {
    targetLockToggle = "0";
    document.getElementById("targetLock").src = "http://mkthinkstrategy.info/wggtest/admin/ic_lock_open.png";
    if (topLinkToggle == 1) {toggleTopLink()};
    if (bottomLinkToggle == 1) {toggleBottomLink()};
    if (rightLinkToggle == 1) {toggleRightLink()};
    if (leftLinkToggle == 1) {toggleLeftLink()};
    document.getElementById("sRight").disabled = false;
    document.getElementById("sLeft").disabled = false;
    document.getElementById("sTop").disabled = false;
    document.getElementById("sBottom").disabled = false;
  }
}

// toggle top Link icon (activated from html)
function toggleTopLink() {
  if (topLinkToggle == "0" && linkedCounter*1 == 0) {
    topLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png";
  }
  else if (topLinkToggle == "0" && linkedCounter*1 == 1) {
    topLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    if (bottomLinkToggle == "1") {document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (leftLinkToggle == "1") {document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (rightLinkToggle == "1") {document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
  }
  else if (topLinkToggle == "0" && linkedCounter*1 > 1) {
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    topLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
  }
  else if (topLinkToggle != "0" && linkedCounter*1 == 2) {
    topLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
    if (bottomLinkToggle == "1") {document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (leftLinkToggle == "1") {document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (rightLinkToggle == "1") {document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
  }
  else if (topLinkToggle != "0" && linkedCounter*1 != 2) {
    topLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("sTop").disabled = false;
    document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
  }

    if (linkedCounter > 1) {
    document.getElementById("targetLock").style.visibility = "visible"
  } else {
    document.getElementById("targetLock").style.visibility = "hidden";
    document.getElementById("targetLock").src = "http://mkthinkstrategy.info/wggtest/admin/ic_lock_open.png";
    targetLockToggle = "0";
  }
}

// toggle bottom Link icon (activated from html)
function toggleBottomLink() {
  if (bottomLinkToggle == "0" && linkedCounter*1 == 0) {
    bottomLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png";
  }
  else if (bottomLinkToggle == "0" && linkedCounter*1 == 1) {
    bottomLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
    document.getElementById("sBottom").disabled = false;
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    if (topLinkToggle == "1") {document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (leftLinkToggle == "1") {document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (rightLinkToggle == "1") {document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"};
  }
  else if (bottomLinkToggle == "0" && linkedCounter*1 > 1) {
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    bottomLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
  }
  else if (bottomLinkToggle != "0" && linkedCounter*1 == 2) {
    bottomLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
    if (topLinkToggle == "1") {document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (leftLinkToggle == "1") {document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (rightLinkToggle == "1") {document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
  }
  else if (bottomLinkToggle != "0" && linkedCounter*1 != 2) {
    bottomLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
  }

    if (linkedCounter > 1) {
    document.getElementById("targetLock").style.visibility = "visible"
  } else {
    document.getElementById("targetLock").style.visibility = "hidden";
    document.getElementById("targetLock").src = "http://mkthinkstrategy.info/wggtest/admin/ic_lock_open.png";
    targetLockToggle = "0";
  }
}

// toggle left Link icon (activated from html)
function toggleLeftLink() {
  if (leftLinkToggle == "0" && linkedCounter*1 == 0) {
    leftLinkToggle = "1";
    linkedCounter = linkedCounter + 1;    
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png";
  }
  else if (leftLinkToggle == "0" && linkedCounter*1 == 1) {
    leftLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    if (topLinkToggle == "1") {document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (bottomLinkToggle == "1") {document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (rightLinkToggle == "1") {document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
  }
  else if (leftLinkToggle == "0" && linkedCounter*1 > 1) {
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    leftLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
  }
  else if (leftLinkToggle != "0" && linkedCounter*1 == 2) {
    leftLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
    if (topLinkToggle == "1") {document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (bottomLinkToggle == "1") {document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (rightLinkToggle == "1") {document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
  }
  else if (leftLinkToggle != "0" && linkedCounter*1 != 2) {
    leftLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
  }

    if (linkedCounter > 1) {
    document.getElementById("targetLock").style.visibility = "visible"
  } else {
    document.getElementById("targetLock").style.visibility = "hidden";
    document.getElementById("targetLock").src = "http://mkthinkstrategy.info/wggtest/admin/ic_lock_open.png";
    targetLockToggle = "0";
  }
}

// toggle right Link icon (activated from html)
function toggleRightLink() {
  if (rightLinkToggle == "0" && linkedCounter*1 == 0) {
    rightLinkToggle = "1";
    linkedCounter = linkedCounter + 1;    
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png";
  }
  else if (rightLinkToggle == "0" && linkedCounter*1 == 1) {
    rightLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    if (topLinkToggle == "1") {document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (bottomLinkToggle == "1") {document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
      else if (leftLinkToggle == "1") {document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png"}
  }
  else if (rightLinkToggle == "0" && linkedCounter*1 > 1) {
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-dkblue.png";
    rightLinkToggle = "1";
    linkedCounter = linkedCounter + 1;
  }
    else if (rightLinkToggle != "0" && linkedCounter*1 == 2) {
    rightLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
    if (topLinkToggle == "1") {document.getElementById("topLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (bottomLinkToggle == "1") {document.getElementById("bottomLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
      else if (leftLinkToggle == "1") {document.getElementById("leftLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-ltblue.png"}
  }
  else if (rightLinkToggle != "0" && linkedCounter*1 != 2) {
    rightLinkToggle = "0";
    linkedCounter = linkedCounter - 1;
    document.getElementById("rightLink").src = "http://mkthinkstrategy.info/wggtest/admin/link-gry.png";
  }

  if (linkedCounter > 1) {
    document.getElementById("targetLock").style.visibility = "visible"
  } else {
    document.getElementById("targetLock").style.visibility = "hidden";
    document.getElementById("targetLock").src = "http://mkthinkstrategy.info/wggtest/admin/ic_lock_open.png";
    targetLockToggle = "0";
  }
}

//**CALL FUNCTIONS**

function updateTop(vTop) {

// highlight the top edge
  holder.selectAll('.edge').attr("style", "stroke:rgb(128,128,128); stroke-width:1px");
  holder.select('#topEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px");

function lock1(){
  document.getElementById("sRight").disabled = true;
  document.getElementById("sLeft").disabled = true;
  vBottom = areaMetric/(vTop*(1/nLeft)*nRight);
  };

function lock2(){
  document.getElementById("sRight").disabled = true;
  document.getElementById("sBottom").disabled = true;
  vLeft = 1/(areaMetric/(vTop*nBottom*nRight));
};

function lock3(){
  document.getElementById("sLeft").disabled = true;
  document.getElementById("sBottom").disabled = true;
  vRight = areaMetric/(vTop*nBottom*(1/nLeft));
}

// highlight any linked edges
  if (topLinkToggle != "0") {
    if (bottomLinkToggle == "1") {holder.select('#bottomEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (rightLinkToggle == "1") {holder.select('#rightEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (leftLinkToggle == "1") {holder.select('#leftEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
  };

//prep variables

  updateMetrics();


  //calculate newValues

vBottom = nBottom+nBottom*(ops_quality_Ratio*((vTop-nTop)/nTop))
vLeft =nLeft - (nLeft - nLeft*(ops_org_Ratio*((vTop-nTop)/nTop)))*(org_ops_Ratio*((vTop-nTop)/nTop))
vRight = nRight + nRight*(ops_quantity_Ratio*((vTop-nTop)/nTop))


if (linkedCounter > 1 && targetLockToggle == "0" & topLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is UNLOCKED)
  if (bottomLinkToggle == "0"){vBottom = nBottom} else {if (vBottom<=maxBottom){vBottom} else {vBottom=maxBottom;vTop=nTop}  };
  if (leftLinkToggle == "0") {vLeft = nLeft} else {if (vLeft<=maxLeft){vLeft} else {vLeft=maxLeft;vTop=nTop} };
  if (rightLinkToggle == "0") {vRight = nRight} else {if (vRight<=maxRight){vRight} else {vRight=maxRight;vTop=nTop} };
} else if (linkedCounter > 1 && targetLockToggle == "1" & topLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is LOCKED)
  if (linkedCounter =="2") {
    //with 2 axes linked:
    if (bottomLinkToggle == "0") {vBottom = nBottom} else {lock1()};
    if (leftLinkToggle == "0") {vLeft = nLeft} else {lock2()};
    if (rightLinkToggle == "0") {vRight = nRight} else {lock3()};
  } else if (linkedCounter =="3") {
    //with 3 axes linked:
    if (bottomLinkToggle != "0" && leftLinkToggle != "0") {alert('not completed')}
    if (bottomLinkToggle != "0" && rightLinkToggle != "0") {alert('not completed')}
    if (rightLinkToggle != "0" && leftLinkToggle != "0") {alert('not completed')}
  } else if (linkedCounter =="4") {
    alert ('definitely not finished');
  }
} else {
  // set newValues for inactive variables as oldValues when all are UNLINKED
  vBottom = nBottom;
  vLeft = nLeft;
  vRight = nRight;
}

//check to see whether new values exceed maximum/minimum limits, and revert them all if one does.
if (vTop <= maxTop && vTop >= minTop && vBottom <= maxBottom && vBottom >= minBottom && vLeft <= maxLeft && vLeft >= minLeft  && vRight <= maxRight && vRight >= minRight) {
  nTop = vTop;
  nBottom = vBottom;
  nLeft = vLeft;
  nRight = vRight;
}
  
  updateSliders();
  updateRect(0);

  // console.log(vBottom)
  // console.log(vTop)

}

function updateBottom(vBottom) {

function lock1(){
  document.getElementById("sRight").disabled = true;
  document.getElementById("sLeft").disabled = true;
  vTop = areaMetric/(vBottom*(1/nLeft)*nRight)
}

function lock2(){
  document.getElementById("sRight").disabled = true;
  document.getElementById("sTop").disabled = true;
  vLeft = 1/(areaMetric/(nTop*vBottom*nRight))
}

function lock3(){
  document.getElementById("sLeft").disabled = true;
  document.getElementById("sTop").disabled = true;
  vRight = areaMetric/(nTop*vBottom*(1/nLeft))
}

// highlight the top edge
  holder.selectAll('.edge').attr("style", "stroke:rgb(128,128,128); stroke-width:1px");
  holder.select('#bottomEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px");

// highlight any linked edges
  if (bottomLinkToggle != "0") {
    if (topLinkToggle == "1") {holder.select('#topEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (rightLinkToggle == "1") {holder.select('#rightEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (leftLinkToggle == "1") {holder.select('#leftEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
  };

//prep variables

  updateMetrics();

//calculate newValues
if (linkedCounter > 0 && targetLockToggle == "0" && bottomLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is UNLOCKED)
  if (topLinkToggle == "0") {vTop = nTop} else {vTop = (nTop + nTop*((vBottom-nBottom)/nBottom))};
  if (leftLinkToggle == "0") {vLeft = nLeft} else {vLeft = (nLeft - (nLeft - nLeft*((vTop-nTop)/nTop))*((vTop-nTop)/nTop))};
  if (rightLinkToggle == "0") {vRight = nRight} else {vRight = (nRight + nRight*((vBottom-nBottom)/nBottom))};
} else if (linkedCounter > 1 && targetLockToggle == "1" && bottomLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is LOCKED)
  if (linkedCounter =="2") {
    //with 2 axes linked:
    if (topLinkToggle == "0") {vTop = nTop} else {lock1()};
    if (leftLinkToggle == "0") {vLeft = nLeft} else {lock2()};
    if (rightLinkToggle == "0") {vRight = nRight} else {lock3()};
  } else if (linkedCounter =="3") {
    //with 3 axes linked:
    if (topLinkToggle != "0" && leftLinkToggle != "0") {alert('not completed')}
    if (topLinkToggle != "0" && rightLinkToggle != "0") {alert('not completed')}
    if (rightLinkToggle != "0" && leftLinkToggle != "0") {alert('not completed')}
  } else if (linkedCounter =="4") {
    alert ('definitely not finished');
  }
} else {
  // set newValues for inactive variables as oldValues when all are UNLINKED
  vTop = nTop;
  vLeft = nLeft;
  vRight = nRight;
}

// check to see whether new values exceed maximum/minimum limits, and revert them all if one does.
if (vTop <= maxTop && vTop >= minTop && vBottom <= maxBottom && vBottom >= minBottom && vLeft <= maxLeft && vLeft >= minLeft  && vRight <= maxRight && vRight >= minRight) {
  nTop = vTop;
  nBottom = vBottom;
  nLeft = vLeft;
  nRight = vRight;
}
  
  updateSliders();
  updateRect(0);
}

function updateLeft(vLeft) {

function lock1(){
  document.getElementById("sRight").disabled = true;
  document.getElementById("sBottom").disabled = true;
  vTop = nTop + nTop*((vLeft-nLeft)/nLeft)
}

function lock2(){
  document.getElementById("sRight").disabled = true;
  document.getElementById("sTop").disabled = true;
  vBottom = nBottom + nBottom*((vLeft-nLeft)/nLeft)
}

function lock3(){
  document.getElementById("sBottom").disabled = true;
  document.getElementById("sTop").disabled = true;
  vRight = nRight + nRight*((vLeft-nLeft)/nLeft)
}


// highlight the top edge
  holder.selectAll('.edge').attr("style", "stroke:rgb(128,128,128); stroke-width:1px");
  holder.select('#leftEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px");

// highlight any linked edges
  if (leftLinkToggle != "0") {
    if (topLinkToggle == "1") {holder.select('#topEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (bottomLinkToggle == "1") {holder.select('#bottomEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (rightLinkToggle == "1") {holder.select('#rightEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
  };

//prep variables

  updateMetrics();

//calculate newValues
if (linkedCounter > 1 && targetLockToggle == "1" && leftLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is LOCKED)
  if (topLinkToggle == "0") {vTop = nTop} else {lock1()};
  if (bottomLinkToggle == "0") {vBottom = nBottom} else {lock2()};
  if (rightLinkToggle == "0") {vRight = nRight} else {lock3()};
} else if (linkedCounter > 1 && targetLockToggle == "0" && leftLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is UNLOCKED)
  if (linkedCounter =="2") {
    //with 2 axes linked:
    if (topLinkToggle == "0") {vTop = nTop} else {vTop = areaMetric/(nBottom*(1/vLeft)*nRight)};
    if (bottomLinkToggle == "0") {vBottom = nBottom} else {vBottom = 1/(areaMetric/(nTop*(1/vLeft)*nRight))};
    if (rightLinkToggle == "0") {vRight = nRight} else {vRight = areaMetric/(nTop*nBottom*(1/nLeft))};
  } else if (linkedCounter =="3") {
    //with 3 axes linked:
    if (topLinkToggle != "0" && bottomLinkToggle != "0") {alert('not completed')}
    if (topLinkToggle != "0" && rightLinkToggle != "0") {alert('not completed')}
    if (bottomLinkToggle != "0" && rightLinkToggle != "0") {alert('not completed')}
  } else if (linkedCounter =="4") {
    alert ('definitely not finished');
  }
} else {
  // set newValues for inactive variables as oldValues when all are UNLINKED
  vTop = nTop;
  vBottom = nBottom;
  vRight = nRight;
}

// check to see whether new values exceed maximum/minimum limits, and revert them all if one does.
if (vTop <= maxTop && vTop >= minTop && vBottom <= maxBottom && vBottom >= minBottom && vLeft <= maxLeft && vLeft >= minLeft  && vRight <= maxRight && vRight >= minRight) {
  nTop = vTop;
  nBottom = vBottom;
  nLeft = vLeft;
  nRight = vRight;
}
  
  updateSliders();
  updateRect(0);
};

function updateRight(vRight) {

function lock1(){
  document.getElementById("sLeft").disabled = true;
  document.getElementById("sBottom").disabled = true;
  vTop = areaMetric/(nBottom*(1/nLeft)*vRight)
}

function lock2(){
  document.getElementById("sTop").disabled = true;
  document.getElementById("sBottom").disabled = true;
  vLeft = areaMetric/(nTop*nBottom*vRight)
}

function lock3(){
  document.getElementById("sTop").disabled = true;
  document.getElementById("sLeft").disabled = true;
  vBottom = areaMetric/(nTop*(1/nLeft)*vRight)
}

// highlight the top edge
  holder.selectAll('.edge').attr("style", "stroke:rgb(128,128,128); stroke-width:1px");
  holder.select('#rightEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px");

// highlight any linked edges
  if (rightLinkToggle != "0") {
    if (topLinkToggle == "1") {holder.select('#topEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (bottomLinkToggle == "1") {holder.select('#bottomEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
    if (leftLinkToggle == "1") {holder.select('#leftEdge').attr("style", "stroke:rgb(128,128,128); stroke-width:3px")}
  };

//prep variables

  updateMetrics();

//calculate newValues
if (linkedCounter > 1 && targetLockToggle == "0" && rightLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is UNLOCKED)
  if (topLinkToggle == "0") {vTop = nTop} else {vTop = nTop + nTop*((vRight-nRight)/nRight)};
  if (leftLinkToggle == "0") {vLeft = nLeft} else {vLeft = nLeft - (nLeft - nLeft*((vRight-nRight)/nRight))*((vRight-nRight)/nRight)};
  if (bottomLinkToggle == "0") {vBottom = nBottom} else {vBottom = nBottom + nBottom*((vRight-nRight)/nRight)};
} else if (linkedCounter > 1 && targetLockToggle == "1" && rightLinkToggle !="0") {
  // calculate newValues for inactive variables (if goal is LOCKED)
  if (linkedCounter =="2") {
    //with 2 axes linked:
    if (topLinkToggle == "0") {vTop = nTop} else {lock1()};
    if (leftLinkToggle == "0") {vLeft = nLeft} else {lock2()};
    if (bottomLinkToggle == "0") {vBottom = nBottom} else {lock3()};
  } else if (linkedCounter =="3") {
    //with 3 axes linked:
    if (topLinkToggle != "0" && bottomLinkToggle != "0") {alert('not completed')}
    if (topLinkToggle != "0" && leftLinkToggle != "0") {alert('not completed')}
    if (bottomLinkToggle != "0" && leftLinkToggle != "0") {alert('not completed')}
  } else if (linkedCounter =="4") {
    alert ('definitely not finished');
  }
} else {
  // set newValues for inactive variables as oldValues when all are UNLINKED
  vTop = nTop;
  vBottom = nBottom;
  vLeft = nLeft;
}

// check to see whether new values exceed maximum/minimum limits, and revert them all if one does.
if (vTop <= maxTop && vTop >= minTop && vBottom <= maxBottom && vBottom >= minBottom && vLeft <= maxLeft && vLeft >= minLeft  && vRight <= maxRight && vRight >= minRight) {
  nTop = vTop;
  nBottom = vBottom;
  nLeft = vLeft;
  nRight = vRight;
}
  
  updateSliders();
  updateRect(0);
}

function updateRect(time) { 

  updateMetrics ();

// calculate color ratio
  var colorRatio = areaMetric/target;
   
// create transition var based on preceding function
  var t = holder.transition().duration(time);

// redraw, recolor static rectangle with transition
  d3.select("#staticRect")
    .attr("x", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y", posY + yScale(oTop) + oRingMargin/2)
    .attr("width", xScale(oRight) - xScale2(oLeft))
    .attr("height", yScale2(oBottom) - yScale(oTop))
    .style("fill", "hsla(360, 100%, 100%, .35)");

  // draw dynamic rectangles
  t.select("#targetRect1")
    .attr("x", function(d) {
      if (nLeft <= oLeft) {return posX + xScale2(oLeft) + oRingMargin/2}
      else {return posX+xScale2(nLeft) + oRingMargin/2}})
    .attr("y", function(d) {
      if (nTop >= oTop) {return posY + yScale(oTop) + oRingMargin/2}
      else {return posY + yScale(nTop) + oRingMargin/2}})
    .attr("width", function(d) {
      if (nLeft <= oLeft) {return xScale(nRight) - xScale2(oLeft)}
      else {return xScale(nRight) - xScale2(nLeft)}})
    .attr("height", function(d) {
      if (nTop >= oTop) {return yScale2(nBottom)-yScale(oTop)}
      else {return yScale2(nBottom)-yScale(nTop)}})
    .style("fill", function(d) {
      if (colorRatio >= 1){return "hsla(130, 50%, 70%, .4)"}
      else {return "hsla(" + Math.floor(300 - colorRatio*100) + ", " + (20*colorRatio + 50) + "%, 80%, .25)"}});

  t.select("#targetRect2")
    .attr("x", posX + xScale2(nLeft) + oRingMargin/2)
    .attr("y", function(d) {
      if (nTop >= oTop) {return posY + yScale(oTop) + oRingMargin/2}
      else {return posY + yScale(nTop) + oRingMargin/2}})
    .attr("width", function(d) {
      if (nRight >= oRight) {return xScale(oRight) - xScale2(nLeft)}
      else {return xScale(nRight) - xScale2(nLeft)}})
    .attr("height", function(d) {
      if (nTop >= oTop) {return yScale2(nBottom)-yScale(oTop)}
      else {return yScale2(nBottom)-yScale(nTop)}})
    .style("fill", function(d) {
      if (colorRatio >= 1){return "hsla(130, 50%, 70%, .4)"}
      else {return "hsla(" + Math.floor(300 - colorRatio*100) + ", " + (20*colorRatio + 50) + "%, 80%, .25)"}});

  t.select("#targetRect3")
    .attr("x", posX + xScale2(nLeft) + oRingMargin/2)
    .attr("y", posY + yScale(nTop) + oRingMargin/2)
    .attr("width", function(d) {
      if (nRight >= oRight) {return xScale(oRight) - xScale2(nLeft)}
      else {return xScale(nRight) - xScale2(nLeft)}})
    .attr("height", function(d) {
      if (nTop >= oTop && nBottom >= oBottom) {return yScale2(oBottom)-yScale(nTop)}
      else if (nBottom < oBottom) {return yScale2(nBottom)-yScale(nTop)}
      else {return yScale2(oBottom)-yScale(nTop)}})
    .style("fill", function(d) {
      if (colorRatio >= 1){return "hsla(130, 50%, 70%, .4)"}
      else {return "hsla(" + Math.floor(300 - colorRatio*100) + ", " + (20*colorRatio + 50) + "%, 80%, .25)"}});

  t.select("#targetRect4")
    .attr("x", function(d) {
      if (nLeft <= oLeft) {return posX + xScale2(oLeft) + oRingMargin/2}
      else {return posX+xScale2(nLeft) + oRingMargin/2}})
    .attr("y", posY + yScale(nTop) + oRingMargin/2)
    .attr("width", function(d) {
      if (nLeft <= oLeft) {return xScale(nRight) - xScale2(oLeft)}
      else {return xScale(nRight) - xScale2(nLeft)}})
    .attr("height", function(d) {
      if (nTop >= oTop && nBottom >= oBottom) {return yScale2(oBottom)-yScale(nTop)}
      else if (nBottom < oBottom) {return yScale2(nBottom)-yScale(nTop)}
      else {return yScale2(oBottom)-yScale(nTop)}})
    .style("fill", function(d) {
      if (colorRatio >= 1){return "hsla(130, 50%, 70%, .4)"}
      else {return "hsla(" + Math.floor(300 - colorRatio*100) + ", " + (20*colorRatio + 50) + "%, 80%, .25)"}});

  // reposition text labels
  t.select("#ewhLabel")
    .text(areaMetric.toFixed(0) + " " + localStorage.getItem("kpiName"))
    .attr("x", posX + oRingMargin/2 + xScale2(nLeft)+(xScale(nRight)-xScale2(nLeft))/2)
    .attr("y", posY + oRingMargin/2 + yScale(nTop)+(yScale2(nBottom)-yScale(nTop))/2 - 10)

  t.select("#workstationLabel")
    .text(xMetric.toFixed(0) + " " + localStorage.getItem("quantity_org_Metric"))
    .attr("x", posX + oRingMargin/2 + xScale2(nLeft)+(xScale(nRight)-xScale2(nLeft))/2)
    .attr("y", posY + oRingMargin/2 + yScale(nTop)+(yScale2(nBottom)-yScale(nTop))/2 + 20)

  t.select("#wwhLabel")
    .text(yMetric.toFixed(0) + " " + localStorage.getItem("ops_quality_Metric"))
    .attr("x", posX + oRingMargin/2 + xScale2(nLeft)+(xScale(nRight)-xScale2(nLeft))/2)
    .attr("y", posY + oRingMargin/2 + yScale(nTop)+(yScale2(nBottom)-yScale(nTop))/2 + 40)
  
  // move the connector-lines
  t.select('#c1a')
    .attr("x1", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y1", posY + yScale(oTop) + oRingMargin/2)
    .attr("x2", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y2", function(d) {
      if (nTop > oTop && nLeft < oLeft) {return posY + yScale(nTop) + oRingMargin/2}
      else {return posY + yScale(oTop) + oRingMargin/2}});

  t.select('#c1b')
    .attr("x1", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y1", posY + yScale(oTop) + oRingMargin/2)
    .attr("x2", function(d) {
      if (nTop > oTop && nLeft < oLeft) {return posX + xScale2(nLeft) + oRingMargin/2}
      else {return posX + xScale2(oLeft) + oRingMargin/2}})
    .attr("y2", posY + yScale(oTop) + oRingMargin/2);

  t.select('#c2a')
    .attr("x1", posX + xScale(oRight) + oRingMargin/2)
    .attr("y1", posY + yScale(oTop) + oRingMargin/2)
    .attr("x2", posX + xScale(oRight) + oRingMargin/2)
    .attr("y2", function(d) {
      if (nTop > oTop && nRight > oRight) {return posY + yScale(nTop) + oRingMargin/2}
      else {return posY + yScale(oTop) + oRingMargin/2}});

  t.select('#c2b')
    .attr("x1", posX + xScale(oRight) + oRingMargin/2)
    .attr("y1", posY + yScale(oTop) + oRingMargin/2)
    .attr("x2", function(d) {
      if (nTop > oTop && nRight > oRight) {return posX + xScale(nRight) + oRingMargin/2}
      else {return posX + xScale(oRight) + oRingMargin/2}})
    .attr("y2", posY + yScale(oTop) + oRingMargin/2);

  t.select('#c3a')
    .attr("x1", posX + xScale(oRight) + oRingMargin/2)
    .attr("y1", posY + yScale2(oBottom) + oRingMargin/2)
    .attr("x2", posX + xScale(oRight) + oRingMargin/2)
    .attr("y2", function(d) {
      if (nBottom > oBottom && nRight > oRight) {return posY + yScale2(nBottom) + oRingMargin/2}
      else {return posY + yScale2(oBottom) + oRingMargin/2}});

  t.select('#c3b')
    .attr("x1", posX + xScale(oRight) + oRingMargin/2)
    .attr("y1", posY + yScale2(oBottom) + oRingMargin/2)
    .attr("x2", function(d) {
      if (nBottom > oBottom && nRight > oRight) {return posX + xScale(nRight) + oRingMargin/2}
      else {return posX + xScale(oRight) + oRingMargin/2}})
    .attr("y2", posY + yScale2(oBottom) + oRingMargin/2);

  t.select('#c4a')
    .attr("x1", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y1", posY + yScale2(oBottom) + oRingMargin/2)
    .attr("x2", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y2", function(d) {
      if (nBottom > oBottom && nLeft < oLeft) {return posY + yScale2(nBottom) + oRingMargin/2}
      else {return posY + yScale2(oBottom) + oRingMargin/2}});

  t.select('#c4b')
    .attr("x1", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y1", posY + yScale2(oBottom) + oRingMargin/2)
    .attr("x2", function(d) {
      if (nBottom > oBottom && nLeft < oLeft) {return posX + xScale2(nLeft) + oRingMargin/2}
      else {return posX + xScale2(oLeft) + oRingMargin/2}})
    .attr("y2", posY + yScale2(oBottom) + oRingMargin/2);

  //redraw border for static rectangle
  t.select('#staticRectBorder')
    .attr("x", posX + xScale2(oLeft) + oRingMargin/2)
    .attr("y", posY + yScale(oTop) + oRingMargin/2)
    .attr("width", xScale(oRight) - xScale2(oLeft))
    .attr("height", yScale2(oBottom) - yScale(oTop))
    .style("stroke-width", "1px")
    .style("stroke","rgb(30, 30, 30)")
    .style("stroke-dasharray", ("5, 5"))
    .style("fill", "rgba(200, 200, 200, .0)");

  // move the edges
  d3.select('#topEdge')
    .attrs({
      x1: posX+xScale2(nLeft) + oRingMargin/2,
      x2: posX+xScale(nRight) + oRingMargin/2,
      y1: posY+yScale(nTop) + oRingMargin/2,
      y2: posY+yScale(nTop) + oRingMargin/2
    });

  d3.select('#bottomEdge')
    .attrs({
      x1: posX+xScale2(nLeft) + oRingMargin/2,
      x2: posX+xScale(nRight) + oRingMargin/2,
      y1: posY+yScale2(nBottom) + oRingMargin/2,
      y2: posY+yScale2(nBottom) + oRingMargin/2
    });

  d3.select('#rightEdge')
    .attrs({
      x1: posX+xScale(nRight) + oRingMargin/2,
      x2: posX+xScale(nRight) + oRingMargin/2,
      y1: posY+yScale(nTop) + oRingMargin/2,
      y2: posY+yScale2(nBottom) + oRingMargin/2
    });

  d3.select('#leftEdge')
    .attrs({
      x1: posX+xScale2(nLeft) + oRingMargin/2,
      x2: posX+xScale2(nLeft) + oRingMargin/2,
      y1: posY+yScale(nTop) + oRingMargin/2,
      y2: posY+yScale2(nBottom) + oRingMargin/2
    });

  // fade the edges back to original style
  var s = holder.transition().duration(1000);
  s.selectAll('.edge')
    .style("stroke-width", "1px");
}

function updateSliderMax(id){

// adjust Max Var values
  if (id == "topUpMax") {maxTop = (maxTop*1.5).toFixed(0)}
  else if (id == "topDownMax" && maxTop*2/3 > nTop) {maxTop = (maxTop*2/3).toFixed(0)}
  else if (id == "bottomUpMax") {maxBottom = maxBottom*1.5}
  else if (id == "bottomDownMax" && maxBottom*2/3 > nBottom) {maxBottom = maxBottom*2/3}
  else if (id == "rightUpMax") {maxRight = (maxRight*1.5*1000).toFixed(0)/1000}
  else if (id == "rightDownMax" && maxRight*2/3 > nRight) {maxRight = (maxRight*2/3*1000).toFixed(0)/1000}
  else if (id == "leftUpMax") {maxLeft = (maxLeft*1.5*10).toFixed(0)/10}
  else if (id == "leftDownMax" && maxLeft*2/3 > nLeft) {maxLeft = (maxLeft*2/3*10).toFixed(0)/10}

// adjust Max Slider values and labels
  d3.select("#sTop").property("max", maxTop);
  topMax.innerHTML = maxTop;

  d3.select("#sBottom").property("max", maxBottom);
  bottomMax.innerHTML = (maxBottom*100).toFixed(0) + "%";

  d3.select("#sRight").property("max", maxRight);
  rightMax.innerHTML = maxRight;


  d3.select("#sLeft").property("max", maxLeft);
  leftMax.innerHTML = maxLeft;

  // update sliders with re-scaled global variables
  updateAxis();
}

function updateAxis(){

  // adjust the domains only of the four scales, keeping range constant
  xScale.domain([0, maxRight]);
  yScale.domain([maxTop, 0]);
  xScale2.domain([minLeft, (maxLeft-minLeft)*1.3333+minLeft])
  yScale2.domain([0, maxBottom]);

  // update the axis tick values
  xAxis.tickValues([maxRight, maxRight*.75, maxRight*.5, maxRight*.25]);
  yAxis.tickValues([maxTop, maxTop*.75, maxTop*.5, maxTop*.25]);
  xAxis2.tickValues([maxLeft,(maxLeft-minLeft)*.6666+minLeft,(maxLeft-minLeft)*.3333+minLeft,minLeft]);
  yAxis2.tickValues([maxBottom, maxBottom*.75, maxBottom*.5, maxBottom*.25]);

  // create transition function (variable)
  var time = 500;
  var t = holder.transition().duration(time);
  t.select("#x1").call(xAxis);
  t.select("#x2").call(xAxis2);
  t.select("#y1").call(yAxis);
  t.select("#y2").call(yAxis2);

  // redraw the dynamic rectangle with recalculated values
  updateRect(time);
}


function updateSliders() {
// set the initial value of the variable sliders, and in the adjacent text field

  d3.select("#sTop-value").text(nTop.toFixed(0));
  d3.select("#sTop").property("min", minTop);
  d3.select("#sTop").property("max", maxTop);
  d3.select("#sTop").property("value", nTop);

  d3.select("#sBottom-value").text(d3.format("0.0%")(nBottom));
  d3.select("#sBottom").property("min", minBottom);
  d3.select("#sBottom").property("max", maxBottom);
  d3.select("#sBottom").property("value", nBottom);

  d3.select("#sRight-value").text((nRight/100).toFixed(0)*100);
  d3.select("#sRight").property("min", minRight);
  d3.select("#sRight").property("max", maxRight);
  d3.select("#sRight").property("value", nRight);

  d3.select("#sLeft-value").text(nLeft.toFixed(0));
  d3.select("#sLeft").property("min", minLeft);
  d3.select("#sLeft").property("max", maxLeft);
  d3.select("#sLeft").property("value", nLeft);
}

function editTarget() {
  fTargetInput.innerHTML = fTargetValue.innerHTML;
  document.getElementById("fTargetValue").style.display = "none";
  document.getElementById("fTargetInput").style.visibility = "visible";
  document.getElementById("fTargetButton").style.visibility = "visible";
  document.getElementById("fTargetInput").focus();
  document.getElementById("fTargetInput").select();
}

function updateMetrics() {
  yMetric = nTop*nBottom;
  xMetric = nRight/nLeft;
  areaMetric = xMetric*yMetric;
}



