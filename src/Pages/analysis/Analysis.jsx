import React from 'react'
import AnalysisBox from '../../Components/analysisBox/AnalysisBox'
import './Analysis.css'
import { xAxisData } from '../../datas'
import SimpleBarChart from '../../Components/SimpleBarChart/SimpleBarChart'

export default function Analysis() {
  return (
    <div className='analysis'>
        <AnalysisBox/>
        <SimpleBarChart grid title="فعالیت " data={xAxisData} dataKey="sale" />
    </div>
  )
}
