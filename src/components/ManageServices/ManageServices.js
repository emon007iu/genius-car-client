
import useServices from './../../hooks/useServices';
const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }

    return (
        <div className='w-7/12 px-8 py-8 mx-auto mt-10 mb-10 shadow-2xl'>
            <h2 className='pt-4 pb-10 text-4xl font-bold text-center'>Manage Services</h2>
            {
                services.map(service => 
                <div className='flex items-center justify-between px-3 py-2 mb-3 rounded-sm bg-slate-200' key={service._id}>
                    <h5>{service.name} </h5>
                    <button className='px-3 py-2 bg-red-300 rounded-sm' onClick={() => handleDelete(service._id)}>X</button>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;