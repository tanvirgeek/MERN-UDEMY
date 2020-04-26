import React from 'react'
import './UsersList.css'
import UserItem from './UserItem'

const UsersList = (props) => {
    console.log(props);
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h1>No Users Found</h1>
            </div>
        )
    }
    return (
        <ul>
            {props.items.map(user =>
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount = {user.places}
                />
            )}
        </ul>
    )
}

export default UsersList
