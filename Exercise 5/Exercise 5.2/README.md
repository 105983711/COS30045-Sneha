# Exercise 5.2: Scatter Plot and Line Chart

## Overview

This exercise builds on Exercise 5.1 by keeping the vertical bar chart and adding a line chart using D3.js.

The line chart shows average Australian electricity spot prices from 1998 to 2024. Each year is shown with a scatter point, and the points are joined using a line to show the trend over time.

## Files

- `index.html` - Main Exercise 5.2 page with the bar chart and line chart
- `customised-chart.html` - Customised version of the line chart
- `css/style.css` - Styling for the page and charts
- `js/barChart.js` - D3 code for the vertical bar chart
- `js/line-chart.js` - D3 code for the line chart
- `js/customised-chart.js` - D3 code for the customised stepped area chart
- `data/Data_exercise 5.1.csv` - Dataset for the bar chart
- `data/ARE_Spot_Prices.csv` - Dataset for the electricity spot price chart

## Features

- Reuses the vertical bar chart from Exercise 5.1
- Loads electricity spot price data from CSV
- Uses a linear scale for the year x-axis
- Uses a linear scale for the average price y-axis
- Adds scatter points for each year
- Uses a D3 line generator to connect the data points
- Adds axis labels and a line label

## Customised Chart

The customised chart changes the original line chart into a stepped area chart. It includes:

- A stepped line style
- A light green filled area under the line
- Visible data points
- Axis labels
- A chart label

## AI Acknowledgement

I used AI to help structure the D3 line chart code and explain how linear scales, axes, circles, and the line generator work. I reviewed and customised the code for this exercise.
