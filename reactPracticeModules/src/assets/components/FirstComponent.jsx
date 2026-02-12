import React from 'react'

const FirstComponent = () => {
  return (
    // simple header created with an paragraph section
    <div>
        <div className='FirstComponent' > 
            <h1>This is header</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>blog</li>
                <li>MyList</li>
            </ul>
        </div>
       {/* paragraph section */}
        <p>This is paragraph section</p>

        <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
        </ul>
    </div>
  )
}

export default FirstComponent