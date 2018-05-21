var dataBarChart = [];
var labelBarChart;
var dataPieChart = [];
var labelPieChart = [];

jQuery(document).ready(function() {

    jQuery.ajax({
        url: '../db_admin/Charts.php',
        type: 'POST',
        dataType: 'json',
        data: $(this).serialize()+ "&action=" + 'libros_suc',
    })
    .done(function(data) {
        console.log(data);
        var dataLabel = [];
        if(data!=null){
            $.each(data,function(index, val) {
            //labelBarChart += "'" + val.Sucursal + "',";
            dataLabel.push(val.Sucursal);
            dataBarChart.push(val.LibrosPrestados)
            });
            labelBarChart = dataLabel;
            //labelBarChart += "]";
        }
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
        loadCharts();
        console.log(labelBarChart);
        console.log(dataBarChart);
    });

    jQuery.ajax({
        url: '../db_admin/Charts.php',
        type: 'POST',
        dataType: 'json',
        data: $(this).serialize()+ "&action=" + 'libros_lec',
    })
    .done(function(data) {
        console.log(data);
        if(data!=null){
            $.each(data,function(index, val) {
            //labelBarChart += "'" + val.Sucursal + "',";
            labelPieChart.push(val.Lector);
            dataPieChart.push(val.Libros)
            });
            //labelBarChart += "]";
        }
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
        loadCharts();
        console.log(labelPieChart);
        console.log(dataPieChart);
    });
})

function loadCharts(){ 
    var ctx = document.getElementById("barChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            labels: [labelBarChart[0],labelBarChart[1],labelBarChart[2]],
            datasets: [{
                label: '# Libros',
                //data: [12, 19, 3],//, 5, 2, 3],
                data: [dataBarChart[0],dataBarChart[1],dataBarChart[2]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


    //pie
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            //labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            labels: [labelPieChart[0],labelPieChart[1],labelPieChart[2],labelPieChart[3],labelPieChart[4]],
            datasets: [
                {
                    //data: [300, 50, 100, 40, 120],
                    data: [dataPieChart[0],dataPieChart[1],dataPieChart[2],dataPieChart[3],dataPieChart[4]],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                }
            ]
        },
        options: {
            responsive: true
        }    
    });          
}