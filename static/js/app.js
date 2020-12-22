
function buildChart() {
    d3.json("data/samples.json").then((importedData) => {
        console.log(importedData)

        var data = importedData
        
        var sample_value = data["sample_values"];
        var top10_sample_values = sample_value.slice(0,10).reverse();
        var otu_ids = data["otu_ids"];
        var top10_otu_ids = otu_ids.slice(0,10).reverse();
        var text = data["otu_labels"];

        var trace1 = {
            values: top10_sample_values,
            labels: top10_otu_ids,
            hovertext: text,
            type: "bar",
            orientation: "h",
        };
        var trace2 = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            marker: {
                size: sample_value,
                color: otu_ids,
                },
            text: text,
            type: 'scatter',
        };
          
        // data
        var chartData = [trace1];
        var chartData2 = [trace2];

    // Apply the group bar mode to the layout
        var layout = {
            title: "Belly Button Diversity Bar Chart",
            margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
          },
        };
        var layout2 = {
            title: "Belly Button Diversity Bubble Chart",
            showlegend: false,
            height: 600,
            width: 600,
    }
    

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
    Plotly.newPlot("bubble", chartData2, layout2);
});

buildChart();
};


function init() {
    var dropdown = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
};
