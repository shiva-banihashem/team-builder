import React, { useState, useEffect } from "react";

const MemberForm = props => {
  console.log(props);
  console.log(props.memberToEdit);
  const [member, setMember] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    // const id = Number(props.match.params.id);
    
  console.log("in useeffect:"+ props.memberToEdit);
  if (props.memberToEdit.id)

  setMember(props.memberToEdit);
  console.log(member);

  },[props.memberToEdit]);
  const handleChanges = event => {
    //     const ourObj = {...note}
    // ourObj[event.target.name] = event.target.value
    // // and then we would setNote to that ^
    // setNote(ourObj);
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log(member);
  };
  const submitForm = event => {
    event.preventDefault();
    console.log("in submit"+member.name);
    props.addNewMember(member);
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
