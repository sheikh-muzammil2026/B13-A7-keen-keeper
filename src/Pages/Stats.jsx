import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {
    const data = [
        {
            name: '',
            value: ''
        }
    ]
    return (
        <div className='bg-[#F8FAFC] p-20'>
            <h1 className='text-[#1F2937] font-bold text-5xl'>Friendship Analytics</h1>
            <div className='shadow bg-base-100 p-5 mt-5'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
  );
            </div>
        </div>
    );
};

export default Stats;