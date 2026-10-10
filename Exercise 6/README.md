# Exercise 6: Interactive Visualisations

## Overview

This folder contains the Week 6 D3.js interactive visualisation exercises. The exercises use the TV energy consumption dataset to build a histogram, add filters, create a scatterplot, colour code data points, and add tooltips.

The purpose of this exercise set is to practise interactive data visualisation techniques using D3.js. Interaction allows users to explore patterns in the data instead of only viewing a static chart.

## Exercises

### Exercise 6.1: Histogram

Folder: `6.1`

This exercise creates a histogram showing the frequency of TV models across labelled energy consumption ranges.

Main file:

- `6.1/index.html`

Key skills:

- Loading CSV data with `d3.csv`
- Converting CSV values into numbers
- Creating histogram bins with `d3.bin`
- Drawing SVG rectangles for histogram bars
- Adding x-axis and y-axis
- Separating code into data loading, shared constants, interactions, and chart files

### Exercise 6.2: Filters

Folder: `6.2`

This exercise adds interactive filter buttons to the histogram. Users can view all TVs or filter the histogram by screen technology.

Main file:

- `6.2/index.html`

Key skills:

- Creating filter buttons with D3
- Tracking active filter state
- Filtering data by `screenTech`
- Updating the histogram when a button is clicked
- Using transitions to animate changes

Filter options:

- All
- LED
- LCD
- OLED

### Exercise 6.3: Scatterplot

Folder: `6.3`

This exercise adds a scatterplot to the same webpage as the filtered histogram. The scatterplot shows the relationship between TV star rating and labelled energy consumption.

Main file:

- `6.3/index.html`

Key skills:

- Creating a scatterplot with SVG circles
- Mapping star rating to the x-axis
- Mapping energy consumption to the y-axis
- Colour coding points by screen technology
- Adding a legend for screen types
- Keeping scatterplot scales separate from histogram scales

### Exercise 6.4: Tooltips

Folder: `6.4`

This exercise adds tooltips to the scatterplot. When the user hovers over a scatterplot point, a tooltip appears and shows the TV screen size.

Main file:

- `6.4/index.html`

Key skills:

- Creating an SVG tooltip using a group, rectangle, and text
- Using `mouseenter` and `mouseleave` event listeners
- Displaying screen size on hover
- Positioning the tooltip relative to the selected circle
- Keeping the histogram filters working while adding scatterplot interactivity

## How To View

Open each exercise's `index.html` file in a browser.

Recommended viewing method:

- Open the project in VS Code
- Right-click the relevant `index.html`
- Select **Open with Live Server**

Live Server is recommended because the visualisations load CSV files.

## Folder Structure

```text
Exercise 6/
  README.md
  6.1/
    README.md
    index.html
    css/
    data/
    js/
  6.2/
    README.md
    index.html
    css/
    data/
    js/
  6.3/
    README.md
    index.html
    css/
    data/
    js/
  6.4/
    README.md
    index.html
    css/
    data/
    js/
```

## Data Source

The exercises use the Week 6 TV dataset prepared from the Energy Rating Data for household appliances - Televisions dataset.

## AI Acknowledgement

I used AI to help structure the D3 code, explain histogram bins, filters, scatterplots, colour scales, legends, and tooltips, and prepare documentation. I reviewed, tested, and customised the code and README files for this exercise.
