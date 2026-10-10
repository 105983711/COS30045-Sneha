const populateFilters = data => {
  const updateHistogram = filterId => {
    const updatedData = filterId === "all"
      ? data
      : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
      .data(updatedBins)
      .transition()
      .duration(500)
      .ease(d3.easeCubicInOut)
      .attr("y", d => yScale(d.length))
      .attr("height", d => innerHeight - yScale(d.length));
  };

  d3.select("#filters_screen")
    .selectAll(".filter")
    .data(filters_screen)
    .join("button")
    .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
    .text(d => d.label)
    .on("click", (event, d) => {
      console.log("Clicked filter:", event);
      console.log("Clicked filter data:", d);

      if (!d.isActive) {
        filters_screen.forEach(filter => {
          filter.isActive = d.id === filter.id;
        });

        d3.selectAll("#filters_screen .filter")
          .classed("active", filter => filter.id === d.id);

        updateHistogram(d.id);
      }
    });
};

// Tooltips are introduced in Exercise 6.4. These placeholders keep the
// Exercise 6.3 page ready for that next step without causing script errors.
const createTooltip = () => {
  console.log("Tooltip placeholder ready");
};

const handleMouseEvents = () => {
  console.log("Mouse event placeholder ready");
};
