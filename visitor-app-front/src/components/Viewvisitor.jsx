import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navvisitor from './Navvisitor'

const Viewvisitor = () => {
    const [views, changeViews] = useState(
        []
    )

    const [isLoading, changeLoading] = useState(true)

    const fetchData = () => {
        axios.post("http://localhost:4000/viewall")
            .then(
                (response) => {
                    changeLoading(false)
                    console.log(response.data)
                    changeViews(response.data)
                })
            .catch()
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Navvisitor />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1 align="center">VIEW ALL VISITORS</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col">Visitor Name</th>
                                                <th scope="col">Purpose</th>
                                                <th scope="col">Whom To Meet</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Check-In-Time</th>
                                                <th scope="col">Check-Out-Time</th>
                                            </tr>
                                        </thead>

                                        {isLoading ? (
                                            <div class="d-flex justify-content-center align-items-center vh-100">
                                                <div class="spinner-border text-primary" style={{ width: "4rem", height: "4rem", role: "status" }}>
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <p class="mt-3 fs-5 text-dark fw-semibold">Please Wait...</p>
                                            </div>
                                        ) : (
                                            <tbody>

                                                {views.map(
                                                    (value, index) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.visitorName}</td>
                                                                <td>{value.purpose}</td>
                                                                <td>{value.whomToMeet}</td>
                                                                <td>{value.date}</td>
                                                                <td>{value.checkInTime}</td>
                                                                <td>{value.checkOutTime}</td>
                                                            </tr>
                                                        )
                                                    }
                                                )}

                                            </tbody>
                                        )}

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewvisitor