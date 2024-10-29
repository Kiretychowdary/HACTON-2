// client/src/components/FacultyList.js
import React from 'react';

const FacultyList = ({ faculties }) => {
  return (
    <div>
      <h3>Faculty List</h3>
      <ul>
        {faculties.map((faculty) => (
          <li key={faculty.facultyId}>
            <strong>{faculty.name}</strong> (ID: {faculty.facultyId})
            <p>Subjects: {faculty.subjects.join(', ')}</p>
            <p>Sections: {faculty.sections.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
