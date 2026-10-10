# Exercise 5: D3 Charts

## Overview

This folder contains the Week 5 D3.js chart exercises. The exercises practise loading CSV data, creating SVG visualisations, using D3 scales and axes, and customising chart designs.

## Exercises

### Exercise 5.1: Vertical Bar Chart with Axis

Folder: `Exercise 5.1`

This exercise creates a vertical bar chart showing the average labelled energy consumption of 55 inch TVs by screen technology.

Main file:

- `Exercise 5.1/index.html`

Key skills:

- Loading CSV data with `d3.csv`
- Creating band and linear scales
- Drawing SVG rectangles as bars
- Adding x-axis and y-axis
- Adding value labels

### Exercise 5.2: Scatter Plot and Line Chart

Folder: `Exercise 5.2`

This exercise keeps the Exercise 5.1 bar chart and adds a line chart showing average Australian electricity spot prices from 1998 to 2024.

Main files:

- `Exercise 5.2/index.html`
- `Exercise 5.2/customised-chart.html`

Key skills:

- Reusing an existing D3 bar chart
- Creating a line chart with `d3.line`
- Adding scatter points
- Using linear scales for time-series data
- Customising the line chart into a stepped area chart

### Exercise 5.3: Donut Chart

Folder: `Exercise 5.3`

This exercise creates a donut chart showing the proportion of small, medium, and large TV models in the prepared dataset.

Main files:

- `Exercise 5.3/index.html`
- `Exercise 5.3/customised-donut.html`

Key skills:

- Creating a donut chart with `d3.pie`
- Drawing arcs with `d3.arc`
- Applying ordinal colour scales
- Adding donut labels
- Customising slice spacing, rounded corners, percentage labels, and centre text

## How To View

Open each exercise's `index.html` file in a browser.

For the customised versions, open:

- `Exercise 5.2/customised-chart.html`
- `Exercise 5.3/customised-donut.html`

If the CSV files do not load by double-clicking the HTML files, open the project using Live Server in VS Code.

## Folder Structure

```text
Exercise 5/
  README.md
  Exercise 5.1/
    README.md
    index.html
    css/
    data/
    js/
  Exercise 5.2/
    README.md
    index.html
    customised-chart.html
    css/
    data/
    js/
  Exercise 5.3/
    README.md
    index.html
    customised-donut.html
    css/
    data/
    js/
```

## AI Acknowledgement

I used AI to help structure the D3 code, explain chart concepts, and prepare documentation. I reviewed and customised the code and README files for this exercise.
