const films = [];

const elAddBtn = document.querySelector("#addMovieBtn");
const elCancelBtn = document.querySelector("#cancelBtn");
const elConfirmBtn = document.querySelector("#confirmBtn");
const elTitleInput = document.querySelector("#title");
const elDirectorInput = document.querySelector("#director");
const elRatingInput = document.querySelector("#rating");
const elBackdrop = document.querySelector(".backdrop");
const elModal = document.querySelector(".modal");
const elMovieList = document.querySelector("#movieList");

elAddBtn.addEventListener("click", function () {
    elBackdrop.classList.remove("hidden");
    elModal.classList.remove("hidden");
});

elCancelBtn.addEventListener("click", function () {
    elBackdrop.classList.add("hidden");
    elModal.classList.add("hidden");
});

elConfirmBtn.addEventListener("click", function () {
    if (
        elTitleInput.value === "" ||
        elDirectorInput.value === "" ||
        elRatingInput.value === ""
    ) {
        alert("Iltimos, barcha maydonlarni to'ldiring");
        return;
    }
    const newFilm = {
        name: elTitleInput.value,
        rejisor: elDirectorInput.value,
        reyting: elRatingInput.value,
    };
    films.push(newFilm);

    const li = document.createElement("li");
    li.textContent = `${newFilm.name} - ${newFilm.rejisor} (${newFilm.reyting})`;
    li.addEventListener("click", function () {
        if (confirm(`${li.textContent} — o'chirilsinmi?`)) {
            li.remove();
            const idx = films.indexOf(newFilm);
            if (idx !== -1) films.splice(idx, 1);
        }
    });
    elMovieList.appendChild(li);

    elTitleInput.value = "";
    elDirectorInput.value = "";
    elRatingInput.value = "";
    elBackdrop.classList.add("hidden");
    elModal.classList.add("hidden");
});
