# Exercise 6.2: Filters

## Overview

This exercise adds interactive filters to the D3.js histogram built in Exercise 6.1. The histogram shows the frequency of TV models across labelled energy consumption ranges, and the filter buttons allow users to view all screen technologies or only LED, LCD, or OLED TVs.

The purpose of this exercise is to practise using D3 event listeners, filter state, and transitions to update an existing visualisation.

## Files

- `index.html` - Main webpage for Exercise 6.2
- `css/base.css` - General page layout and typography styles
- `css/visualisation.css` - SVG and chart-specific styles
- `js/load-data.js` - Loads and converts the CSV data
- `js/shared-constants.js` - Stores chart dimensions, colours, scales, the bin generator, and screen filter options
- `js/interactions.js` - Builds the filter buttons and updates the histogram when a filter is selected
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
- Adds filter buttons for All, LED, LCD, and OLED
- Updates the active filter button using D3's `.classed()` method
- Filters the dataset by `screenTech`
- Updates the histogram bars with a transition

## How To View

Open `index.html` in a browser.

If the CSV file does not load by double-clicking the file, open the folder using Live Server in VS Code.

## Data Source

Energy Rating Data for household appliances - Televisions  
Downloaded Jan 2026 and prepared for COS30045 Week 6.

## AI Acknowledgement

I used AI to help structure the D3 filter code, connect the filter buttons to the histogram update, and explain how D3 event listeners, classed states, transitions, and filtered bins work. I reviewed and customised the final implementation for this exercise.
