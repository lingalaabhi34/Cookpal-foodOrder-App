const recipes=[
     {
    "name": "Veggie Delight",
    "imageSrc": "https://source.unsplash.com/random?veggies",
    "time": "30 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Chicken Grill",
    "imageSrc": "https://source.unsplash.com/random?chicken",
    "time": "45 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Cheese Pizza",
    "imageSrc": "https://source.unsplash.com/random?pizza",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.1
},
{
    "name": "Steak",
    "imageSrc": "https://source.unsplash.com/random?steak",
    "time": "60 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.7
},
{
    "name": "Grilled Salmon",
    "imageSrc": "https://source.unsplash.com/random?salmon",
    "time": "50 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Tomato Pasta",
    "imageSrc": "https://source.unsplash.com/random?pasta",
    "time": "35 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.0
},
{
    "name": "Vegan Salad",
    "imageSrc": "https://source.unsplash.com/random?salad",
    "time": "20 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.9
},
{
    "name": "Fried Chicken",
    "imageSrc": "https://source.unsplash.com/random?friedChicken",
    "time": "55 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Mushroom Risotto",
    "imageSrc": "https://source.unsplash.com/random?risotto",
    "time": "45 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.5
},
{
    "name": "Burger",
    "imageSrc": "https://source.unsplash.com/random?burger",
    "time": "30 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.2
},
{
    "name": "Paneer Tikka",
    "imageSrc": "https://source.unsplash.com/random?paneerTikka",
    "time": "40 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.4
},
{
    "name": "BBQ Ribs",
    "imageSrc": "https://source.unsplash.com/random?ribs",
    "time": "70 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.6
},
{
    "name": "Caesar Salad",
    "imageSrc": "https://source.unsplash.com/random?caesarSalad",
    "time": "25 min",
    "type": "veg",
    "isLiked": false,
    "rating": 3.8
},
{
    "name": "Fish Tacos",
    "imageSrc": "https://source.unsplash.com/random?fishTacos",
    "time": "35 min",
    "type": "non-veg",
    "isLiked": false,
    "rating": 4.3
},
{
    "name": "Chocolate Cake",
    "imageSrc": "https://source.unsplash.com/random?chocolateCake",
    "time": "90 min",
    "type": "veg",
    "isLiked": false,
    "rating": 4.9
}];
  
  const recipeContainer = document.querySelector("#recipeContainer");
  const searchInput = document.querySelector("#searchInput");
  const showAllBtn = document.querySelector("#showAllBtn");
  const showVegBtn = document.querySelector("#showVegBtn");
  const showNonVegBtn = document.querySelector("#showNonVegBtn");
  const ratingAboveRadio = document.querySelector("#ratingAbove");
  const ratingBelowRadio = document.querySelector("#ratingBelow");
function generateRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    card.appendChild(image);
    const type = document.createElement("p");
    type.textContent = `${recipe.type}`;
    card.appendChild(type);
    const rating = document.createElement("p");
    rating.textContent = `⭐ ${recipe.rating}`;
    card.appendChild(rating);
    const name = document.createElement("h3");
    name.textContent = recipe.name;
    card.appendChild(name);
    const time = document.createElement("p");
    time.textContent = `${recipe.time}`;
    card.appendChild(time);
    const likeButton = document.createElement("span");
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", () => {
      recipe.isLiked = !recipe.isLiked;
      likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";
    });
    likeButton.textContent = recipe.isLiked ? "❤️" : "🤍";
card.appendChild(likeButton);
    recipeContainer.appendChild(card);
  }
  
  function filterRecipes(searchQuery) {
    recipeContainer.innerHTML = "";
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    filteredRecipes.forEach((recipe) => {
      generateRecipeCard(recipe);
    });
  }
  searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    filterRecipes(searchQuery);
  });
  function toggleRecipeDisplay(type) {
    recipeContainer.innerHTML = "";
    let filteredRecipes;
    if (type === "all") {
      filteredRecipes = recipes;
    } else {
      filteredRecipes = recipes.filter((recipe) => recipe.type === type);
    }
    filteredRecipes.forEach((recipe) => {
      generateRecipeCard(recipe);
    });
  }
  showAllBtn.addEventListener("click", () => toggleRecipeDisplay("all"));
  showVegBtn.addEventListener("click", () => toggleRecipeDisplay("veg"));
  showNonVegBtn.addEventListener("click", () => toggleRecipeDisplay("non-veg"));
  function filterRecipesByRating() {
    recipeContainer.innerHTML = "";
    let filteredRecipes;
    if (ratingAboveRadio.checked) {
      filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
    } else if (ratingBelowRadio.checked) {
      filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
    } else {
      filteredRecipes = recipes;
    }
    filteredRecipes.forEach((recipe) => {
      generateRecipeCard(recipe);
    });
  }
  ratingAboveRadio.addEventListener("change", filterRecipesByRating);
  ratingBelowRadio.addEventListener("change", filterRecipesByRating);
  recipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });