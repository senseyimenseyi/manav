import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  username: string;
  password: string;
}

interface Props {
  users: User[];
  isLoginSuccesful: (success: boolean) => void;
}

function Login({ users, isLoginSuccesful }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    isLoginSuccesful(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      users.find((user) => user.email === email && user.password === password)
    ) {
      setIsLoggedIn(true);
      isLoginSuccesful(true);
    } else {
      setIsLoggedIn(false);
      isLoginSuccesful(false);
    }
  };
  if (isLoggedIn) {
    return (
      <div className="row">
        <div className="col">
          <h5>Hoşgeldin {email}</h5>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleLogout}>
            Çıkış
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="login-container">
      <h2>Kullanıcı Girişi</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group mb-2">
          <input
            type="email"
            placeholder="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            placeholder="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
