// Step 2: Use D3 to select HTML elements and change their appearance.
d3.select("h1")
  .style("color", "#1f7a3f")
  .style("font-size", "2.2rem");

d3.select(".intro")
  .style("background-color", "#eef8f0")
  .style("padding", "18px");

d3.selectAll("h2")
  .style("color", "#0f5132");

// Step 3: Use D3 to append a paragraph to the container div/section.
d3.select(".container")
  .append("p")
  .attr("class", "d3-added")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Step 4: Use D3 to append a visible rectangle to the SVG.
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");

// Extra labels make it easier to see what D3 added.
d3.select("svg")
  .append("text")
  .attr("x", 50)
  .attr("y", 105)
  .attr("fill", "#222")
  .attr("font-size", "16")
  .text("Rectangle added using D3");
