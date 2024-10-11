// moble-menu
const mobileMenu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('colse-btn');

openBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('hidden');
  openBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  mobileMenu.classList.add('hidden');
  closeBtn.classList.add('hidden');
  openBtn.classList.remove('hidden');
});

// Meals by Category

const foodsMeals = showAllcart => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    .then(res => res.json())
    .then(data => {
      if (showAllcart) {
        displayAllFoods(data.meals);
      } else {
        foodsDisplay(data.meals.slice(0, 9));
      }
    })
    .catch(error => console.log(error));
};

const foodsDisplay = foods => {
  const mealsDisply = document.getElementById('meals-disply');

  foods.forEach(food => {
    console.log(food);
    const displaycard = document.createElement('div');
    displaycard.classList.add(
      'py-4',
      'mx-8'
    );
    displaycard.innerHTML = `
    <div class="card bg-base-100 w-96 h-96 shadow-xl p-2  mx-auto">
  <figure>
    <img
      src="${food.strMealThumb}"
      alt="foods" />
  </figure>
<h2 class="text-2xl text-gray-700 my-4">Name: ${food.strMeal}</h2>

<button class="btn btn-success my-2">Detalis</button>
</div>
    `;
    mealsDisply.appendChild(displaycard);
  });
};

const displayAllFoods = allFoods => {
  console.log(allFoods);
  const allDisplayFoods = document.getElementById('allfood-disply');
  allFoods.forEach(foods => {
    console.log(foods);
    const displayAllCard = document.createElement('div');
    displayAllCard.classList.add('py-4', 'mx-8');
    displayAllCard.innerHTML = `
    <div class="card bg-base-100 w-96 h-96 shadow-xl p-2 mx-auto">
  <figure>
    <img
      src="${foods.strMealThumb}"
      alt="foods" />
  </figure>
<h2 class="text-2xl text-gray-700 my-4">Name: ${foods.strMeal}</h2>

<button class="btn btn-success my-2">Detalis</button>
</div>
    `;
    allDisplayFoods.appendChild(displayAllCard);
  });
};

const showAllCard = () => {
  foodsMeals(true, '');
};

const search = () => {
  const searchInput = document.getElementById('search-input').value;
  console.log(searchInput);
}

foodsMeals();
