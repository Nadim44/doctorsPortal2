import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = "6c7beedd7f9685b65ac73f75ec16ccca";
    //console.log(imageHostKey)
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        //console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                //console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctors information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })

                }
            })

    }

    if (isLoading) {
        return <progress className='progress w-56'></progress>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className='form-control w-full '>
                    <label className='label'> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className='form-control w-full '>
                    <label className='label'><span className="label-text">Email</span></label>
                    <input type="email"{...register("email")} className="input input-bordered w-full " />
                </div>
                <div className='form-control w-full '>
                    <label className='label'> <span className="label-text">Speciality</span></label>
                    <select
                        {...register("specialty")}
                        className="select input-bordered w-full max-w-xs">
                        {
                            specialties.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}
                            >{speciality.name}</option>)
                        }
                    </select>
                </div>
                <div className='form-control w-full '>
                    <label className='label'> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", { required: "Photo is required" })} className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-6' value="Add Doctor" type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;