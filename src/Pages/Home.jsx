
import { useSelector } from "react-redux";
import CreateUser from "../User/CreateUser";
import Username from "../User/Username";

export default function Home() {
  const user = useSelector((state) => state.user.username);
  return (
    <div className=" font-bold text-2xl">
      {!user ? <CreateUser /> : <Username />}
    </div>
  );
}
