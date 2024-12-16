import React, {useState } from 'react';

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: "",
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
            const response = await fetch("http://localhost:5000/auth/signin", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(formData), 
            });

            const result = await response.json();

            if (response.ok){
                alert('User registered succesfully!');
                setFormData({name: "", email: "", password: ""});
            }else {
                alert(result.message || "Registration failed");
            }
        }catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div>
            <h2 class="mb-4">Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                <label class="form-label">Name:</label>
                <input
                    class="form-control"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>
                <div class="mb-3">
                <label class="form-label">Email:</label>
                <input
                    class="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div class="mb-3">
                <label class="form-label">Password:</label>
                <input
                    class="form-control"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignIn;