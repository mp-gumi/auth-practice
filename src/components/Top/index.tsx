import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; //useHistoryの代わりにuseNavigate(v6以降)
import { useCallback } from "react";

function Top() {
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    auth.signOut();
    navigate("/signin");
  }, [navigate]);

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}

export default Top;
