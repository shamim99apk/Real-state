import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RealState from './RealState';
import { Link } from 'react-router-dom';

const options = {
    method: 'GET',
    url: 'https://real-estate12.p.rapidapi.com/listings/sale',
    params: {
        state: 'CA',
        city: 'Los Angeles',
        page: '1',
        sort: 'relevant',
        type: 'single-family,multi-family',
    },
    headers: {
        'X-RapidAPI-Key': 'c9a0ab8968msh1e56481feab0730p1b8d5cjsn51683338778d',
        'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com',
    },
};
const Test = () => {
    const [realStateList, setRealStateList] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                setRealStateList(response.data.properties);
                setLoading(true);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);
    console.log(realStateList);

    return (
        <div>
            {loading === true &&
                realStateList &&
                realStateList.map((item) => {
                    return <RealState key={item.id} {...item} />;
                })}
        </div>
    );
};

export default Test;
