import { useSelector } from "react-redux";
export default function Username() {
    const user = useSelector((state) => state.user.username);
  return <div className="">{user}</div>;
}
