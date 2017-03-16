var existingUsers = [
  {
    user: "justincalderon",
    pass: "password1"
  },
  {
    user: "aerielharina",
    pass: "password2"
  },
  {
    user: "jayceeharina",
    pass: "password3"
  }
]

function login() {

  var username = document.getElementById("username")

  var password = document.getElementById("password")

  var results = document.getElementById("results")

  console.log(username, password, results)
  console.log("your username is " + username.value)
  console.log("your password is " + password.value)


  for (i = 0; i < existingUsers.length; i = i + 1) {

    console.log(existingUsers[i])

    if (username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
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
