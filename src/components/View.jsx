import React from "react";

function View({ list, handleDelete, handleEdit }) {
  return (
    <>
      <table className="table caption-top shadow-lg fs-5 text-center">
        <caption>
          <h2 className=" text-center text-dark mt-4">User Data</h2>
        </caption>
        <thead>
          <tr>
            <th scope="col" className="bg-transparent text-white py-3 px-4">SrNo.</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Username</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Email</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Password</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Phone</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Gender</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Address</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">City</th>
            <th scope="col" className="bg-transparent text-white py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((user, index) => (
              <tr key={index}>
                <td scope="row" className="bg-transparent text-white border-0 py-3 px-4">{index + 1}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.username}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.email}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.password}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.phone}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.gender}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.address}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">{user.city}</td>
                <td className="bg-transparent text-white border-0 py-3 px-4">
                  <button
                    className="btn btn-danger mb-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-warning" onClick={() => handleEdit(user.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th scope="row" colSpan="9" className="text-center">
                Data Not Found.
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default View;