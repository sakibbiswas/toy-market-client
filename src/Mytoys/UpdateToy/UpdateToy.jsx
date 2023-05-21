import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const updateToy = useLoaderData();
    const { Name, Available_Quantity, Seller, Rating, price, email, description, img, _id } = updateToy;
    const { user } = useContext(Authcontext)
    const handelUpdateToy = event => {
        event.preventDefault();
        const Name = form.Name.value;
        const Available_Quantity = form.Available_Quantity.value;
        const Seller = form.Seller.value;
        const price = form.price.value;
        const Rating = form.Rating.value;
        const email = user?.email;
        const description = form.description.value;
        const img = form.img.value;
        const updateToy = { Name, Available_Quantity, Rating, Seller, price, email, description, img };
        // send data to server
        fetch(`https://toy-marketplace-server-ruby.vercel.app/toy/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateToy),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="bg-sky-300 p-24" data-aos="fade-up"
            data-aos-duration="3000">

            <h2 className='text-3xl text-red-500 font-bold text-center'>Update a Toy</h2>
            <form onSubmit={handelUpdateToy}>


                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800"> Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Name' defaultValue={Name} placeholder="Products-Name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Available-quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Available_Quantity' defaultValue={Available_Quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Seller</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Seller' defaultValue={Seller} placeholder="Toy seller name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>




                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" defaultValue={user?.email} name='email' placeholder="Seller email" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='description' defaultValue={description} placeholder="Toy-Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex  mb-6 '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={Rating} name='Rating' placeholder="Rating" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Photo url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img' defaultValue={img} placeholder="Toy-URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Update a Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateToy;