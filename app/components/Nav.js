var React = require("react");
//
// var link = require('react-router-dom').Link;
var NavLink = require("react-router-dom").NavLink;

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
}

module.exports = Nav;
