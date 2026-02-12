import React from 'react'

const Greeting = () => {

    const hour =new Date().getHours();
    let mssg = "";

    if (hour <12) mssg = "Good Morning";
    else if (hour <18) mssg = "Good Afternoon";
    else mssg ="Good Evening"
    return (
    <h1>{mssg}</h1>
    );
}

export default Greeting