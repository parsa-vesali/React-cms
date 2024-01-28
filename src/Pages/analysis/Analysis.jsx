import React from "react";
import "./Analysis.css";
import { xAxisData } from "../../datas";
import  SimpleBarChart  from "../../Components/SimpleBarChart/SimpleBarChart";
import AnalysisBox from "../../Components/analysisBox/AnalysisBox";

export default function Analysis() {
  return (
    <div className="analysis">
      <AnalysisBox />
      <SimpleBarChart grid title="فعالیت " data={xAxisData} dataKey="sale" />
    </div>
  );
}
