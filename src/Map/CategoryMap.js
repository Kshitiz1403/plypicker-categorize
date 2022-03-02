import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'

const CategoryMap = () => {
    const getCategories = () => {
        axios.get(`${SERVER_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getCategories()
    }, [])

    const [categories, setCategories] = useState([])

    return (
        <div style={{margin:20}}>{categories.map(category => <div key={category._id}>"{category.name}": "{category._id}",</div>)}</div>
    )
}

export default CategoryMap