import './topbar.scss';
import {Person, Email} from "@material-ui/icons";

// exportando el useState en unas props
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">It Solutions</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>381-6 89 36 09</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>developer.heredia@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    {/* onclick haga lo contrario del estado actual */}
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
