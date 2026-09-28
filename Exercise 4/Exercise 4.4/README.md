# Exercise 4.4: Load Data from CSV

This exercise loads TV brand count data from a CSV file using D3. The data is converted into JavaScript objects and prepared for a later bar chart.

## Files

- `index.html` loads D3 and the separate `js/main.js` file.
- `style.css` contains page styling and the responsive SVG container.
- `js/main.js` loads and formats the CSV data.
- `../data/tvBrandCount.csv` contains the TV brand count data.

## D3 CSV Loading

The CSV is loaded with:

```js
d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
})
```

The `+d.count` conversion changes the `count` value from a string into a number.

## Console Output

The browser console prints:

- the full data array
- the number of rows
- the maximum count
- the minimum count
- the extent, which is the minimum and maximum count in one array

The data is also sorted in descending order by count so the largest brands appear first.

## Next Step

The data is passed to:

```js
drawBarChart(data);
```

The bar chart will be built in the next exercise.

## AI Acknowledgement

I used AI to help structure the files and D3 code for loading, typing, sorting, and checking the CSV data.
