import "./CSS/right.css";

const Right = () => {
  return (
    <div className="right">
      <form action="final.jsx" method="GET">
        <h3>Login</h3>
        <p>Phone Number</p>
        <input type="number" id="number" name="phone" />
        <p>Password</p>
        <input type="password" name="password" />
        <div className="sidebyside">
          <div>
            <input type="checkbox" id="ask" name="remember" value="1" />
            <label for="ask">Remember Me</label>
          </div>  
          <p>Forgot Password ?</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Right;
