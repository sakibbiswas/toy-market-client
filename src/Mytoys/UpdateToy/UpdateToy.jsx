import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const updateToy = useLoaderData();
    const { name, quantity, Seller, Price, email, Details, photourl, _id } = updateToy;
    const { user } = useContext(Authcontext)
    const handelUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const Seller = form.Seller.value;
        const Price = form.Price.value;
        const email = user?.email;
        const Details = form.Details.value;
        const photourl = form.url.value;
        const updateToy = { name, quantity, Seller, Price, email, Details, photourl };
        console.log(updateToy);
        // send data to server
        fetch(`http://localhost:4000/toy/${_id}`, {
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
        <div className="bg-slate-300 p-24">

            <h2 className='text-3xl text-red-500 font-bold text-center'>Update a Toy</h2>
            <form onSubmit={handelUpdateToy}>


                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800"> Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' defaultValue={name} placeholder="Products-Name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
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

                            <input type="text" name='Price' defaultValue={Price} placeholder="Price" className="input input-bordered w-full" />
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

                            <input type="text" name='Details' defaultValue={Details} placeholder="Toy-Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-8 '>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Photo-Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='url' defaultValue={photourl} placeholder=" URL of the toy" className="input input-bordered  w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update a Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateToy;