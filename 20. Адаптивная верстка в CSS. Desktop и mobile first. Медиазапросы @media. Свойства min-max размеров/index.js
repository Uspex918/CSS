const box = document.querySelector(".box")

const observer = new ResizeObserver((entries) => {
    const width = Math.round(entries[0].contentRect.width)
    const height = Math.round(entries[0].contentRect.height)
    box.textContent = `Размеры этого прямоугольника составляют: Ширина ${width} пикселей, Высота ${height} пикселей!`
})

observer.observe(box)
