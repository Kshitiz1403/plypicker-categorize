import axios from "axios";
import React, { useState } from "react";
import { SERVER_URL } from "../App";

const Categories = () => {
    const create = (name, image) => {
        axios.post(`${SERVER_URL}/category/create`, {
            name,
            category_image: image
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }
    const [name, setName] = useState('')
    const [imageURI, setImageURI] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        create(name, imageURI)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center', flexDirection: 'column' }}>
            <div>
                Create a category
            </div>
            <div>
                <form action="" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" autoComplete="off" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="image">image</label>
                        <input type="text" autoComplete="off" name="image" id="image" value={imageURI} onChange={(e) => setImageURI(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div></div>
        </div>);
};

export default Categories;
