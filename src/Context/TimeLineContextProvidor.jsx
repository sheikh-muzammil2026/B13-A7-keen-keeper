import React, { useState } from 'react';
import { TimeLineContext } from './TimeLineContext';

const TimeLineContextProvidor = ({children}) => {
    const [timeLine, setTimeLine] = useState([]);

    return <TimeLineContext.Provider value={{timeLine, setTimeLine}}>
                {children}
    </TimeLineContext.Provider>
};

export default TimeLineContextProvidor;