import React, { useState } from 'react';
import axios from 'axios';
import "./Image.css"

const UploadImage = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            await axios.post('http://127.0.0.1:12345/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Image uploaded successfully.');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <>
            <div className="cap"></div>
            <div className="upload-container">
                <h2>Upload Image</h2>
                <input type="file" id='imgUpload' onChange={handleFileChange} hidden />
                <label htmlFor="imgUpload" className='ulbl'>Choose Image</label>
                <button className="upload-button" onClick={handleSubmit}>Upload</button>
            </div>
        </>
    );
};

export default UploadImage;
