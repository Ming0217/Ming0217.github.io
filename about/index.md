---
layout: page
title: About Me
tags: [about]
date: 2019-02-17
comments: false
---
    
***Professionally, I aspire to be a triple threat person:*** `get-things-done engineer`; `practical and empathetic product shaper`; `long-term strategic thinker`

***Privately, I try to*** `read` ***as much as I could; play*** `basektball`; ***follow*** `San Antonio Spurs` ***and*** `Shantou University Transformers Basketball Team`

### My Skill Sets

<html>
<head>
	<title>My first chart using FusionCharts Suite XT</title>
	<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
	<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
	<script type="text/javascript">
		FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'radar',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store rating across parameters",
            "subCaption": "Based on customer feedback survey",
            "numberPreffix": "$",
            "theme": "fusion",
            "radarfillcolor": "#ffffff",
        },
        "categories": [{
            "category": [{
                "label": "Ambience"
            }, {
                "label": "Product Assortment"
            }, {
                "label": "Price Competitiveness"
            }, {
                "label": "Service"
            }, {
                "label": "Recommend to others"
            }]
        }],
        "dataset": [{
            "seriesname": "User Ratings",
            "data": [{
                "value": "3.5"
            }, {
                "value": "4.8"
            }, {
                "value": "3.1"
            }, {
                "value": "4.0"
            }, {
                "value": "3.6"
            }]
        }]
    }
}
);
			chartObj.render();
		});
	</script>
	</head>
	<body>
		<div id="chart-container">FusionCharts XT will load here!</div>
	</body>
</html>
