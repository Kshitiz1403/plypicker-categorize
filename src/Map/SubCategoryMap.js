import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'

const SubCategoryMap = () => {
    const getSubCategories = () => {
        axios.get(`${SERVER_URL}/subcategories`)
            .then(res => setSubCategories(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getSubCategories()
    }, [])

    const [subCategories, setSubCategories] = useState([])
    return (
        <div style={{margin:20}}>{subCategories.map(subCategory => <div key={subCategory._id}>"{subCategory.Sub_Category_name}": "{subCategory._id}",</div>)}</div>
    )
}

export default SubCategoryMap