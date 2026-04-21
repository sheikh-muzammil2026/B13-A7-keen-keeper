import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimeLineContext } from '../Context/TimeLineContext';

const Stats = () => {
 const {timeLine} = useContext(TimeLineContext);
        // console.log(timeLine, setTimeLine, "from stats page");

        const allTextCount = timeLine.filter(item=> item.action === "Text").length;
        const allCallCount = timeLine.filter(item=> item.action === "Call").length;
        const allVideoCount = timeLine.filter(item=> item.action === "Video").length;

        // console.log(allTextCount, allCallCount, allVideoCount);

    const data = [
        { name: 'Call', value: allCallCount, fill: '#1F2937'},
        { name: 'Text', value: allTextCount, fill: 'green'},
        { name: 'Video', value: allVideoCount, fill: 'blue'}
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
  
            </div>
        </div>
    );
};

export default Stats;

/**
 * 1. timeline context ke stats e niye asbo 
 * 2. distracture kore sekhan theke type koyta ache tar lenght ber korbo. type
 * */ 