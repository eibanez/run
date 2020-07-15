var opts = {
  "actions": false,
  "config": {
    "style": {
      "guide-label": {"fontSize": 12.5},
      "guide-title": {"fontSize": 13.5, "fontStyle": "normal"}
    },
    "header": {"labelFontSize": 14.5},
    "legend": {"orient": "top"}
  }
};

function load_plot(id, person) {
  vegaEmbed("#" + id, "specs/" + id + ".json", opts).then(function(result) {
    //if (person) {
    //  // Filter data, keeping only the one person we want
    //  result.view.remove('source_0', d => d.person != person).run();
    //}
  }).catch(console.error);;
}
