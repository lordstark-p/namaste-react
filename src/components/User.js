import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({
    avatar_url: "xyz",
    login: "lordstark- p",
  });

  useEffect(() => {
    fetchGitData();
  }, []);

  const fetchGitData = async () => {
    const data = await fetch("https://api.github.com/users/lordstark-p");
    const json = await data.json();
    setUserInfo(json);
    console.log(userInfo);
  };

  const { avatar_url, login } = userInfo;
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg flex justify-between">
      <div>
        <h1>Count: {count}</h1>
        <button
          className="border-s-gray-500 p-1 bg-slate-200 font-semibold rounded-md"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          INCREMENT
        </button>
      </div>
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: Pranjal</h2>
        <h3>GitHub: {login}</h3>
        <h4>Contact: @pranjalchandel98</h4>
      </div>
    </div>
  );
};

export default User;
