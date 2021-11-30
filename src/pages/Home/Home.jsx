import React,{useContext} from 'react'
import { ProductsContext } from '../../App';
import List from '../../components/List';

import './home.css';


const Home = () => {
    const products = useContext(ProductsContext);
  
    return (
        <main className='main-container'>
       
         
        <List items={products.fixo} />
        
         
             <List items={products.internet} />
        
         
              <List items={products.tv} />
             
         
       
        </main>
    )
}

export default Home
