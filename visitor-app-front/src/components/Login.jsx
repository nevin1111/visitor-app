import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [login, changeLogin] = useState(
        { username: "", password: "" }
    )

    const inputHandler = (e) => {
        changeLogin({ ...login, [e.target.name]: e.target.value })
    }

    const readValues = () => {
        console.log(login)
        if (login.username === "admin" && login.password === "12345") {
            navigate("/add")
        } else {
            alert("Invalid credentials")
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4 text-primary">LOGIN</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={login.username} onChange={inputHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={login.password} onChange={inputHandler} />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={readValues}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login