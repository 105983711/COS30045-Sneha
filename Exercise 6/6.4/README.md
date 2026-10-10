# Exercise 6.4: Tooltips

## Overview

This exercise adds tooltips to the D3.js scatterplot built in Exercise 6.3.

The scatterplot shows the relationship between TV star rating and labelled energy consumption. Each TV model is drawn as a circle, the circle colour represents the screen technology, and hovering over a circle displays the TV screen size.

## Files

- `index.html` - Main webpage for Exercise 6.4
- `css/base.css` - General page layout and typography styles
- `css/visualisation.css` - SVG, histogram, scatterplot, legend, and tooltip styles
- `js/load-data.js` - Loads and converts the CSV data
- `js/shared-constants.js` - Stores chart dimensions, colours, histogram scales, scatterplot scales, colour scale, tooltip dimensions, the bin generator, and screen filter options
- `js/interactions.js` - Builds the filter buttons, updates the histogram, creates the scatterplot tooltip, and handles mouse events
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
- Creates a tooltip using an SVG group, rectangle, and text
- Shows the tooltip when the mouse enters a scatterplot point
- Displays the screen size for the selected TV
- Hides the tooltip when the mouse leaves the point

## How To View

Open `index.html` in a browser.

If the CSV file does not load by double-clicking the file, open the folder using Live Server in VS Code.

## Data Source

Energy Rating Data for household appliances - Televisions  
Downloaded Jan 2026 and prepared for COS30045 Week 6.

## AI Acknowledgement

I used AI to help structure the D3 tooltip code and explain how mouseenter and mouseleave events can show and hide a tooltip on the scatterplot. I reviewed and customised the final implementation for this exercise.
