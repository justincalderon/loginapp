var objPeople = [
  {
    username: "justincalderon",
    password: "password1"
  },
  {
    username: "aerielharina",
    password: "password2"
  },
  {
    username: "jayceeharina",
    password: "password3"
  }
]

function login() {

  var username = document.getElementById("username")

  var password = document.getElementById("password")

  var results = document.getElementById("results")

  console.log(username, password, results)
  console.log("your username is " + username.value)
  console.log("your password is " + password.value)


  for (i = 0; i < objPeople.length; i = i + 1) {

    console.log(objPeople[i])

    if (username.value === objPeople[i].username && password.value === objPeople[i].password) {
      console.log("if statement ran, so we have a match!")
      results.className = "success"

      results.textContent = "Welcome to Inortum " + username.value + "!"

      return
    }
  }

  console.log("No match was found.");

  results.className = "failure"

  results.textContent = "Invalid username or password !"
}

function registerUser() {

  var registerUser = document.getElementById("newUser").value

  var registerPassword = document.getElementById("newPassword").value

  var newUser = {
    username: registerUser,
    password: registerPassword
  }

  for (var i = 0; i < objPeople.length; i++) {
    if (registerUser == objPeople[i].username) {
      alert("Username is already in use, please choose another username.")
      return
    } else if (registerPassword.length < 8 ) {
    alert("Password required 8 or more characters")
    return
    }
}
  objPeople.push(newUser)
  console.log(objPeople);
}
