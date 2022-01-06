import { createContext, Dispatch, SetStateAction } from "react";
import firebase from "firebase/compat/app";

type AuthContextType = {
  user: firebase.User | null;
  setUser: Dispatch<SetStateAction<firebase.User | null>>;
  loading: boolean;
};

export const AuthContext = createContext({} as AuthContextType);
