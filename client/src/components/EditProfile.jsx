import React, {useState, useEffect} from 'react';

const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });
    
    useEffect(()=> {
        const fetchUserData = async () =>{
            const authToken = localStorage.getItem('authToken');
            console.log(authToken);
            console.log('benny and the jets');
            try {
                const response = await fetch("http://localhost:5000/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken}`,
                    },
                });
                
                const result = await response.json();
                console.log(result)
                
                if (result.success === true){
                    console.log('here we r')
                    console.log(result.data)
                    console.log(result.data[0].name)
                    setFormData({name: result.data[0].name, password: result.data[0].password});
                }else {
                    alert(result.message.message || "Session experied");
                }
            }catch (error) {
                console.error("Error editing user:", error);
            }
        };
        fetchUserData(); 
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/user", {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(formData), 
            });

            const result = await response.json();

            if (response.ok){
                alert('User Logged In succesfully!');
                setFormData({name: "", password: ""});
            }else {
                alert(result.message || "Login failed");
            }
        }catch (error) {
            console.error("Error loging up:", error);
        }
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input
                    type="name"
                    name="name"
                    value={formData.name}
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditProfile;