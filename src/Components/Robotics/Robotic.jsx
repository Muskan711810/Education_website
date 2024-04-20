import React from 'react';
import './RoboticsEducationPopup.css'; // Style your component in this CSS file
import robo1 from "../../assets/robo1.avif";
import robo2 from "../../assets/robo2.avif";

const RoboticsEducationPopup = ({ onClose }) => {
  return (
    <div className="robotics-education" id='robotics'>
      <div className="content">
        <h2>About Robotic Education</h2>
        <p>
          Robotic education involves learning about robots, their design, construction, operation, and application in various fields. It encompasses topics such as robotics engineering, programming, mechanics, electronics, and more.
        </p>
        <p>
          Robotic education encourages students to develop problem-solving skills, creativity, and logical thinking. It provides hands-on experience with building and programming robots, fostering innovation and technological literacy.
        </p>
        <p>
          Through robotic education, students can explore diverse fields such as automation, artificial intelligence, mechatronics, and robotics research. It prepares them for careers in engineering, computer science, and related fields, as well as fostering a deeper understanding of technology and its impact on society.
        </p>
        <h2>Use Cases of Robotics</h2>
        <p>
          Robotics has applications in various industries, including:
        </p>
        <ul>
          <li>Manufacturing: Robots are used in manufacturing processes for tasks such as assembly, welding, painting, and quality control.</li>
          <li>Healthcare: Robots assist in surgeries, rehabilitation, and patient care. They can also be used for tasks such as drug delivery and disinfection.</li>
          <li>Agriculture: Agricultural robots help with planting, harvesting, monitoring crops, and managing livestock.</li>
          <li>Logistics and Warehousing: Robots automate tasks in warehouses, including sorting, picking, packing, and inventory management.</li>
          <li>Space Exploration: Robots are used in space exploration missions for tasks such as planetary exploration, satellite servicing, and maintenance.</li>
          <li>Defense and Security: Robots are used for reconnaissance, bomb disposal, surveillance, and border patrol.</li>
          <li>Education: Robotics is increasingly used in educational settings to teach STEM (science, technology, engineering, and mathematics) concepts and promote hands-on learning.</li>
        </ul>
        <div className="images">
          <img src={robo1} alt="Image 1" className="image" />
          <img src={robo2} alt="Image 2" className="image" />
          {/* Add more img tags here as needed */}
        </div>
      </div>
    </div>
  );
};

export default RoboticsEducationPopup;
