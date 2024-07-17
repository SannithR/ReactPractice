// // src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Form from './components/Form';
// import DataFetcher from './components/DataFetcher';
// import withLogging from './hoc/withLogging';
// import { AppProvider } from './context/AppContext';

// const HomeWithLogging = withLogging(Home);
// const AboutWithLogging = withLogging(About);

// const App: React.FC = () => {
//   return (
//     <AppProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomeWithLogging />} />
//           <Route path="/about" element={<AboutWithLogging />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/data" element={<DataFetcher />} />
//         </Routes>
//       </Router>
//     </AppProvider>
//   );
// };

// export default App;


// // src/App.tsx
// import React from 'react';
// import './App.css';
// import { ProductsProvider } from './context/ProductsContext';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import './styles/styles.css';

// const App: React.FC = () => {
//   return (
//     <ProductsProvider>
//       <div className="App">
//         <header className="App-header">
//           <h1>Product List</h1>
//         </header>
//         <main>
//           <ProductList />
//           <Cart />
//         </main>
//       </div>
//     </ProductsProvider>
//   );
// };

// export default App;


import React from 'react';
import './App.css';
import { ProductsProvider } from './context/ProductsContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.css';


const App: React.FC = () => {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Product Store</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
           
            </Routes>
          </main>
          <ToastContainer />
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default App;


