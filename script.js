const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * window.innerHeight}px`;
    noButton.style.left = `${Math.random() * window.innerWidth}px`;
});

yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container second-page">
            <h1>Yupppppp!</h1>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzY1d3ppYjE3amxzbXU2dXdranB2Y2k5YmMwNzFobmVnbGVibGg3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9d3LQ6TdV2Flo8ODTU/giphy.gif" alt="Yay GIF" class="gif">
            <h1>Cảm ơn Giang siêu nhiềuuuu!</h1>
            <p>*Thông tin chi tiết về buổi date mời em check email vào lúc 00h1p ngày 18/1/2025 nhoaaaa!</p>
        </div>
    `;
});