const rate = (rating) => {
  const starElms = document.querySelectorAll('.rating__star');
  starElms.forEach((starElm, index) => {
    if (index < rating) {
      starElm.className = 'rating__star rating__star--on';  
    } else {
      starElm.className = 'rating__star';
    }
  });

  const ratingElm = document.querySelector('.rating__value');
  ratingElm.textContent = rating;
};

document.addEventListener('DOMContentLoaded', () => {
  const starElms = document.querySelectorAll('.rating__star');
  starElms.forEach((starElm, index) => {
    starElm.addEventListener('click', () => rate(index+1));
  });
});

































// const rate = (rating) => {
//   const starElms = document.querySelectorAll('.rating__star');
//   starElms.forEach((star, index) => {
//     if (index < rating) {
//       star.className = 'rating__star rating__star--on';
//     } else {
//       star.className = 'rating__star';
//     }
//   });

//   const ratingElm = document.querySelector('.rating__value');
//   ratingElm.textContent = rating;
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const starElms = document.querySelectorAll('.rating__star');
//   starElms.forEach((star, index) => {
//     star.addEventListener('click', () => rate(index+1));
//   })
// });



