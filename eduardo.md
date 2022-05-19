---
title: Eduardo
---

## Pace and distance over time
<div id="single-time-pace"></div>

## Monthly distances over time
<div id="single-distance-by-month"></div>

## Compare months across years
<div id="single-distance-by-year-month"></div>

## Compare years
<div id="single-cumulative-year"></div>

## Runs by day of the week
<div id="single-calendar"></div>

## Analysis of runs
This is a fun graph. Use your mouse to highlight an area in one of the graphs. The other graphs
will show what workouts correspond to that selection.

<div id="single-crossfilter"></div>

<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
<script src="plots.js"></script>

<script type="text/javascript">
  load_plot("single-calendar", "Eduardo");
  load_plot("single-time-pace", "Eduardo");
  load_plot("single-distance-by-month", "Eduardo");
  load_plot("single-distance-by-year-month", "Eduardo");
  load_plot("single-cumulative-year", "Eduardo");
  load_plot("single-crossfilter", "Eduardo");
</script>
