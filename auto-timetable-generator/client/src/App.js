// client/src/App.js
import React, { useState } from 'react';
import FacultyForm from './components/FacultyForm';
import FacultyList from './components/FacultyList';

const App = () => {
  const [faculties, setFaculties] = useState([]);

  const handleFacultyAdded = (newFaculty) => {
    setFaculties((prev) => [...prev, newFaculty]); // Add new faculty to the list
  };

  return (
    <div>
      <FacultyForm onFacultyAdded={handleFacultyAdded} />
      <FacultyList faculties={faculties} />
    </div>
  );
};

export default App;
