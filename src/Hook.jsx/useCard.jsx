import React, {  useEffect, useState } from 'react';


const useCard = () => {
    
    const [loading,setLoading] = useState();
    const [data, setData] = useState([]);

useEffect(()=> {

const friendsData = async () => {
        const res = await fetch('/friends.json');
        const data = await res.json();
        setData(data);
        setLoading(false)
        return data;
    }
    friendsData();
},[])

    return {data, loading};
};

export default useCard;