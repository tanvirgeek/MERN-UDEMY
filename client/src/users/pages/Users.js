import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
    const users = [{
        id: 'GMK',
        name: "Tanvir",
        iamge: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        places: 3
    },{
        id: 'mmk',
        name: "Madman",
        iamge: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        places: 4
    }]

    return (
        <UsersList items={users}/>
    )
}

export default Users
