import React from 'react';
import LineChartComp from './LineChartComp.js';

class PositiveIncreaseChart extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.covidtracking.com/api/us/daily", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({labels: result.map(item=>item.dateChecked).reverse()});
                this.setState({data: result.map(item=>item.positiveIncrease).reverse()});
                // console.log(result.map(item=>item.positiveIncrease))
            })
            .catch(error => console.log('error', error));
      }

      buildChart() {
        return (<LineChartComp labels={this.state.labels} data={this.state.data}/>)
      }

      render() {
          return(
              <>
              <h2>US Daily Positive COVID-19 Increase</h2>
                {this.state && this.state.labels && this.state.data && this.buildChart(this.state.labels, this.state.data)}
              </>
          )
      }
}

export default PositiveIncreaseChart;