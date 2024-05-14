import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './Dashboard.css'; // CSS for styling
/////


////



const Dashboard = () => {
  return (
    <div className="dashboard-container">

     <Sidebar/>
   
    
      <MainContent />
    </div>
  );
}
export default Dashboard;