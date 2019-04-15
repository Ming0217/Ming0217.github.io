---
layout: page
title: About Me
tags: [about]
date: 2019-02-17
comments: false
---
    
***Professionally, I aspire to be a triple threat person:*** `get-things-done engineer`; `practical and empathetic product shaper`; `long-term strategic thinker`

***Privately, I try to*** `read` ***as much as I could; play*** `basektball`; ***follow*** `San Antonio Spurs` ***and*** `Shantou University Transformers Basketball Team`


<html>
<head>
	<title>My first chart using FusionCharts Suite XT</title>
	/*
	<style>
	    body {
		text-align: justify;
	    }
	</style>
	*/
	<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
	<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
	<script type="text/javascript">
		FusionCharts.ready(function(){
			var chartObj = new FusionCharts({
    type: 'radar',
    renderAt: 'chart-container',
    width: '650',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "My Technical Skill Sets",
            "numberPreffix": "$",
            "theme": "fusion",
            "radarfillcolor": "#ffffff",
        },
        "categories": [{
            "category": [{
                "label": "Python"
            }, {
                "label": "SQL"
            }, {
                "label": "JavaScript"
            }, {
                "label": "HTML"
            }, {
                "label": "CSS"
            }, {
                "label": "Linux"
            }, {
                "label": "Excel"
            }]
        }],
        "dataset": [{
            "seriesname": "Proficiency",
            "data": [{
                "value": "4.0"
            }, {
                "value": "4.8"
            }, {
                "value": "3.0"
            }, {
                "value": "3.5"
            }, {
                "value": "3.3"
            }, {
                "value": "3.8"
            }, {
                "value": "4.9"
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
