// // src/components/ProductList.tsx
// import React from 'react';
// import withProducts from '../hoc/withProducts';

// interface ProductListProps {
//   products: any[];
//   loading: boolean;
//   error: string | null;
// }

// const ProductList: React.FC<ProductListProps> = ({ products, loading, error }) => {
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={product.thumbnail} alt={product.title} />
//           <h3>{product.title}</h3>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <p>Rating: {product.rating}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default withProducts(ProductList);
// src/components/ProductList.tsx
import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import withProducts from '../hoc/withProducts';

const ProductList: React.FC = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    return null;
  }

  const { products, loading, error, addToCart } = context;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default withProducts(ProductList); 

