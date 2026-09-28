const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");

d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  data.sort((a, b) => d3.descending(a.count, b.count));

  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count));

  drawBarChart(data);
});

function drawBarChart(data) {
  console.log("Data ready for bar chart:", data);

  svg
    .append("text")
      .attr("x", 40)
      .attr("y", 70)
      .attr("font-size", 32)
      .attr("fill", "#0f5132")
      .text("CSV data loaded. Open the console to inspect the data.");
}
