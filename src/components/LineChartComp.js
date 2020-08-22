import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';
import 'chartjs-plugin-trendline';

function chartData(labs, data) {
  return {
    labels: labs,
    datasets: [
      {
        label: 'Daily Positive Increase',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: data,
        trendlineLinear: {
            style: "rgba(255,105,180, .8)",
            lineStyle: "dotted|solid",
            width: 2
        }
      },
    ]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
trendlineLinear: {
    style: "rgba(255,105,180, .8)",
    lineStyle: "dotted|solid",
    width: 2
}
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }
}

class LineChartComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      labels: this.props.labels,
      data: this.props.data
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      console.log("Did update")
      this.setState({labls:this.props.labels , data: this.props.data})
    }
  }

  buildChart(labs, data) {
    return (<div style={styles.graphContainer}>
        <LineChart data={chartData(labs, data)}
          options={options}
          width={600} height={250}/>
      </div>)
  }

  render() {
    return (
        <div>
      {this.state && this.state.labels && this.state.data && this.buildChart(this.state.labels, this.state.data)}
      </div>
    )
  }
}

export default LineChartComp;