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
        const name = form.name.value;
        const quantity = form.quantity.value;
        const Seller = form.Seller.value;
        const Price = form.Price.value;
        const email = user?.email;
        const Details = form.Details.value;
        const photo = form.url.value;
        const NewToy = { name, quantity, Seller, Price, email, Details, photo };
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
        <div className="bg-slate-300 p-24">

            <h2 className='text-3xl text-red-500 font-bold text-center'>Add a Toy</h2>
            <form onSubmit={handelAddToy}>


                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Products-Name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text">Seller</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Seller' placeholder="Toy seller name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>




                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" defaultValue={user?.email} name='email' placeholder="Seller email" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Details' placeholder="Toy-Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-8 '>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='url' placeholder=" URL of the toy" className="input input-bordered  w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="ADD a Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default Addtoy;