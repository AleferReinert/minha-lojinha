import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

// function screenWidth(){
//   const width = window.screen.width;
//   if(width > 576){
//     return 'sm'
//   } else if(width >= 768){
//     return 'md'
//   } else if(width >= 992){
//     return 'lg'
//   } else if(width >= 1200){
//     return 'xl'
//   } else if(width >= 1400){
//     return 'xxl'
//   }
// }

const user = {
  firstName: 'João',
  lastName: 'da Silva',
  age: 28
}

function App() {
  return (
    <div className="App">
      <Header isLoggedIn={true} username={user.firstName} />
      <Footer />
    </div>
  );
}

export default App;
