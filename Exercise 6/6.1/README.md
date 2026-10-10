# Exercise 6.1: Histogram

## Overview

This exercise builds a D3.js histogram using the Week 6 TV energy consumption dataset. The histogram shows the frequency of TV models across labelled energy consumption ranges.

The chart is designed as the starting point for Exercise 6.2, where filters will be added to make the visualisation interactive.

## Files

- `index.html` - Main webpage for Exercise 6.1
- `css/base.css` - General page layout and typography styles
- `css/visualisation.css` - SVG and chart-specific styles
- `js/load-data.js` - Loads and converts the CSV data
- `js/shared-constants.js` - Stores chart dimensions, colours, scales, and the bin generator
- `js/interactions.js` - Placeholder for the filter interactions added in Exercise 6.2
- `js/histogram.js` - Draws the D3 histogram
- `data/W6_TVdata.csv` - Week 6 TV dataset used for the histogram

## Features

- Loads TV data from a CSV file using `d3.csv`
- Converts numeric columns such as `screenSize`, `star`, and `energyConsumption`
- Creates histogram bins using `d3.bin`
- Uses shared constants for margins, dimensions, colours, and scales
- Draws histogram bars with SVG rectangles
- Adds x-axis and y-axis labels
- Uses a responsive SVG `viewBox`

## How To View

Open `index.html` in a browser.

If the CSV file does not load by double-clicking the file, open the folder using Live Server in VS Code.

## Data Source

Energy Rating Data for household appliances - Televisions  
Downloaded Jan 2026 and prepared for COS30045 Week 6.

## AI Acknowledgement

I used AI to help structure the D3 histogram files, separate the code into modules, and explain how the bin generator, scales, axes, and SVG bars work. I reviewed and customised the final implementation for this exercise.
