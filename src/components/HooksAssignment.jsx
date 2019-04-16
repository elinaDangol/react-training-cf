import React, { useState} from 'react';

const HooksAssignment = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
       <p>Items in your cart: {cartItems.toString()}</p>
      {/* <p>You clicked {count} times</p> */}
      <button className="btn btn-info" 
          onClick={()=>{
            setCartItems([...cartItems, 'apple'])
          }}
        >Add to Cart
        </button>
    </div>
  )
}

export default HooksAssignment;