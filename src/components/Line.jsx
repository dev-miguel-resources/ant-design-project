import React from 'react'
import { Column } from '@ant-design/plots'

const ChartLine = () => {
  const data = [
    {
      month: 'January',
      goals: 38,
    },
    {
      month: 'February',
      goals: 52,
    },
    {
      month: 'March',
      goals: 61,
    },
    {
      month: 'April',
      goals: 145,
    },
    {
      month: 'May',
      goals: 48,
    },
    {
      month: 'June',
      goals: 38,
    },
  ]
  const config = {
    data,
    xField: 'month',
    yField: 'goals',
    label: {
      position: 'middle', // perteneciente a versiones 1.x y 2.x
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
        //textAlign: 'center', // Establece la alineación del texto en el centro
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      months: {
        alias: 'Month',
      },
      goals: {
        alias: 'Goals Count',
      },
    },
    seriesField: 'month', // Campo que determina las series
    color: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF69B4'], // Paleta de colores
  }
  return <Column {...config} />
}

export default ChartLine
