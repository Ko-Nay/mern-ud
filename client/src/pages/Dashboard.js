import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <main>
      <h1> Welcome to Jobify Dashboard Page!</h1>
      <div>
        <Link to="/"> Logout </Link>
      </div>
    </main>
  );
};

export default Dashboard;
