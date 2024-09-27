import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");

    toast("Log out success!");
  };

  const removeUserAccount = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    navigate("/login");

    toast("Remove data success!");
  };
  return (
    <>
      <div>home page</div>
      <button onClick={handleLogout}>log out</button>
      <button onClick={removeUserAccount}>remove data and log out!</button>
    </>
  );
}
