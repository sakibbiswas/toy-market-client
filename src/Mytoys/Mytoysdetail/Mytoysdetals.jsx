import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoysdetals = ({ toy, setToy, Toy }) => {
    const { Name, Seller, img, Available_Quantity, price, _id, email } = toy;

    const handeldeleteToy = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = Toy.filter(toy => toy._id !== _id)
                            setToy(remaining)
                        }
                    })
            }
        })

    }

    return (
        <tr>
            <th>
                <button onClick={() => handeldeleteToy(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {Name}


            </td>
            <td>{email}</td>
            <td>{Available_Quantity}</td>
            <td>{price}</td>
            <td>
                {Seller}
            </td>
            <th>
                <Link to={`/updatetoy/${_id}`}> <button className="btn btn-outline">Update</button></Link>
            </th>
        </tr>
    );
};

export default Mytoysdetals;