import React from "react";

const styles = {
  nav: {
    margin: 20,
    background: "#e8eaf6"
  },
  navHeading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

const Navbar = () => (
  <div style={styles.nav}>
    <div style={styles.navHeading}>Home</div>
  </div>
);

export default Navbar;
