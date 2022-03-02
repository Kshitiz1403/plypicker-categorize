import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'

const SubGroupMap = () => {
    const getSubGroups = () => {
        axios.get(`${SERVER_URL}/subgroups`)
            .then(res => setSubGroups(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getSubGroups()
    }, [])

    const [subGroups, setSubGroups] = useState([])
    return (
        <div style={{margin:20}}>{subGroups.map(subGroup => <div key={subGroup._id}>"{subGroup.SubGroup_name}": "{subGroup._id}",</div>)}</div>
    )
}

export default SubGroupMap