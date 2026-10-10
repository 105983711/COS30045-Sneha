const drawScatterplot = data => {
  const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  innerChartS = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const maxStar = d3.max(data, d => d.star);
  const maxEnergy = d3.max(data, d => d.energyConsumption);
  const screenTypes = Array.from(new Set(data.map(d => d.screenTech))).sort();

  xScaleS
    .domain([0, Math.ceil(maxStar)])
    .range([0, innerWidth])
    .nice();

  yScaleS
    .domain([0, maxEnergy])
    .range([innerHeight, 0])
    .nice();

  colorScale
    .domain(screenTypes)
    .range(d3.schemeCategory10);

  innerChartS
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("class", "scatter-point")
    .attr("r", 4)
    .attr("cx", d => xScaleS(d.star))
    .attr("cy", d => yScaleS(d.energyConsumption))
    .attr("fill", d => colorScale(d.screenTech));

  const bottomAxis = d3.axisBottom(xScaleS)
    .ticks(8)
    .tickFormat(d3.format("~g"));

  const leftAxis = d3.axisLeft(yScaleS)
    .ticks(8)
    .tickFormat(d3.format(","));

  innerChartS
    .append("g")
    .attr("class", "axis x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(bottomAxis);

  innerChartS
    .append("g")
    .attr("class", "axis y-axis")
    .call(leftAxis);

  innerChartS
    .append("text")
    .attr("class", "axis-label")
    .attr("x", 0)
    .attr("y", -16)
    .attr("text-anchor", "start")
    .text("Labelled Energy Consumption (kWh/year)");

  innerChartS
    .append("text")
    .attr("class", "axis-label")
    .attr("x", innerWidth)
    .attr("y", innerHeight + 48)
    .attr("text-anchor", "end")
    .text("Star Rating");

  const legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width - 100}, ${margin.top})`);

  colorScale.domain().forEach((screenTech, i) => {
    const legendRow = legend
      .append("g")
      .attr("transform", `translate(0, ${i * 20})`);

    legendRow
      .append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", colorScale(screenTech));

    legendRow
      .append("text")
      .attr("x", 20)
      .attr("y", 5)
      .attr("text-anchor", "start")
      .text(screenTech);
  });
};
