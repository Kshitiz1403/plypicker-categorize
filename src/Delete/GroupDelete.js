import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'
import './styles.css'

const GroupDelete = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getGroups()
    }, [])

    const getGroups = () => {
        axios.get(`${SERVER_URL}/groups`)
            .then(res => setGroups(res.data))
            .catch(err => console.error(err))
    }

    const findProducts = async (groupID) => {
        const products = (await axios.get(`${SERVER_URL}/products?group=${groupID}`)).data
        return products
    }

    const removeProduct = async (productID) => {
        const remove = await (await axios.delete(`${SERVER_URL}/products/${productID}`)).data
        console.log(remove)
        return remove
    }

    const removeGroup = async (groupID) => {
        const remove = await (await axios.delete(`${SERVER_URL}/groups/${groupID}`)).data
        console.log(remove)
        return remove
    }

    const remove = async (groupID) => {
        const products = await findProducts(groupID)
        await products.forEach(product => {
            removeProduct(product._id)
        });
        await removeGroup(groupID)
    }

    const Item = ({ _id, name }) => {
        const [isDeleted, setIsDeleted] = useState(false)
        return (
            <div className='container'>
                <div className='name'>{name}</div>
                <div className='delete' onClick={async () => {
                    await remove(_id)
                    setIsDeleted(true)
                }}>Delete</div>
                <div className='status' style={{ backgroundColor: isDeleted ? 'green' : 'red' }}></div>
            </div>
        )
    }

    return (
        <div>
            <div className='heading'>
                Group
            </div>
            <div>{groups.map(group => <Item key={group._id} _id={group._id} name={group.Group_name} />)}
            </div>
        </div>
    )
}

export default GroupDelete