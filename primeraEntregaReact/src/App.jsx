import React from 'react';
import Navbar from './navbar'; 
 

const App = () => {
  return (
    <div className="App">
      <Navbar /> {Navbar}
      <Routes>
        <Route path="/" element={<Home />} />  {}
        <Route path="/contacto" element={<Contact />} />  {}
        <Route path="/productos" element={<Products />} />  {}
      </Routes>
    </div>
  );
};

export default App;
