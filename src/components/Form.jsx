import React, { useEffect, useState } from "react"
import View from "./View"
import './Form.css'

function Form() {
    const [user, setUser] = useState({})
    const [list, setList] = useState([])
    const [hobby, setHobby] = useState([])
    const [error, setError] = useState({})
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        let oldList = JSON.parse(localStorage.getItem("list")) || []
        setList(oldList)
    }, [])

    const handleChange = (e) => {
        let { name, value, checked } = e.target

        if (name == "hobby") {
            let newHobby = [...hobby]
            if (checked) {
                newHobby.push(value)
            } else {
                newHobby = newHobby.filter((val) => val != value)
            }
            console.log(newHobby)
            setHobby(newHobby)
            value = newHobby
        }
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validation()) return
        let newList =[]
        if(editId == null){
            newList = [...list, { ...user, id: Date.now() }]
        }else{
            newList = list.map((item) => {
                if(item.id == editId){
                    item = user
                }
                return item
        })
        setEditId(null)
        }
        localStorage.setItem('list', JSON.stringify(newList))
        setList(newList)
        setUser({})
        setHobby([])
    }

    const validation = () => {
        let tempError = {}
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!user.username) tempError.username = 'Username is required'
        if (!user.email) tempError.email = 'Email is required'
        if (!user.password) {
            tempError.password = 'Password is required'
        } else if (user.username && !pattern.test(user.password)) {
            tempError.password = "Password is invalid. It must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
        }
        if (!user.phone) tempError.phone = 'Phone Number is required'
        if (!user.hobby) tempError.hobby = 'Hobby is required'
        if (!user.gender) tempError.gender = 'Gender is required'
        if (!user.address) tempError.address = 'Address is required'
        if (!user.city) tempError.city = 'City is required'

        setError(tempError)
        return Object.keys(tempError).length === 0
    }

    const handleDelete =(id)=>{
        let newList = [...list]
        newList = newList.filter((user)=>user.id != id)
        localStorage.setItem('list',JSON.stringify(newList))
        setList(newList)
    }

    const handleEdit = (id) =>{
        let newList = [...list]
        let user = newList.filter((user)=>user.id==id)[0]
        setUser(user)
        setHobby(user.hobby)
        setEditId(user.id)
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <form className='w-50 bg-transparent px-5 rounded-5 py-3 shadow-lg mt-3 fs-5 text-white' method="post" onSubmit={handleSubmit}>
                        <h1 className="text-center">Sign Up</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="form-control bg-transparent text-white fs-5 shadow"
                                id="exampleInputUsername1"
                                name="username"
                                value={user.username || ""}
                                onChange={handleChange}
                            />
                            {error.username && (
                                <div className="text-danger">{error.username}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control bg-transparent text-white fs-5 shadow"
                                id="exampleInputEmail1"
                                name="email"
                                value={user.email || ""}
                                onChange={handleChange}
                            />
                            {error.email && <div className="text-danger">{error.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control bg-transparent text-white fs-5 shadow"
                                id="exampleInputPassword1"
                                name="password"
                                value={user.password || ""}
                                onChange={handleChange}
                            />
                            {error.password && (
                                <div className="text-danger">{error.password}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                className="form-control bg-transparent text-white fs-5 shadow"
                                id="exampleInputPhone"
                                name="phone"
                                value={user.phone || ""}
                                onChange={handleChange}
                            />
                            {error.phone && <div className="text-danger">{error.phone}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputHobby" className="form-label">
                                Hobby
                            </label>
                            <div className="d-flex align-items-center">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input bg-transparent text-white  fs-5 shadow"
                                        id="exampleInputHobby"
                                        name="hobby"
                                        value="dance"
                                        checked={hobby.includes("dance") ? true : false}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Dance
                                    </label>
                                </div>
                                <div className="form-check ms-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input bg-transparent text-white fs-5 shadow"
                                        id="exampleInputDance"
                                        name="hobby"
                                        value="reading"
                                        checked={hobby.includes("reading") ? true : false}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Reading
                                    </label>
                                </div>
                            </div>
                            {error.hobby && <div className="text-danger">{error.hobby}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputGender" className="form-label">
                                Gender
                            </label>
                            <div className="d-flex align-items-center">
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input bg-transparent text-white fs-5 shadow"
                                        id="exampleInputMale"
                                        name="gender"
                                        value="male"
                                        checked={user.gender === "male" ? true : false}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check ms-3">
                                    <input
                                        type="radio"
                                        className="form-check-input bg-transparent text-white fs-5 shadow"
                                        id="exampleInputFemale"
                                        name="gender"
                                        value="female"
                                        checked={user.gender === "female" ? true : false}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Female
                                    </label>
                                </div>
                            </div>
                            {error.gender && <div className="text-danger">{error.gender}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputAddress" className="form-label">
                                Address
                            </label>
                            <textarea
                                placeholder="Address"
                                className="form-control bg-transparent text-white fs-5 shadow"
                                id="exampleInputAddress"
                                name="address"
                                value={user.address || ""}
                                onChange={handleChange}
                            />
                             {error.address && <div className="text-danger">{error.address}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputCity" className="form-label">
                                City
                            </label>
                            <select
                                name="city"
                                id="exampleInputCity"
                                defaultValue=""
                                className="form-select bg-transparent text-white fs-5 shadow"
                                onChange={handleChange}
                            >
                                <option disabled selected value="">
                                    --Select-City--
                                </option>
                                {[
                                    "New York",
                                    "Los Angeles",
                                    "Chicago",
                                    "Houston",
                                    "Phoenix",
                                    "Philadelphia",
                                    "San Antonio",
                                    "San Diego",
                                    "Dallas",
                                    "San Jose",
                                ].map((city, index) => (
                                    <option
                                        selected={user.city == city ? true : false}
                                        key={index}
                                        value={city}
                                    >
                                        {" "}
                                        {city}{" "}
                                    </option>
                                ))}
                            </select>
                            {error.city && <div className="text-danger">{error.city}</div>}
                        </div>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-outline-light fs-5 px-5 py-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <View list={list} handleDelete={handleDelete} handleEdit={handleEdit} />
            </div>
        </>
    )
}

export default Form