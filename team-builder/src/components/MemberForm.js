import React, { useState, useEffect } from "react";

const MemberForm = props => {
  
  
  
  const [member, setMember] = useState({})
  
  
  useEffect(() => {
    
  
  if (props.memberToEdit.id)
      setMember(props.memberToEdit);
  
  
  },[props.memberToEdit]);
  const handleChanges = event => {
    
    setMember({ ...member, [event.target.name]: event.target.value });
    
  };
  const submitForm = event => {
    event.preventDefault();
    
    
    if (props.memberToEdit.id) {
      props.updateMember(member);


    }
    else {
    props.addNewMember(member);
    
    
    }
    // clears out the input values
    setMember({ name: "", email: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input type = "email"
        id="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
