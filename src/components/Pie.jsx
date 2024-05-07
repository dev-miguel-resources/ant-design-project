import React from 'react'
import { Pie } from '@ant-design/plots'
import players from '../players.json'

const ChartPie = () => {
  const chileanNacionality = players.filter((u) => u.nationality === 'Chilean')
  const englishNacionality = players.filter((u) => u.nationality === 'English')
  const othersNacionality = players.filter(
    (u) => u.nationality !== 'Chilean' && u.nationality !== 'English',
  )
  console.log(othersNacionality)
  const data = [
    {
      type: 'Chilean',
      value: chileanNacionality.length,
    },
    {
      type: 'English',
      value: englishNacionality.length,
    },

    {
      type: 'Others',
      value: othersNacionality.length,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  }
  return (
    <div>
      <Pie {...config} />;
    </div>
  )
}

export default ChartPie
