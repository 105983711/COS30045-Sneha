d3.csv("data/ARE_Spot_Prices.csv", d => {
  return {
    year: +d.Year,
    averagePrice: +d["Average Price (notTas-Snowy)"]
  };
}).then(data => {
  console.log(data);
  drawCustomisedChart(data);
});

const drawCustomisedChart = data => {
  const margin = { top: 60, right: 100, bottom: 70, left: 70 };
  const width = 900;
  const height = 560;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select("#customised-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([0, innerWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.averagePrice)])
    .nice()
    .range([innerHeight, 0]);

  const bottomAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d"));

  const leftAxis = d3.axisLeft(yScale);

  innerChart
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(bottomAxis);

  innerChart
    .append("g")
    .attr("class", "y-axis")
    .call(leftAxis);

  innerChart
    .append("text")
    .attr("class", "axis-label")
    .text("Average Price ($ per MWh)")
    .attr("x", -margin.left)
    .attr("y", -28)
    .attr("text-anchor", "start");

  innerChart
    .append("text")
    .attr("class", "axis-label")
    .text("Year")
    .attr("x", innerWidth / 2)
    .attr("y", innerHeight + 52)
    .attr("text-anchor", "middle");

  const areaGenerator = d3.area()
    .x(d => xScale(d.year))
    .y0(innerHeight)
    .y1(d => yScale(d.averagePrice))
    .curve(d3.curveStep);

  const lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.averagePrice))
    .curve(d3.curveStep);

  innerChart
    .append("path")
    .datum(data)
    .attr("class", "price-area")
    .attr("d", areaGenerator);

  innerChart
    .append("path")
    .datum(data)
    .attr("class", "price-line")
    .attr("d", lineGenerator);

  innerChart
    .selectAll(".price-point")
    .data(data)
    .join("circle")
    .attr("class", "price-point")
    .attr("r", 4)
    .attr("cx", d => xScale(d.year))
    .attr("cy", d => yScale(d.averagePrice));

  innerChart
    .append("text")
    .attr("class", "line-label")
    .text("Average price")
    .attr("x", xScale(2020) + 8)
    .attr("y", yScale(152))
    .attr("text-anchor", "start");
};
