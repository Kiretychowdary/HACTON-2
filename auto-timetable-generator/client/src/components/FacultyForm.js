// client/src/components/FacultyForm.js
import React, { useState } from 'react';

// Function to generate the next unique ID
const generateUniqueId = () => {
  const prefix = '221FA';
  let lastId = localStorage.getItem('lastGeneratedId') || '000';
  let newIdNumber = (parseInt(lastId, 10) + 1).toString().padStart(3, '0'); // Increment and pad with zeros
  localStorage.setItem('lastGeneratedId', newIdNumber); // Update last ID in local storage
  return prefix + newIdNumber; // Combine prefix with new ID number
};

const FacultyForm = ({ onFacultyAdded }) => {
  const [facultyId, setFacultyId] = useState('');
  const [name, setName] = useState('');
  const [subjects, setSubjects] = useState(['']);
  const [sections, setSections] = useState(['']);

  const handleAddSubject = () => setSubjects([...subjects, '']);
  const handleAddSection = () => setSections([...sections, '']);

  const handleSubjectChange = (index, value) => {
    const newSubjects = [...subjects];
    newSubjects[index] = value;
    setSubjects(newSubjects);
  };

  const handleSectionChange = (index, value) => {
    const newSections = [...sections];
    newSections[index] = value;
    setSections(newSections);
  };

  const handleGenerateId = () => {
    const uniqueId = generateUniqueId();
    setFacultyId(uniqueId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFaculty = {
      facultyId,
      name,
      subjects,
      sections,
    };

    onFacultyAdded(newFaculty); // Notify parent to add the faculty

    // Clear form fields
    setFacultyId('');
    setName('');
    setSubjects(['']);
    setSections(['']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Faculty</h3>
      <label>
        Unique ID:
        <input type="text" value={facultyId} readOnly />
        <button type="button" onClick={handleGenerateId}>Generate ID</button>
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <div>
        <h4>Subjects</h4>
        {subjects.map((subject, index) => (
          <input
            key={index}
            type="text"
            value={subject}
            onChange={(e) => handleSubjectChange(index, e.target.value)}
            placeholder="Enter subject"
            required
          />
        ))}
        <button type="button" onClick={handleAddSubject}>Add Subject</button>
      </div>
      <div>
        <h4>Sections</h4>
        {sections.map((section, index) => (
          <input
            key={index}
            type="text"
            value={section}
            onChange={(e) => handleSectionChange(index, e.target.value)}
            placeholder="Enter section"
            required
          />
        ))}
        <button type="button" onClick={handleAddSection}>Add Section</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FacultyForm;
