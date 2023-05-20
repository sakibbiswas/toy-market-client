import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Authcontext } from '../provider/Authprovider';
import useTitle from '../components/Hooks/Usetitle';

const Addtoy = () => {
    useTitle('AddToy')
    const { user } = useContext(Authcontext)
    const handelAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.Name.value;
        const Available_Quantity = form.Available_Quantity.value;
        const Seller = form.Seller.value;
        const price = form.price.value;
        const Rating = form.Rating.value;
        const email = user?.email;
        const description = form.description.value;
        const img = form.img.value;
        const NewToy = { Name, Available_Quantity, Rating, Seller, price, email, description, img };
        console.log(NewToy);
        // send data to server
        fetch(`http://localhost:4000/toy?email=${user.email}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NewToy),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-sky-300 p-24">

            <h2 className='text-3xl text-red-500 font-bold text-center'>Add a Toy</h2>
            <form onSubmit={handelAddToy}>


                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800"> Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Name' placeholder="Products-Name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Available_Quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Seller</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Seller' placeholder="Toy seller name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
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

                            <input type="text" name='description' placeholder="Toy-Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex  mb-6 '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Rating' placeholder="Rating" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text font-bold text-slate-800">Photo url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img' placeholder="Toy-URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="ADD a Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default Addtoy;