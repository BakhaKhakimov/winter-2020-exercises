const movies = [
  {
    title: 'Sin City',
    genre: 'noir',
  },
  {
    title: 'Harry Potter',
    genre: 'fantasy',
  },
  {
    title: 'The Lion King',
    genre: 'cartoon',
  },
  {
    title: 'Love Actually',
    genre: 'comedy',
  },
  {
    title: 'Matrix',
    genre: 'sci-fi',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const top5Elm = document.querySelector('#top5');

  for(const movie of movies) {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.innerHTML = (
      `<div class="movie__title">${movie.title}</div>
       <div class="movie__genre">${movie.genre}</div>
       <button class="btn-upvote">Upvote</button>`
    );

    const btnUpvote = movieElement.querySelector('.btn-upvote');
    btnUpvote.addEventListener('click', () => {
      alert('upvote');
    });

    top5Elm.appendChild(movieElement);
  }
});