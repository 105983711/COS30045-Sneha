const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 500 700")
    .style("border", "1px solid black");

d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count));

  data.sort((a, b) => b.count - a.count);

  drawBarChart(data);
});

const drawBarChart = data => {
  const labelWidth = 130;

  const xScale = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, 340]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 700])
    .padding(0.1);

  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  barAndLabel
    .append("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("fill", "blue")
      .attr("x", labelWidth)
      .attr("y", 0);

  barAndLabel
    .append("text")
      .attr("class", "brand-label")
      .text(d => d.brand)
      .attr("x", 120)
      .attr("y", yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .style("font-size", "13px");

  barAndLabel
    .append("text")
      .attr("class", "count-label")
      .text(d => d.count)
      .attr("x", d => labelWidth + xScale(d.count) + 4)
      .attr("y", yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .style("font-size", "13px");
};
