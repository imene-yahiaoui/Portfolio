import { Link } from "react-router-dom";



const Header = () => {
    return (
      <div className="header">
        <nav className="nav">
          <ul>
            <li>   
              <Link to="home_path">   </Link>
            </li>
            </ul>
          </nav>
      </div>
    );
  };
  
  export default Header;