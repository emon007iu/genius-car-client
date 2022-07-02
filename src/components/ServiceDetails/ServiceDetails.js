import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [service, setService] = useState({})
    console.log(service)

    useEffect(() => {
        const url =  `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))

    }, [])


    return (
        <div>
            <h2>You are about to book: {service.name} </h2>
            <h2>You are about to book: {serviceId} </h2>
        </div>
    );
};

export default ServiceDetails;