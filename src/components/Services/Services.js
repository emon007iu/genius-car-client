import { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="px-2 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="py-10 text-4xl font-bold text-center">
          Our Services: ({services.length})
        </h2>

        <div className="grid gap-2 single-services xl:grid-cols-3 md:grid-cols-2 ">
          {services.map((singleService) => (
            <SingleService
              key={singleService._id}
              singleService={singleService}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
