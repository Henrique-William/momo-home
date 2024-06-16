import React from 'react';
import './home.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Contact } from '../../components/Contact';
import { ProductList } from '../../components/ProductList';

export const Home = () => {
  return (
    <div >
        <Header />
        <ProductList/>
        <Contact />
        <Footer />
    </div>
    
  )
}
