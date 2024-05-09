import React from 'react'
import ChartPie from './components/Pie'
import ChartLine from './components/Line'

function App() {
  return (
    <div className="App">
      <h2>Ant Design Charts 1.4.2 to 2.1.1</h2>
      <div>
        <ChartPie />;
        <ChartLine />;
      </div>
    </div>
  )
}

export default App
