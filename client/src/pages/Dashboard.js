import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const fetchData = async () => {
    try {
      // const response = await fetch('/api/v1');
      const response = await fetch('/data.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
