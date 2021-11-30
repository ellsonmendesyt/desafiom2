import React,{useEffect,createContext} from 'react';
import './main.css'
import axios from 'axios';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart/Cart';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const ProductsContext = createContext(null);

function App() {
  const baseUrl =`https://my-json-server.typicode.com/ellsonmendesyt/desafiom2/data`;
  const [loading,setLoading]=React.useState(false); 
  const [error,setError]=React.useState(false); 

  

  const [products,setProducts]= React.useState(null);





  React.useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}`)
    .then((response) => {
    

      setProducts(response.data);
      
    })
    .catch(error=>{
      setError(error)

    })
    .finally(()=>{
      setLoading(false);
    })
  }, [])





  return (
    <div className='layout'>

      { products && <ProductsContext.Provider value={{fixo:products.fixo,tv:products.tv,internet:products.internet}}> 
    <Header />
    
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/carrinho' element={<Cart />} />
      </Routes>
   
   
   <Footer />
   </ProductsContext.Provider>}
   </div >
  );
}






export default App;















/*

    // <AppContainer>
    //   {
    //     loading ? <h2>Loading</h2> : 
    //     <Layout>
    //       <GlobalStyle />
    //     <List items={fixo} />
    //     <List items={internet} />
    //     <List items={tv} />
    //     </Layout>
     
    //   }
    // </AppContainer>
*/

















