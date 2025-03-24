import React, {use} from 'react'

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers)
    // console.log(users)

    return (
       <>
        <h3 className='text-5xl'>Users: {users.length}</h3>
           {users.map(user => (
            <>
                <h3>Username : {user.username}</h3>
                <h3>Name : {user.name}</h3>
                <h3>Email : {user.email}</h3>
                <h3>Website : {user.website}</h3>

            </>


           ))}
       </>
    )
}
export default Users
