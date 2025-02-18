import { useState } from "react";
import { useUserContext } from "./AuthContext";
import { Loader } from "lucide-react";

const LogoutComponent = () => {
  const { setUser, setIsAuthenticated } = useUserContext();
    const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    setLoading(true)
    try {
      localStorage.removeItem("token");
      setUser({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        _id: "",
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }finally{
        setLoading(false)
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg w-[100px]">
              {loading ? <Loader className="h-5 w-5 animate-spin mx-auto"/> : "Logout"}
              </button>
  );
};

export default LogoutComponent;
