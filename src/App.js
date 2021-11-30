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
  const baseUrl =`http://localhost:8000/data`;
  const [loading,setLoading]=React.useState(false); 
  const [error,setError]=React.useState(false); 

  const [fixo,setFixo]=React.useState(null);
  const [tv,setTv]=React.useState(null);
  const [internet,setInternet]=React.useState(null);





  React.useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}`)
    .then((response) => {
      setFixo(response.data.fixo);
      setInternet(response.data.internet);
      setTv(response.data.tv);
      
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

      {fixo && tv && internet && <ProductsContext.Provider value={{fixo,tv,internet}}> 
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

















