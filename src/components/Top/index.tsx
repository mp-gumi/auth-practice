import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; //useHistoryの代わりにuseNavigate(v6以降)
import { AuthContext } from "../../contexts/AuthContext";
import { useCallback, useContext } from "react";
import Loading from "../Loading";

function Top() {
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    auth.signOut();
    navigate("/signin");
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}

export default Top;
