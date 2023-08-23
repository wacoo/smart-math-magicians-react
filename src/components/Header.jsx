import { Link } from 'react-router-dom';

const Header = (props) => {
  const { active } = props;
  return (
    <div className="header">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className={active === "calc"? "active": ""}>Calculator</Link>
        </li>
        <li>
          <Link to="/quotes" className={active === "quotes"? "active": ""}>Quotes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
