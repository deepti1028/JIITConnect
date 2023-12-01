// import React from 'react'

// const About = () => {
//   return (
//     <div className="containter padding">
//       <div className="col-md-12">
//         <div className="row mx-0">
//           <p>
//             DUMMY CONTENT
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react';

const ClassLocations = () => {
 // Sample data for classrooms, tutorial classes, and labs
 const classrooms = [
    { classroom: 'G1-G9', building: 'ABB-I', floor: 'Ground Floor' },
    { classroom: 'G10 - G12', building: 'ABB-II', floor: 'Ground Floor' },
    { classroom: 'FF1 - FF9', building: 'ABB-I', floor: '1st Floor' },
    { classroom: 'CS1 - CS4', building: 'ABB-I', floor: '2nd Floor' },
    { classroom: 'CS5 - CS8', building: 'ABB-II', floor: '2nd Floor' },
    
    // Add more classroom data here
 ];

 const tutorialClasses = [
  { classroom: 'TS1 - TS12', building: 'ABB-I', floor: '2nd Floor' },
  { classroom: 'TS13 - TS20', building: 'ABB-II', floor: '2nd Floor' },
    // Add more tutorial class data here
 ];

 const labs = [
  { classroom: 'CL1 - CL8', building: 'ABB-III', floor: '-1 Floor' },
  { classroom: 'CL9 - CL16', building: 'ABB-III', floor: '-2 Floor' },
  { classroom: 'CL17 - CL20', building: 'ABB-III', floor: '-2 Floor' },
  { classroom: 'CL21 - CL22', building: 'ABB-I', floor: '2 Floor' },
  { classroom: 'Phy Lab', building: 'ABB-I', floor: '2 Floor' },
  { classroom: 'Language Lab', building: 'ABB-I', floor: 'Ground Floor' },
  { classroom: 'BTech Lab', building: 'ABB-II', floor: 'Ground Floor(Backside)' },
    // Add more lab data here
 ];

 // Function to render table data
 const renderTable = (data, title) => {
  return (
    <div style={{ marginBottom: '20px' }}><br/>
      <h2 style={{color: "#C060A1", fontWeight: "bolder"}}>{title}</h2><br/>
      <table style={{ width: '80%', borderCollapse: 'collapse', border: '5px solid white' , marginLeft: "auto", marginRight: "auto"}}>
        <thead style={{color: "white", fontWeight: "bold", backgroundColor: "#662549"}}>
          <tr>
            <th style={{ textAlign: 'center', borderBottom: '3px solid white', borderRight: '3px solid white' }}>Room</th>
            <th style={{ textAlign: 'center', borderBottom: '3px solid white', borderRight: '3px solid white' }}>Building</th>
            <th style={{ textAlign: 'center', borderBottom: '3px solid white' }}>Floor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((location, index) => (
            <tr key={index}>
              <td style={{ color: "white", textAlign: 'center', borderBottom: '3px solid white', borderRight: '3px solid white' }}>{location.classroom}</td>
              <td style={{ color: "white", textAlign: 'center', borderBottom: '3px solid white', borderRight: '3px solid white' }}>{location.building}</td>
              <td style={{ color: "white", textAlign: 'center', borderBottom: '3px solid white' }}>{location.floor}</td>
            </tr>
          ))}
        </tbody>
      </table><br/>
    </div>
  );
};

 return (
    <div>
      {renderTable(classrooms, 'CLASSROOMS')}
      {renderTable(tutorialClasses, 'TUTORIAL ROOMS')}
      {renderTable(labs, 'LABS')}
    </div>
 );
};

export default ClassLocations;
