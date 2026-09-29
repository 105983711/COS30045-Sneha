# Exercise 4.5: D3 Binding and Drawing with Data

This exercise uses the CSV data loaded in Exercise 4.4 to draw SVG rectangles with D3. Each row in the dataset is bound to one rectangle, creating the first version of a bar chart.

## Files

- `index.html` loads D3, loads `js/main.js`, and contains the responsive SVG container.
- `style.css` contains the page styling and bar styling.
- `js/main.js` loads the CSV data and draws the bar rectangles.
- `../data/tvBrandCount.csv` contains the TV brand count data.

## What The Code Does

The CSV is loaded with:

```js
d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
})
```

The `count` column is converted from text to a number using `+d.count`.

The data is sorted from largest count to smallest count:

```js
data.sort((a, b) => b.count - a.count);
```

The sorted data is passed to:

```js
drawBarChart(data);
```

Inside `drawBarChart`, D3 binds the data to SVG rectangles:

```js
svg
  .selectAll("rect")
  .data(data)
  .join("rect")
```

Each rectangle becomes one bar in the chart. The width of each bar comes from `d.count`, and the y-position uses the data index so the bars do not overlap.

## Current Limitation

This chart does not yet use a scale, so the bar widths are hard-coded directly from the count values. Scaling will be added in Exercise 4.6 and labels will be added later.

## AI Acknowledgement

I used AI to help understand the whole structure of this exercise.