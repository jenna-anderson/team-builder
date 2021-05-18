import React from 'react';
import styled from 'styled-components'

const StyledTeamMember = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    padding: 32px;
    background-color: white;
    margin-bottom: 24px;
`;

export default function TeamMember(props) {
    const { details } = props

    return(
    <StyledTeamMember>
      <h2>{details.fullName}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </StyledTeamMember>
    )
}