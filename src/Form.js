import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    padding: 32px;
    background-color: white;
    margin-bottom: 24px;

`;

export default function Form({ values, update, submit }) {
    const onChange = (event) => {
        console.log(event.target.value)
        const { name, value } = event.target;
        update(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    return(
    <StyledForm onSubmit={onSubmit}>
        <div>
            <label>
                Name:
                <input 
                    type='text'
                    name='fullName'
                    onChange={onChange}
                    value={values.fullName}
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                />
            </label>
            <label>
                Role:
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Team Lead'>Team Lead</option>
                </select>
            </label>

            <div>
                <button disabled={!values.fullName || !values.email || !values.role}>Submit</button>
            </div>
        </div>
    </StyledForm>
    )
}