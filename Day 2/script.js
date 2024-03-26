let members = [];

function registerMember() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (fullName && email && phone) {
    const member = {
      id: Date.now(),
      fullName,
      email,
      phone
    };

    members.push(member);
    displayMembers();
    clearForm();
  } else {
    alert("Please fill in all fields.");
  }
}

function displayMembers() {
  const membersList = document.getElementById("members");
  membersList.innerHTML = "";
  members.forEach(member => {
    const li = document.createElement("li");
    li.textContent = `${member.fullName} - ${member.email} - ${member.phone}`;
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteMember(member.id);
    };
    li.appendChild(deleteButton);
    membersList.appendChild(li);
  });
}

function deleteMember(id) {
  members = members.filter(member => member.id !== id);
  displayMembers();
}

function clearForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

window.onload = function() {
  displayMembers();
};