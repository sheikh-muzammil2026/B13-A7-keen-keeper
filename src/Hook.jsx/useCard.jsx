import React, { useEffect, useState } from 'react';

const useCard = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {

        const friendsData = async () => {

            try {
               
                const res = await fetch('/friends.json');
                const data = await res.json();

                setData(data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

        friendsData();

    }, []);

    return { data, loading };
};

export default useCard;

