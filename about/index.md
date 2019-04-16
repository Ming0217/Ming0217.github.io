
    
***Professionally, I aspire to be a triple threat person:*** `get-things-done engineer`; `practical and empathetic product shaper`; `long-term strategic thinker`

***Privately, I try to*** `read` ***as much as I could; play*** `basektball`; ***follow*** `San Antonio Spurs` ***and*** `Shantou University Transformers Basketball Team`

<div class="container">
    <div class="row">
        <div class="col-lg-12 text-center" id="i18_skills">
            <div class="navy-line"></div>
            <h1><span data-i18n="skills.my_skills">My Skills</span></h1>
        </div>
    </div>
    <div class="row features-block">
        <div class="wow zoomIn col-lg-6 col-lg-offset-3">
            <canvas id="{{ site.data.skills.id }}" height="500" width="500"></canvas>
        </div>
        <div class="col-lg-1"></div>
        <script>
        var ctx = document.getElementById("{{ site.data.skills.id }}");
        var data = {
            labels: "{{ site.data.skills.aspects }}".split(","),
            datasets: [{
                label: "{{ site.data.skills.label }}",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "#3385FF",
                pointBackgroundColor: "#3385FF",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#3385FF",
                pointHoverBorderColor: "#3385FF",
                data: [{{ site.data.skills.percentage }}]
                }]
        };
        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scale: {
                    responsive: true,
                    ticks: {min: 0, max: 100},
                    lineArc: false,
                    pointLabels: {fontSize: 14},
                },
                legend: {display: false},
            }
        });
        </script>
    </div>
</div>
