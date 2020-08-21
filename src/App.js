import React from 'react';
import logo from './logo.svg';
import './App.css';
// import LineChartComp from './components/LineChartComp'
import PositiveIncreaseChart from './components/PositiveIncreaseChart'
import PosIncGAChart from './components/PosIncGAChart'

function App() {
  return (
    <div className="App">
      <PositiveIncreaseChart />
      <PosIncGAChart />
    </div>
  );
}

export default App;
