d3.csv("data/Data_exercise 5.3.csv", d => {
  return {
    Screensize_Category: d.Screensize_Category,
    Count: +d.Count
  };
}).then(data => {
  console.log(data);
  drawCustomisedDonut(data);
});

const drawCustomisedDonut = data => {
  const width = 900;
  const height = 560;
  const radius = Math.min(width, height) / 2 - 90;
  const total = d3.sum(data, d => d.Count);

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.Screensize_Category))
    .range(["#2f9e44", "#f59f00", "#4c6ef5"]);

  const pie = d3.pie()
    .value(d => d.Count)
    .sort(null)
    .padAngle(0.025);

  const arcGenerator = d3.arc()
    .innerRadius(radius * 0.68)
    .outerRadius(radius)
    .cornerRadius(8);

  const labelArc = d3.arc()
    .innerRadius(radius * 1.15)
    .outerRadius(radius * 1.15);

  const svg = d3.select("#customised-donut")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const slices = innerChart
    .selectAll("path")
    .data(pie(data))
    .join("path")
    .attr("d", arcGenerator)
    .attr("fill", d => color(d.data.Screensize_Category))
    .attr("stroke", "white")
    .attr("stroke-width", 4);

  innerChart
    .selectAll(".custom-donut-label")
    .data(pie(data))
    .join("text")
    .attr("class", "custom-donut-label")
    .attr("transform", d => `translate(${labelArc.centroid(d)})`)
    .attr("text-anchor", d => {
      const [x] = labelArc.centroid(d);
      return x < 0 ? "end" : "start";
    })
    .attr("dominant-baseline", "middle")
    .text(d => {
      const percentage = d.data.Count / total * 100;
      return `${d.data.Screensize_Category}: ${percentage.toFixed(1)}%`;
    });

  innerChart
    .append("text")
    .attr("class", "donut-centre-title")
    .attr("text-anchor", "middle")
    .attr("y", -8)
    .text("TV models");

  innerChart
    .append("text")
    .attr("class", "donut-centre-value")
    .attr("text-anchor", "middle")
    .attr("y", 24)
    .text(total.toLocaleString());
};
