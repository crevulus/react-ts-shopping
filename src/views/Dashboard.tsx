import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

export const Dashboard = ({}) => {
  const { token } = useContext(AuthContext);

  return (
    <>
      <h2>Dashboard (Protected)</h2>

      <div>Authenticated as {token}</div>
    </>
  );
};
