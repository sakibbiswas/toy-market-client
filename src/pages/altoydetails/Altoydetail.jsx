import React from 'react';
import { Link } from 'react-router-dom';

const Altoydetail = ({ Toy }) => {
    const { Name, Seller, img, Available_Quantity, price, _id } = Toy;
    // console.log(toy);
    return (

        <tr>
            <th>
                {Seller}
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
            <td>{Available_Quantity}</td>
            <td>{price}</td>

            <th>
                <Link to={`/toysdetail/${_id}`}> <button className="btn btn-xs btn-info">View details</button></Link>
            </th>
        </tr>

    );
};

export default Altoydetail;