import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'

const GroupMap = () => {
    const getGroups = () => {
        axios.get(`${SERVER_URL}/groups`)
            .then(res => setGroups(res.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getGroups()
    }, [])

    const [groups, setGroups] = useState([])

    return (
        <div style={{ margin: 20 }}>{groups.map(group => <div key={group._id}>"{group.Group_name}": "{group._id}",</div>)}</div>
    )
}

export default GroupMap