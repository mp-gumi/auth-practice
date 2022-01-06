import React, { useContext } from "react";
import Top from "../../components/Top";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const { loading } = useContext(AuthContext);
  if (!loading) {
    return <Loading />;
  }
  return <Top />;
}

export default Home;
