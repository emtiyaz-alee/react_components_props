import logo from "/vite.svg";
import Input from "./Input";
import Button from "./Button";

let Login = () => {
  return (
    <div className="main_container">
      <div className="image">
        <img src={logo} alt="no image found" />
      </div>
      <h2>Welcome Back</h2>
      <h3>Login</h3>
      <div className="fields_wrapper">
        <Input type="email" placeholder="Enter email" />
        <Input type="password" placeholder="Enter Password" />
        <Button label="Login"/>
      </div>
      <p>
        Don't have an account? <a href="#!">Signup</a>
      </p>
    </div>
  );
};

export default Login;
