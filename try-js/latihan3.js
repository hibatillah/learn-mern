let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName:"Conway",
  }
}

console.log(`Nama : ${house.currentOwner.firstName}`)

house.previousOwners[1] = "Jokowi"
console.log(`Presiden RI : ${house.previousOwners[1]}`)