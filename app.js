const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const movieModal = document.getElementById('movieModal');
const overlay = document.getElementById('overlay');
const saveMovieBtn = document.getElementById('saveMovieBtn');
const movieTitle = document.getElementById('movieTitle');
const movieGenre = document.getElementById('movieGenre');
const movieList = document.getElementById('movieList');

const movies = [];

openModalBtn.addEventListener('click', () => {
    movieModal.style.display = 'block';
    overlay.style.display = 'block';
});

function closeModal() {
    movieModal.style.display = 'none';
    overlay.style.display = 'none';
    movieTitle.value = '';
    movieGenre.value = '';
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

saveMovieBtn.addEventListener('click', () => {
    const title = movieTitle.value.trim();
    const genre = movieGenre.value.trim();

    if (title === '' || genre === '') {
        alert('Iltimos, barcha maydonlarni to‘ldiring!');
        return;
    }

    const newMovie = {
        id: Date.now(),
        title: title,
        genre: genre
    };

    movies.push(newMovie);

    renderMovie(newMovie);

    closeModal();
});

function renderMovie(movie) {
    const li = document.createElement('li');
    li.setAttribute('data-id', movie.id);
    li.innerHTML = `<span>${movie.title} (${movie.genre})</span> — [O'chirish]`;

    li.addEventListener('click', () => {
        const isConfirmed = confirm(`"${movie.title}" filmini o‘chirishni xohlaysizmi?`);
        
        if (isConfirmed) {
            const movieIndex = movies.findIndex(m => m.id === movie.id);
            if (movieIndex !== -1) movies.splice(movieIndex, 1);

            li.remove();
        }
    });

    movieList.appendChild(li);
}
