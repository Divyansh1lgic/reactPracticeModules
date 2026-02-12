import React from 'react'

const UserCards = () => {

    const usersData = [
        {id:1, name:"sardeep", age:23},
        {id :2,name:"mandeep", age:22},
        {id:3, name:"sarah",age:24}
    ];
  return (
   { usersData.map(userData=> ()
    
    )}
  )
}

export default UserCards