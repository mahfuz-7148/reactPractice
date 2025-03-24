import React, {Suspense} from 'react'
import Users from "./components/Users.jsx";

const App = () => {

  

    const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    return (
        <div className='text-center mt-10 grid grid-cols-1 gap-4 min-h-screen text-green-700'>
            <Suspense fallback={<h1>Loading.........</h1>}>
                
                <Users fetchUsers={fetchUsers}/>
            </Suspense>
        </div>
    )
}
export default App
