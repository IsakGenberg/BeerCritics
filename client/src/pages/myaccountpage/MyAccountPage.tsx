import { useEffect, useState } from "react";
import { getUser } from "../../api";
import "./myaccountpage.css";
import ChangeUserDataModal from "../../components/changeuserdatamodal/ChangeUserDatamodal";
import { useAuth } from "../../authcontext";
import { useNavigate } from "react-router-dom";

function MyAccountPage() {
  const { isLoggedIn, checkAuth } = useAuth();
  const navigate = useNavigate();

  const [currentUser, setUser] = useState<string>("User not found");

  // Do not allow unauthorized users to reach the page.
  if (!isLoggedIn) {
    navigate("/user/login");
  }

  const updateUsername = (newUsername: string) => {
    setUser(newUsername);
    window.location.reload();
  };

  async function loadCurrentUser() {
    const user = await getUser();
    if (user) {
      setUser(user);
    }
  }

  useEffect(() => {
    checkAuth();
    loadCurrentUser();
  }, []);

  return (
    <div className="user">
      <h1>{currentUser}</h1>
      <div className="items">
        <ChangeUserDataModal
          btnText="Change Username"
          currentUser={currentUser}
          update={updateUsername}
        />
      </div>
    </div>
  );
}

export default MyAccountPage;
