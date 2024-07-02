document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    fetchRecipes(query);
});

async function fetchRecipes(query) {
    try {
        const response = await fetch(https://api.example.com/recipes?search=${query});
        const data = await response.json();
        displayRecipes(data.recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeDiv.appendChild(recipeImage);
        
        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;
        recipeDiv.appendChild(recipeTitle);
        
        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeDiv.appendChild(recipeDescription);
        
        recipeContainer.appendChild(recipeDiv);
    });
}