import React from 'react'
import Feature from '../../Components/features/Feature'
import Chart from '../../Components/chart/Chart'
import WidgetSm from '../../Components/widgetSm/WidgetSm'
import WidgetLg from '../../Components/widgetLg/WidgetLg'
import { xAxisData } from '../../datas'
import './Home.css'
export default function Home() {
  return (
    <div className='home'>
      <Feature />
      <Chart grid title="فروش ماهانه" data={xAxisData} dataKey="sale" />
      <div className="homeWidgest">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
