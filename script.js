const body = document.body
const toggleBtn = document.querySelector(".check")

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (!body.classList.contains("dark")) {
        toggleBtn.classList.replace("bg-image-dark", "bg-image-light")
    }else{
        toggleBtn.classList.replace("bg-image-light", "bg-image-dark")
    }
})