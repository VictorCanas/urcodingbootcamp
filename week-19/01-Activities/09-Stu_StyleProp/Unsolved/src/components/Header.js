import React from "react";

//Not importing the css 
//import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

//using inline style 
const styles = {
  header: {
    backgroundColor: 'red',
  },
  text: {
    lineHeight: 2.5,
    fontSize: "100px",
    color: "white",
    textAlign: "center"
  }
}

const Header = () => (
  <div style={styles.header}>
    <div style={styles.text}>Welcome</div>
  </div>
);

export default Header;
