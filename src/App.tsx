import { useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { auth } from "./firebase";
import firebase from "firebase/compat/app";
import Router from "../src/Routes/index";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribed;
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser, loading }}>
        <Router />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
