import { useState, useEffect, createContext, useContext } from "react";

const INITIAL_USER = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  _id: "",
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuthenticated: false,
    isLoading: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    setIsLoading: () => {},
    checkAuthUser: async () => false as boolean
}

interface IContextTipe {
    user: IUser,
    isAuthenticated: boolean,
    isLoading: boolean,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser: () => void;
}

interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  _id: string;
}

const AuthContext = createContext<IContextTipe>(INITIAL_STATE);

const AuthProvider = ({ children }:{ children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check authentication and get user details
  const checkAuthUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/user/singleUser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const data = await response.json();
      console.log("Auth user ", data.loggedInUser)
      setUser(data.loggedInUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Authentication error:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Run the checkAuthUser function when the component mounts
  useEffect(() => {
    checkAuthUser();
  }, []);

  const value={
    user,
    setUser,
    isAuthenticated,
    isLoading,
    setIsAuthenticated,
    checkAuthUser
  }

  console.log("User", user)

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
