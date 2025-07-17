import axios from 'axios'
import React, { useState } from 'react'
import Navvisitor from './Navvisitor'

const Addvisitor = () => {
    const [input, changeInput] = useState({
        visitorName: "",
        purpose: "",
        whomToMeet: "",
        date: "",
        checkInTime: "",
        checkOutTime: ""
    })


    const inputHandler = (e) => {
        changeInput({ ...input, [e.target.name]: e.target.value })
    }

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:4000/addvisitor", input)
            .then(
                (response) => {
                    alert("Successfully added")
                }
            ).catch()
    }

    return (
        <div>
            <Navvisitor />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1 align="center" className='text-primary'>WELCOME TO THE VISITORS LOG</h1>
                        <h3 align="center" className='text-primary'>Enter Visitor Details</h3>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='visitorName' value={input.visitorName} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Purpose</label>
                                <input type="text" className="form-control" name='purpose' value={input.purpose} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Whom to meet</label>
                                <input type="text" className="form-control" name='whomToMeet' value={input.whomToMeet} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" className="form-control" name='date' value={input.date} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check In Time</label>
                                <input type="text" className="form-control" name='checkInTime' value={input.checkInTime} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check Out Time</label>
                                <input type="text" className="form-control" name='checkOutTime' value={input.checkOutTime} onChange={inputHandler} />
                            </div>
                            
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success center" onClick={readValues}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addvisitor