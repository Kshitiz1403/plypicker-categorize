import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'

const SubGroupDelete = () => {
    const [subGroups, setSubGroups] = useState([])

    useEffect(() => {
        getSubGroups()
    }, [])

    const getSubGroups = () => {
        axios.get(`${SERVER_URL}/subgroups`)
            .then(res => setSubGroups(res.data))
            .catch(err => console.error(err))
    }

    const findProducts = async (subGroupID) => {
        const products = (await axios.get(`${SERVER_URL}/products?subgroup=${subGroupID}`)).data
        return products
    }

    const removeProduct = async (productID) => {
        const remove = await (await axios.delete(`${SERVER_URL}/products/${productID}`)).data
        console.log(remove)
        return remove
    }

    const removeSubGroup = async (subGroupID) => {
        const remove = await (await axios.delete(`${SERVER_URL}/subgroups/${subGroupID}`)).data
        console.log(remove)
        return remove
    }

    const remove = async (groupID) => {
        const products = await findProducts(groupID)
        await products.forEach(product => {
            removeProduct(product._id)
        });
        await removeSubGroup(groupID)
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
                Sub Group
            </div>
            <div>{subGroups.map(subGroup => <Item key={subGroup._id} _id={subGroup._id} name={subGroup.SubGroup_name} />)}
            </div>
        </div>
    )
}

export default SubGroupDelete