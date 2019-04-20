---
layout: post
title:  "Dashboarding My Blog with Google Analytics and Data Studio"
date:   2019-03-27
excerpt: "Google Analytics + Data Studio = Beautiful Dashboard for Web Analytics"
project: true
tag:
- dashboard 
- google analytics
- data studio
- web analytics
comments: true
---

{% capture images %}

        https://i.imgur.com/UhM6r5Tl.png
        https://i.imgur.com/uiDGy5Xl.png

{% endcapture %}
{% include gallery images=images caption="dashboard snapshot for my blog" cols=2 %}

---
     
Another fun thing that we could do with our blog is to track its web metrics so that we could understand better who's viewing our blog, where they come from and how long they spend on the website etc. <a href="https://analytics.google.com/analytics/web/"><b>Google Analytics</b></a> has made this super easy. If you are also using Github Pages and Jekyll to build your website, you could follow this <a href="https://desiredpersona.com/google-analytics-jekyll/"><b>great article</b></a>to generate Google Analytics tracking code and add it to your website so that you could start tracking different web metrics.

While Google Analytics tracks a wide range of web metrics and already have some really nice visualizations in place, you may still want to build your own customized dashboard to only track certain metrics that you really care about. This is when another Google product <a href="https://datastudio.google.com/"><b>Data Studio</b></a> come into the picture. Data Studio is a very user-friendly data visualization tool that could import different data sources to create beautiful dashboard. Since Google Analytics naturally integrate with Data Studio, importing data from Gogole Analytics to Data Studio is just effortless, it literally requires a few clicks. Below is the dashboard that I created for this blog:

<iframe width="650" height="600" src="https://datastudio.google.com/embed/reporting/10jN5MHyAf7wXaAcwEGdHXvMyxybv8ivJ/page/8Ifn" frameborder="0" align="middle" style="border:0" allowfullscreen></iframe>




  
      



