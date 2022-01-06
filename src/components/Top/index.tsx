import { auth } from "../../firebase";
import { useNavigate, Navigate } from "react-router-dom"; //useHistoryの代わりにuseNavigate(v6以降)
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Top() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/signin");
  };

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}

export default Top;
