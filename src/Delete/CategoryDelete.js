import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'

const CategoryDelete = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        axios.get(`${SERVER_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.error(err))
    }
    const findProducts = async (categoryID) => {
        const products = (await axios.get(`${SERVER_URL}/products?category=${categoryID}`)).data
        return products
    }

    const removeProduct = async (productID) => {
        const remove = await (await axios.delete(`${SERVER_URL}/products/${productID}`)).data
        console.log(remove)
        return remove
    }

    const removeCat = async (categoryID) => {
        const remove = await (await axios.delete(`${SERVER_URL}/categories/${categoryID}`)).data
        console.log(remove)
        return remove
    }

    const remove = async (categoryID) => {
        const products = await findProducts(categoryID)
        await products.forEach(product => {
            removeProduct(product._id)
        });
        await removeCat(categoryID)
    }


    const Item = ({ _id, name }) => {
        const [isDeleted, setIsDeleted] = useState(false)
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginRight: 30 }}>{name}</div>
                <div style={{ color: 'red', cursor: 'pointer' }} onClick={async () => {
                    await remove(_id)
                    setIsDeleted(true)
                }}>Delete</div>
                <div style={{ height: 25, width: 25, borderRadius: 50, marginLeft: 50, backgroundColor: isDeleted ? 'green' : 'red' }}></div>
            </div>
        )
    }

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
                Category
            </div>
            <div>{categories.map(subCat => <Item key={subCat._id} _id={subCat._id} name={subCat.name} />)}
            </div>
        </div>
    )
}
export default CategoryDelete