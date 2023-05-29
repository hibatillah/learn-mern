let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName:"Conway",
  }
}

// latihan 1
console.log(
  `Nama : ${house.currentOwner.firstName} ${house.currentOwner.lastName}`
);

// latihan 2
house.previousOwners[1] = "Jokowi"
console.log(`Presiden RI : ${house.previousOwners[1]}`)
