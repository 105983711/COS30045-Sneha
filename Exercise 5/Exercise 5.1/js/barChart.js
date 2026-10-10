d3.csv("data/Data_exercise 5.1.csv", d => {
  return {
    Screen_Tech: d.Screen_Tech.toUpperCase(),
    Energy_Consumption: +d["Mean(Labelled energy consumption (kWh/year))"]
  };
}).then(data => {
  console.log(data);

  data.sort((a, b) => b.Energy_Consumption - a.Energy_Consumption);
  drawBarChart(data);
});

const drawBarChart = data => {
  const margin = { top: 45, right: 45, bottom: 70, left: 70 };
  const width = 900;
  const height = 560;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select("#bar-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const xScale = d3.scaleBand()
    .domain(data.map(d => d.Screen_Tech))
    .range([0, innerWidth])
    .padding(0.12);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Energy_Consumption)])
    .nice()
    .range([innerHeight, 0]);

  const bottomAxis = d3.axisBottom(xScale)
    .tickSizeOuter(0);

  const leftAxis = d3.axisLeft(yScale)
    .ticks(8);

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
    .text("Energy Consumption (kWh)")
    .attr("x", -margin.left)
    .attr("y", -18)
    .attr("text-anchor", "start");

  innerChart
    .selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.Screen_Tech))
    .attr("y", d => yScale(d.Energy_Consumption))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d.Energy_Consumption));

  innerChart
    .selectAll(".bar-label")
    .data(data)
    .join("text")
    .attr("class", "bar-label")
    .text(d => `${Math.round(d.Energy_Consumption)} kWh`)
    .attr("x", d => xScale(d.Screen_Tech) + xScale.bandwidth() / 2)
    .attr("y", d => yScale(d.Energy_Consumption) - 8)
    .attr("text-anchor", "middle");
};
