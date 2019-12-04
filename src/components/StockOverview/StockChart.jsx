import React, { useState, useEffect} from 'reactn'
import { Container } from 'semantic-ui-react'
import {Line} from 'react-chartjs-2';

const StockChart = props => {
  const [chartData, setChartData] = useState([]);
  const [chartVolume, setChartVolume] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [activeColor, setActiveColor] = useState("");

  useEffect(() => {
    const chartDataTem = [];
    const chartVolumeTem = [];
    const chartLabelsTem = [];

    props.chartData.forEach(el => {
      chartDataTem.push(el.close);
      chartLabelsTem.push(el.label);
      chartVolumeTem.push(el.volume);
    });

    setChartVolume(chartVolumeTem);
    setChartData(chartDataTem);
    setChartLabels(chartLabelsTem);

    if(chartDataTem[0] < chartDataTem[chartDataTem.length - 1]) {
      setActiveColor("rgba(69, 255, 100, 1)")
    } else {
      setActiveColor("rgba(255, 23, 23, 1)")
    }

  }, [props.chartData])

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: '1m Performance',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: activeColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: activeColor,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: activeColor,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData
      },
    ]
  };

  return (
    <Container>
        <Line data={data}/>
    </Container>
  )
}

export default StockChart;
