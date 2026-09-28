# Exercise 4.3: D3 Setup

This exercise sets up a responsive SVG canvas using D3. It prepares the page for later exercises where a bar chart will be generated from CSV data.

## Files

- `index.html` loads D3, loads `js/main.js`, and contains the responsive SVG container.
- `style.css` contains the responsive `.responsive-svg-container` class.
- `js/main.js` creates the SVG canvas and adds a test rectangle using D3.

## D3 Setup

The JavaScript creates an SVG inside:

```html
<div class="responsive-svg-container"></div>
```

The SVG uses:

```js
.attr("viewBox", "0 0 1200 1600")
```

This helps the SVG scale when the browser window changes size.

## Test Rectangle

A blue rectangle is added with D3:

```js
svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");
```

This rectangle is hard-coded for now. In the next exercise, data from a CSV file will be used to set SVG attributes.

## AI Acknowledgement

I used AI to help to understand structure the filesso that the D3 setup matches the Exercise 4.3 instructions.
