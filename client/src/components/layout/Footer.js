
import React from 'react';

const Footer = () =>{

  return(
    <div className="footer">
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} DevConnect
      </footer>
    </div>
  );
}

export default Footer;
