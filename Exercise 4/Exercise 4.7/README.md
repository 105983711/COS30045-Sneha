# Exercise 4.7: Adding Labels

This exercise adds labels to the D3 bar chart from Exercise 4.6. The chart now shows the brand name beside each bar and the count value at the end of each bar.

## Files

- `index.html` loads D3, loads `js/main.js`, and contains the responsive SVG container.
- `style.css` contains page styling and text label styling.
- `js/main.js` loads the CSV data, creates groups, draws bars, and adds labels.
- `../data/tvBrandCount.csv` contains the TV brand count data.

## What Changed From Exercise 4.6

The bars no longer start at `x = 0`. They start at `x = 100` so there is room for brand labels on the left.

Instead of binding the data directly to rectangles, the data is bound to SVG groups:

```js
const barAndLabel = svg
  .selectAll("g")
  .data(data)
  .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);
```

Each group contains:

- one `rect` for the bar
- one `text` element for the brand label
- one `text` element for the count value

## Why Groups Are Used

The group keeps the bar and its labels together. The group is moved vertically using `transform`, so the rectangle and both labels stay aligned.

## Current Result

The final chart has:

- scaled blue bars
- brand labels on the left
- count labels at the end of each bar
- spacing between bars from `d3.scaleBand()`

## AI Acknowledgement

I used AI to help understand the D3 grouping and label placement steps. I tested and adjusted the chart so the bars and labels display clearly.
