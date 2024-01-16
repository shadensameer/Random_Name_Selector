let names = [];

function addName() {
  const nameToAdd = document.getElementById("nameInput").value.trim();

  if (nameToAdd != "") {
    names.push(nameToAdd);
    document.getElementById("nameInput").value = "";
  }
}

function selectRandomName() {
  if (names.length == 0) {
    document.getElementById("selectedName").textContent =
      "You didn't add any names yet!!!!";
  } else {
    const RandomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("selectedName").textContent = names[RandomIndex];
  }
}
