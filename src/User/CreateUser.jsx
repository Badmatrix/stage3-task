import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./UserSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername("");
    navigate('/product')
  }
  return (
    <div className="bg-red-500 my-10 px-5">
      <form onSubmit={handleSubmit}>
        <p>tell us your name</p>
        <input
          type="text"
          placeholder="enter you name"
          className="outline p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>set name</button>
      </form>
    </div>
  );
}
