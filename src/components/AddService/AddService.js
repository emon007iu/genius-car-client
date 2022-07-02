import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    
    console.log(data)
    const url = `http://localhost:5000/service`
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
};

  return (
    <div className="bg-slate-300 pb-8 pt-8">
        <div className=" w-7/12 mx-auto shadow-2xl ">
      <h2 className="text-center font-bold text-4xl py-10">
        Please add a new service
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-7 py-8">
        <input className="mb-4 px-3 py-2 border-gray-800  rounded-sm" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
        <textarea className="mb-4 px-3 py-2 border-gray-800 h-20 rounded-sm" placeholder="Description" {...register("description")} />
        <input className="mb-4 px-3 py-2 border-gray-800 h-10 rounded-sm" placeholder="Price" type="number" {...register("price")} />
        <input className="mb-4 px-3 py-2 border-gray-800 h-10 rounded-sm" placeholder="Photo URL" type="text" {...register("img")} />
        <input className="mb-4 px-3 py-2 cursor-pointer bg-green-200 border-gray-800 h-10 rounded-sm" type="submit" value="Add Service" />
      </form>
    </div>
    </div>
  );
};

export default AddService;
