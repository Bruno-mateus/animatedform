const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    //validate error
    const fields = [...document.querySelectorAll(".input-block input")]

    fields.forEach((field) => {
        if (field.value === "") {
            form.classList.add("validate-error")
        }
    });
    const validateError = document.querySelector('.validate-error');
    if (validateError) {
        validateError.addEventListener("animationend", (event) => {
            if (event.animationName === "nono") {
                validateError.classList.remove("validate-error")
            }
        })
    } else {
        form.classList.add("form-hide");
    }

})
if (form !== "form-hide") {
    document.querySelector('body').style.overflow = "hidden"
}

form.addEventListener("animationstart", event => {
    if (event.animationName === "down") document.querySelector("body").style.overflow = "hidden"
})

form.addEventListener("animationend", (event) => {
    if (event.animationName === "down") {
        form.style.display = "none"
        document.querySelector("body").style.overflow = "none";
    }



});

/*squares*/

const backgroundSquares = document.querySelector("ul.squares");
for (let i = 0; i < 11; i++) {
    const li = document.createElement("li");
    backgroundSquares.appendChild(li);

    const random = (min, max) => Math.random() * (max - min) + min;
    const size = Math.floor(random(10, 120));
    const position = Math.floor(random(1, 99));
    const delay = random(5, 0.1);
    const duration = random(24, 8);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `${size}`

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${random},${random},${random},${random})`


    /*positions*/
    li.style.left = `${position}%`;
    li.style.right = `${position}%`;

    backgroundSquares.appendChild(li);
}