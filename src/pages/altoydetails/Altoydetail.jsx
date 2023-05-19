import React from 'react';
import { Link } from 'react-router-dom';

const Altoydetail = ({ toy }) => {
    const { Name, Seller, img, Available_Quantity, price, subtoy, _id } = toy;
    console.log(toy);
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
            <td>
                {
                    subtoy.map(sub => <p>
                        {sub.name}
                    </p>)
                }
            </td>
            <th>
                <Link to={`/toysdetail/${_id}`}> <button className="btn btn-ghost btn-xs">View details</button></Link>
            </th>
        </tr>

    );
};

export default Altoydetail;