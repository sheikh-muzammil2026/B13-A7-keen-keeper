import React, { useContext } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimeLineContext } from '../Context/TimeLineContext';

const Stats = () => {

    const { timeLine } = useContext(TimeLineContext);

    const allTextCount = timeLine.filter(item => item.action === "Text").length;
    const allCallCount = timeLine.filter(item => item.action === "Call").length;
    const allVideoCount = timeLine.filter(item => item.action === "Video").length;

    const data = [
        { name: 'Calls', value: allCallCount, fill: '#244D3F' },
        { name: 'Texts', value: allTextCount, fill: '#3B82F6' },
        { name: 'Videos', value: allVideoCount, fill: '#F59E0B' }
    ];

    return (
        <div className='bg-[#F8FAFC] min-h-screen p-4 md:p-10 lg:p-16'>

            <div className='container mx-auto'>

                <h1 className='text-3xl md:text-5xl font-bold text-[#1F2937] text-center md:text-left'>
                    Friendship Analytics
                </h1>

                <div className='bg-base-100 shadow rounded-lg p-4 md:p-8 mt-6'>

                    <p className='text-lg md:text-xl font-medium mb-4 text-center md:text-left'>
                        Interaction Overview
                    </p>

                    {/* Responsive Chart Wrapper */}
                    <div className='w-full h-[300px] md:h-[400px]'>

                        <ResponsiveContainer width="100%" height="100%">

                            <PieChart>

                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius="60%"
                                    outerRadius="80%"
                                    paddingAngle={5}
                                    cornerRadius={6}
                                />

                                <Tooltip />
                                <Legend />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stats;

