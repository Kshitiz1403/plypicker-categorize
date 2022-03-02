import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../App";

const SubCategories = () => {
    const create = (name, image, category) => {
        axios.post(`${SERVER_URL}/subcategory/create`, {
            Sub_Category_name: name,
            Sub_Category_image: image,
            Category: category
        })
            .then(res => console.log(res.data))
            .catch(err => console.error({ err }))
    }

    const getCategories = () => {
        axios.get(`${SERVER_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getCategories()
    }, [])


    const [name, setName] = useState('')
    const [imageURI, setImageURI] = useState('')
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        create(name, imageURI, selectedCategory)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center', flexDirection: 'column' }}>
            <div>
                Create a subcategory
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
                    <select onChange={(e) => {
                        setSelectedCategory(e.target.value)
                    }}>
                        <option value={0}>--Select a category--</option>
                        {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>

            </div>
        </div>);
};

export default SubCategories;
