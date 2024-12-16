import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/auth/login", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(formData), 
            });

            const result = await response.json();

            if (response.ok){
                alert('User Logged In succesfully!');
                setFormData({email: "", password: ""});
                console.log('userId:', result.data[0].userId);
                localStorage.setItem('authToken', result.token);
                navigate('/');
            }else {
                alert(result.message || "Login failed");
            }
        }catch (error) {
            console.error("Error loging up:", error);
        }
    };

    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Enter</button>
            </form>
        </div>
    );
};

export default LogIn;