import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";


//USING AS PROPS
//When you click it should be false

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Eric Clatterbuck
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>571-316-6930</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>eric.reese.clatterbuck@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}