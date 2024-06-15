import React from 'react';
import './home.css';
import { Header } from '../../components/Header'
import { Items } from '../../components/Items';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <div >
        <Header />
        <Items />
        
        <Footer />
    </div>
    
  )
}
