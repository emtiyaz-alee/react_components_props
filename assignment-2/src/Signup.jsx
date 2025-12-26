import logo from "/vite.svg";
import Input from "./Input";
import Button from "./Button";

let Signup = () => {
  return (
    <div className="main_container">
      <div className="image">
        <img src={logo} alt="no image found" />
      </div>
      <h2>Create Your Account</h2>
      <h3>Signup</h3>
      <div className="fields_wrapper">
        <Input type="text" placeholder="Enter First Name" />
        <Input type="email" placeholder="Enter email" />
        <Input type="password" placeholder="Enter Password" />
        <Button label="Signup"/>
      </div>
      
    </div>
  );
};

export default Signup;
