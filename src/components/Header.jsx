import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" activeClassName="active">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quotes" activeClassName="active">Quotes</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
