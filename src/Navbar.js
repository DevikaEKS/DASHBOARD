import React from 'react';
import './Navbar.css'; // CSS for styling
import arrow from "./Assets/Vector.png";
import quiz from "./Assets/Quiz.png";
import setting from "./Assets/Settings.png";
import people from "./Assets/People.png";
import assignment from "./Assets/Assignments.png";

const Navbar = () => {
  return (
    <nav className="navbar container-fluid">
   
 
        <a><img src={arrow}/>Reports</a>
        <a><img src={assignment}/>Library</a>
       <a><img src={people}/>People</a>
        <a><img src={quiz}/>Activities</a>
        {/* Add more sidebar items */}
   
    </nav>
  );
}

export default Navbar;

