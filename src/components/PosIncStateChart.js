import React from 'react';
import LineChartComp from './LineChartComp.js';

class PosIncStateChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          labels : null,
          data : null
        }

    }

    componentDidMount() {
      this.getStateData();
    }
 
    componentDidUpdate(prevProps) {
      if (prevProps.stateCode !== this.props.stateCode) {
        console.log("Did update")
        this.getStateData();
      }
    }
 
    getStateData() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      console.log("In Pos Inc State", this.props.stateCode)
      fetch("https://api.covidtracking.com/v1/states/" + this.props.stateCode + "/daily.json", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("In fetch")
            this.setState({labels: result.map(item=>item.dateChecked).reverse()});
            this.setState({data: result.map(item=>item.positiveIncrease).reverse()}, () => {console.log(this.state.data)});
            // console.log(result.map(item=>item.positiveIncrease))
        })
        .catch(error => console.log('error', error));
    }


      buildChart(labels, data) {
        return (<LineChartComp labels={labels} data={data}/>)
      }

      render() {
          return(
              <>
              <h2> {this.props.stateCode.toUpperCase()} Daily Positive COVID-19 Increase</h2>
                {this.state && this.state.labels && this.state.data && <LineChartComp labels={this.state.labels} data={this.state.data}/>}
              </>
          )
      }
}

export default PosIncStateChart;