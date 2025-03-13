import axios from "axios";
import { useNavigate } from "react-router";
import { logout } from "../../api";
import { useAuth } from "../../authcontext";
/**
 * 
 * @returns A button that logs the user out when clicked.
 */
function LogoutButton() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const handleClick = async () => {
    try {
      await logout();
      checkAuth();
      navigate("/");
      console.log("Logout successful");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          console.log("Logout Failed");
        }
      }
    }
  };
  return <button onClick={handleClick}>Logout</button>;
}

export default LogoutButton;
