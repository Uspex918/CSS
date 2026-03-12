const boxEl = document.querySelector(".box")
const buttonEl = document.querySelector("button")
const counterEl = document.querySelector(".counter")

buttonEl.addEventListener("click", () => {
    // boxEl.scrollTop += 10
    const value = Number(counterEl.textContent)
    counterEl.textContent = value + 1
})
