import React from 'react';
import styles from "@/styles/Home.module.css";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
