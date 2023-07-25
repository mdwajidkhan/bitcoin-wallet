import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';
import { BsFillCircleFill } from 'react-icons/bs';

const Chart = ({chartData, higher, lower}) => {   
  
  const tooltipFormatter = (value, name) => [`1 BTC = $${value}`];
  const hideXaxis = (label) => '';

  return (
    <div className='chart'>
        <div className="high-low">
            <span className='chart-label'><BsFillCircleFill style={{marginRight: '1em', fontSize: '0.5rem', color: '#ED3C5A'}}/>Lower: ${lower}</span>
            <span className='chart-label'><BsFillCircleFill style={{marginRight: '1em', fontSize: '0.5rem', color: '#57BE6D'}}/>Higher: ${higher}</span>
        </div>
        <ResponsiveContainer width="100%" height={130}>
            <AreaChart width={500} height={100} data={chartData} margin={{top: 50, right: 40, left: 0, bottom: 0}}>
      
                <XAxis dataKey="time" hide='true'/>
      
      
                <Tooltip formatter={tooltipFormatter} labelFormatter={hideXaxis} contentStyle={{fontSize: '1em', border: 0, backgroundColor: 'transparent', color: '#3A4554'}} cursor={false} position={{ x: 20, y: 90 }} separator=' = '/>
                <Area type="monotone" dataKey="price" stroke="#F29A57" strokeWidth={3} fill="#FEF7EE" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
    
  )
}

export default Chart