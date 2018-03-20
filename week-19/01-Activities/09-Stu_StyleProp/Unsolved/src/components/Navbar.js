import React from "react";
//import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
//inline styles
const styles = {
  header: {
    backgroundColor: 'green',
    height: "60px"
  },
  text: {
    color: "white",
    fontSize: "1.3em",
    marign: "5px",
    lineHeight: 3,
  }
}

const Navbar = () => (
  <div style={styles.header}>
    <div style={styles.text}>Welcome</div>
  </div>
);

export default Navbar;
