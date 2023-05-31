import React, { startTransition } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
