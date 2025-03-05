import "./navbar.css";
import { useAuth } from "../../authcontext";
import LoggedInNavbar from "./NavbarLoggedIn";
import LoggedOutNavbar from "./NavbarLoggedOut";

function MyNavbar() {
  const {isLoggedIn} = useAuth();
  if(isLoggedIn){
    return(<LoggedInNavbar/>);
  }else{
    return(<LoggedOutNavbar/>);
  }
}

export default MyNavbar;
