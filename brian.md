---
title: Brian
---

## Pace over time
<div id="single-time-pace"></div>

## Distance per run
<div id="single-time-distance"></div>

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

<script src="https://cdn.jsdelivr.net/npm/vega@5.12.1"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.13.1"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.8.0"></script>
<script src="plots.js"></script>

<script type="text/javascript">
  load_plot("single-calendar", "Brian");
  load_plot("single-time-pace", "Brian");
  load_plot("single-time-distance", "Brian");
  load_plot("single-distance-by-month", "Brian");
  load_plot("single-distance-by-year-month", "Brian");
  load_plot("single-cumulative-year", "Brian");
  load_plot("single-crossfilter", "Brian");
</script>
