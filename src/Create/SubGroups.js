import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SERVER_URL } from '../App'

const SubGroups = () => {
    const create = (name, group, subcategory, category) => {
        axios.post(`${SERVER_URL}/subgroup/create`, {
            SubGroup_name: name,
            Group: group,
            Sub_Category: subcategory,
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

    const getSubCategories = () => {
        axios.get(`${SERVER_URL}/subcategories`)
            .then(res => setSubCategories(res.data))
            .catch(err => console.error(err))
    }

    const getGroups = () => {
        axios.get(`${SERVER_URL}/groups`)
            .then(res => setGroups(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getCategories()
        getSubCategories()
        getGroups()
    }, [])


    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [groups, setGroups] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedSubCategory, setSelectedSubCategory] = useState('')
    const [selectedGroup, setSelectedGroup] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        create(name, selectedSubCategory, selectedCategory)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center', flexDirection: 'column' }}>
            <div>
                Create a subgroup
            </div>
            <div>
                <form action="" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" autoComplete="off" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <select onChange={(e) => {
                            setSelectedCategory(e.target.value)
                        }}>
                            <option value={0}>--Select a category--</option>
                            {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
                        </select>

                        <select onChange={(e) => setSelectedSubCategory(e.target.value)}>
                            <option value={0}>--Select a subcategory</option>
                            {subCategories.map(subCategory => <option key={subCategory._id} value={subCategory._id}>{subCategory.Sub_Category_name}</option>)}
                        </select>

                        <select onChange={(e) => setSelectedGroup(e.target.value)}>
                            <option value={0}>--Select a group</option>
                            {groups.map(group => <option key={group._id} value={group._id}>{group.Group_name}</option>)}
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>

            </div>
        </div>);
}

export default SubGroups