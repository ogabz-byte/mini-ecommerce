import React from "react";

const Header = (props) => {
  const { countCartItems } = props;
  return (
    <header className="header">
      <div>
        <a href="http://">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart {""}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href="#/signin">Sign In</a>
      </div>
    </header>
  );
};

export default Header;
