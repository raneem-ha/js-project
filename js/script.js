

const login = document.querySelector("#login")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const fullname = document.querySelectorAll(".data .name")
const logout = document.querySelector("#logout")

const userdata = document.querySelector(".userdata")

const email = document.querySelectorAll(".data .email")

const image = document.querySelectorAll(".data .img .image")



login.addEventListener("submit", (event) => {
  event.preventDefault()

  fetch("https://reqres.in/api/users", {

    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")

    },


  })
    .then(res => res.json())
    .then(res => {
      console.log(res)




      userdata.style.display = "block";

      res.data.forEach((element, i) => {

        fullname.forEach((e, j) => {
          if (i == j)

            e.innerHTML = element.first_name + " " + element.last_name

        });
        email.forEach((e, j) => {
          if (i == j)

            e.innerHTML = element.email;

        })
        image.forEach((e, j) => {
          if (i == j)

            e.src = element.avatar


        })
      })



    })
})



logout.addEventListener("click", () => {

  userdata.style.display = "none"

})