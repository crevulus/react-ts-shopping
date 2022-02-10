import { createContext } from "react";

type AuthContextType = {
  token: string | undefined;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

// https://www.robinwieruch.de/react-router-authentication/?utm_source=reactdigest&utm_medium=email&utm_campaign=342
