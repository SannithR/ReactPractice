
import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const Cart: React.FC = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    return null;
  }

  const { cart, removeFromCart } = context;

  // Calculate the total price
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
// import React, { useContext, useState } from 'react';
// import { ProductsContext } from '../context/ProductsContext';

// const Cart: React.FC = () => {
//   const context = useContext(ProductsContext);

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');

//   if (!context) {
//     return null;
//   }

//   const { cart, removeFromCart } = context;

//   // Calculate the total price
//   const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log({ name, address, city, state, zip });
//   };

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {cart.map((product) => (
//             <div key={product.id} className="cart-item">
//               <img src={product.thumbnail} alt={product.title} />
//               <div>
//                 <h3>{product.title}</h3>
//                 <p>Price: ${product.price.toFixed(2)}</p>
//                 <button onClick={() => removeFromCart(product.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="total-price">
//             <h3>Total: ${totalPrice.toFixed(2)}</h3>
//           </div>

//           <form onSubmit={handleSubmit} className="address-form">
//             <h3>Shipping Information</h3>
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="city">City:</label>
//               <input
//                 type="text"
//                 id="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="state">State:</label>
//               <input
//                 type="text"
//                 id="state"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="zip">Zip Code:</label>
//               <input
//                 type="text"
//                 id="zip"
//                 value={zip}
//                 onChange={(e) => setZip(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


