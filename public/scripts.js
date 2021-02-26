



setTimeout(() => {
    const modalPai = document.querySelector('.modal-pai');
    const pratos = document.querySelectorAll('.card');

    for (let card of pratos) {
        card.addEventListener("click", function () {
            const imageId = card.getAttribute("id");
            window.location.href = `/recipe?id=${imageId} `;




        })
    }





}, 200);
