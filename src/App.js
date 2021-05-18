import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import styled from 'styled-components'
import TeamMember from './TeamMember'

const initialFormValues = {
  fullName: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeamMember = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(!newTeamMember.fullName || !newTeamMember.email || !newTeamMember.role) return;
    setTeamMembers([newTeamMember, ...teamMembers]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
        {teamMembers.map((teamMember, idx) => {
          return (
            <TeamMember key={idx} details={teamMember} />
          )
        })}
    </div>
  );
}

export default App;
