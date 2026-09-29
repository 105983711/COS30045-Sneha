# Exercise 4.6: Scaling Charts

This exercise updates the D3 bar chart from Exercise 4.5 so it uses scales. The chart now fits inside a smaller SVG viewBox instead of using raw count values directly as pixel widths.

## Files

- `index.html` loads D3, loads `js/main.js`, and contains the responsive SVG container.
- `style.css` contains page styling and responsive SVG styling.
- `js/main.js` loads the CSV data, sorts it, and draws the scaled bars.
- `../data/tvBrandCount.csv` contains the TV brand count data.

## What Changed From Exercise 4.5

The SVG viewBox was changed from a large chart area to a smaller one:

```js
.attr("viewBox", "0 0 500 700")
```

This shows why scaling is needed. The largest raw count is over 1000, but the SVG width is only 500.

## Linear Scale

The x-scale maps count values to bar widths:

```js
const xScale = d3.scaleLinear()
  .domain([0, 1200])
  .range([0, 400]);
```

The bar width now uses the scale:

```js
.attr("width", d => xScale(d.count))
```

This makes the bars fit inside the available SVG width.

## Band Scale

The y-scale maps brand names to vertical positions:

```js
const yScale = d3.scaleBand()
  .domain(data.map(d => d.brand))
  .range([0, 700])
  .padding(0.1);
```

The bar height and y-position now use the band scale:

```js
.attr("height", yScale.bandwidth())
.attr("y", d => yScale(d.brand))
```

This spaces the bars evenly and adds padding between them.

## Current Limitation

The chart now scales correctly, but it still does not have labels. Labels will be added in the next exercise.

## AI Acknowledgement

## AI Acknowledgement

I used AI to help explain the task requirements and guide me through D3 syntax and debugging. I tested, reviewed, and adjusted the final code myself to make sure it worked for this exercise.
