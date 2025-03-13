import "./navbar.css";
import { useAuth } from "../../authcontext";
import LoggedInNavbar from "./NavbarLoggedIn";
import LoggedOutNavbar from "./NavbarLoggedOut";
/**
 * 
 * @returns Navbar component that displays LoggedInNavbar if the user is logged in, LoggedOutNavBar if the user is logged out.
 */
function MyNavbar() {
  const {isLoggedIn} = useAuth();
  if(isLoggedIn){
    return(<LoggedInNavbar/>);
  }else{
    return(<LoggedOutNavbar/>);
  }
}

export default MyNavbar;
