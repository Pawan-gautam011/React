import React, { useEffect, useState } from 'react';

const Api = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div>
                <div style={{background:"Red"}}>
                    {records.map((item) => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Api;
