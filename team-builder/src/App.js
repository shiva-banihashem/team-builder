
import './App.css';
import React, { useState } from "react";
import Members from "./components/Members";
import MemberForm from "./components/MemberForm";



function App() {
  const [members, setMembers] = useState([])
  const [memberToEdit, SetMemberToEdit] =useState({});
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email:member.email
      
    };
    setMembers([...members, newMember]);
  };

  const editMember = (id )=> {
    
    const newArray = members.filter(member => {
      return member.id === id;
    });
   
    
    
    SetMemberToEdit(newArray[0]);
  };

  const updateMember = memberEdited =>{
    
    const newArray=members.map((member)=> {
       if (Number(member.id) === Number(memberEdited.id)){
         member.name = memberEdited.name;
         member.email = memberEdited.email;
         
       }
      
       return member;
    });
    
    setMembers(newArray);
    SetMemberToEdit({});
    

}  
  

  
  const delMember = (id )=> {
    
    const newArray = members.filter(member => {
      return member.id !== id;
    });
    
    setMembers(newArray);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <MemberForm addNewMember={addNewMember} memberToEdit={memberToEdit} updateMember={updateMember} />
      <Members members={members} delMember={delMember} editMember={editMember} />
      
    </div>
  );
}





export default App;
