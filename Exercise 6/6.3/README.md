# Exercise 6.3: Scatterplot

## Overview

This exercise adds a D3.js scatterplot to the same webpage as the filtered histogram from Exercise 6.2.

The scatterplot shows the relationship between TV star rating and labelled energy consumption. Each TV model is drawn as a circle, and the circle colour represents the screen technology.

## Files

- `index.html` - Main webpage for Exercise 6.3
- `css/base.css` - General page layout and typography styles
- `css/visualisation.css` - SVG, histogram, scatterplot, and legend styles
- `js/load-data.js` - Loads and converts the CSV data
- `js/shared-constants.js` - Stores chart dimensions, colours, histogram scales, scatterplot scales, colour scale, tooltip dimensions, the bin generator, and screen filter options
- `js/interactions.js` - Builds the filter buttons and updates the histogram when a filter is selected
- `js/histogram.js` - Draws the D3 histogram
- `js/scatterplot.js` - Draws the D3 scatterplot and colour legend
- `data/W6_TVdata.csv` - Week 6 TV dataset used for the histogram

## Features

- Loads TV data from a CSV file using `d3.csv`
- Converts numeric columns such as `screenSize`, `star`, and `energyConsumption`
- Creates histogram bins using `d3.bin`
- Uses shared constants for margins, dimensions, colours, and scales
- Draws histogram bars with SVG rectangles
- Adds x-axis and y-axis labels
- Uses a responsive SVG `viewBox`
- Adds filter buttons for All, LED, LCD, and OLED
- Updates the active filter button using D3's `.classed()` method
- Filters the dataset by `screenTech`
- Updates the histogram bars with a transition
- Draws a scatterplot of star rating against labelled energy consumption
- Colour codes each point by screen technology
- Adds a legend for LED, LCD, and OLED screen technologies
- Adds x-axis and y-axis labels to the scatterplot
- Prepares placeholder tooltip functions for Exercise 6.4

## How To View

Open `index.html` in a browser.

If the CSV file does not load by double-clicking the file, open the folder using Live Server in VS Code.

## Data Source

Energy Rating Data for household appliances - Televisions  
Downloaded Jan 2026 and prepared for COS30045 Week 6.

## AI Acknowledgement

I used AI to help structure the D3 scatterplot code, separate the scatterplot scales from the histogram scales, and explain how colour scales, axes, circles, and legends work. I reviewed and customised the final implementation for this exercise.
