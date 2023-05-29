// one
function one(){
  var a = 10
  return a
}
console.log('a =', one())

// two
function two() {
  let b = 10
  b = 20
  return b
}
console.log('b =',two())

// three
let c;
function three() {
  c = 25
}
three()
console.log({ c })

// four
let d
function four() {
  d = 25
}
four()
console.log({ d })

// five
function five() {
  const greeting = "Hello"

  function greet() {
    let name = "Eddie"
    e = `${greeting} ${name}`
  }
  greet()
}
five()
console.log({ e })

// six
function six() {
  let f
  if (true) {
    f = 50
  }
  console.log({ f })
}
six()