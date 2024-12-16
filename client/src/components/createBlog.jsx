import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authToken = localStorage.getItem('authToken');
        console.log(authToken);

        try {
            const response = await fetch("http://localhost:5000/blog", {
               method: "POST",
               headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
                },
               body: JSON.stringify(formData), 
            });

            const result = await response.json();

            if (response.ok){
                alert('Blog created succesfully!');
                setFormData({title: "", content: ""});
                console.log('hola');
                navigate('/');
            }else {
                alert(result.message || "Posting failed");
            }
        }catch (error) {
            console.error("Error posting up:", error);
        }
    };

    return (
        <div>
            <h2>Post</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Title:</label>
                    <input
                        class="form-control"
                        type="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="mb-3">
                <label class="form-label">Content:</label>
                <input
                    class="form-control"
                    type="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Enter</button>
            </form>
        </div>
    );
};

export default CreateBlog;