import React, { use, useEffect, useState } from 'react';
// import { data, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';

const MyListing = () => {
    const { user } = use(AuthContext)
    // const myPostData = useLoaderData();
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/myPost/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/myPost/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }

    return (

        <div className="lg:mt-12 mt-18 mb-20">
            {/* <h1 className='text-center text-2xl'>{users.length}</h1> */}
            <div className="overflow-x-auto w-full">
                <table className="table table-fixed w-full min-w-[800px]">
                    <thead>
                        <tr>
                            <th className="w-1/6 text-xl">Location</th>
                            <th className="w-1/6 text-xl">Rent</th>
                            <th className="w-1/6 text-xl">Room Type</th>
                            <th className="w-1/6 text-xl">Availability</th>
                            <th className="w-1/6 text-xl">Lifestyle</th>
                            <th className="w-1/6 text-xl">Contact Info
                            </th>
                            <th className="w-1/6 text-xl text-center pr-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((myPostData) => (
                            <tr key={myPostData?._id}>
                                <td>{myPostData?.location}</td>
                                <td>{myPostData?.rent}</td>
                                <td>{myPostData?.roomType}</td>
                                <td>{myPostData?.availability}</td>
                                <td>{myPostData?.lifestyle}</td>
                                <td>{myPostData?.contact}</td>
                                <td className="text-right pr-4 gap-2 lg:flex ">

                                    <button
                                        className="btn bg-blue-700 text-white ">
                                        Update</button>
                                    <button onClick={() => handleDelete(myPostData._id)}
                                        className="btn bg-red-700 text-white ">
                                        Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListing;   