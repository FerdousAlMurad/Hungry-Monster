document.getElementById('search-btn').addEventListener('click', () => {
    const foodName = document.getElementById('input-fields').value;
    if (foodName == "") {
        document.getElementById('input-validation').innerText = 'Something went Wrong!! please try again';
    }
    else {
        url(foodName);
    }

})

const url = foodName => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => displayFood(data))
}

const displayFood = foodData => {
    const mealItemsField = document.getElementById('meal-items-field');
    mealItemsField.innerHTML = "";
    const foodDataArray = foodData.meals;

    if (foodDataArray === null) {
        document.getElementById('input-validation').innerText = `not found`;
        document.getElementById('ingredients-fields').innerHTML = "";
    }
    else {
        foodDataArray.forEach(mealInformation => {
            const card = document.createElement('div');
            card.className = 'card shadow m-2';
            const cardInfo = `
            <img src="${mealInformation.strMealThumb}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${mealInformation.strMeal}</h5>
            <a onclick="showIngredients('${mealInformation.strMeal}')" href="#ingredients-fields" class="stretched-link"></a>
            </div>
             `
            card.innerHTML = cardInfo;
            mealItemsField.appendChild(card);
            document.getElementById('input-validation').innerText = "";
            document.getElementById('ingredients-fields').innerHTML = "";
        });
    }

}

const showIngredients = mealInformation => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInformation}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredients(data.meals[0]))
}

const renderIngredients = ingredient => {
    const ingredientsPart = document.getElementById('ingredients-fields');

    if (ingredient.strIngredient5 === "null" || ingredient.strIngredient5 === "",
        ingredient.strIngredient6 === "null" || ingredient.strIngredient6 === "",
        ingredient.strIngredient7 === "null" || ingredient.strIngredient7 === "") {
        ingredientsPart.innerHTML = `
        <img src="${ingredient.strMealThumb}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${ingredient.strMeal}</h5>
        <h6 class="text-info">Ingredients</h6>
        <ul type ="square">
           <li>${ingredient.strIngredient1}</li>
           <li>${ingredient.strIngredient2}</li>
           <li>${ingredient.strIngredient3}</li>
           <li>${ingredient.strIngredient4}</li>
        </ul>
        </div>
        `
    }
    else if (ingredient.strIngredient8 === "null" || ingredient.strIngredient8 === "",
        ingredient.strIngredient9 === "null" || ingredient.strIngredient9 === "",
        ingredient.strIngredient10 === "null" || ingredient.strIngredient10 === "") {
        ingredientsPart.innerHTML = `
        <img src="${ingredient.strMealThumb}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${ingredient.strMeal}</h5>
        <h6 class="text-info">Ingredients</h6>
        <ul type ="square">
           <li>${ingredient.strIngredient1}</li>
           <li>${ingredient.strIngredient2}</li>
           <li>${ingredient.strIngredient3}</li>
           <li>${ingredient.strIngredient4}</li>
           <li>${ingredient.strIngredient5}</li>
           <li>${ingredient.strIngredient6}</li>
           <li>${ingredient.strIngredient7}</li>
        </ul>
        </div>
        `
    }
    else {
        ingredientsPart.innerHTML = `
    <img src="${ingredient.strMealThumb}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${ingredient.strMeal}</h5>
    <h6 class="text-info">Ingredients</h6>
    <ul type ="square">
       <li>${ingredient.strIngredient1}</li>
       <li>${ingredient.strIngredient2}</li>
       <li>${ingredient.strIngredient3}</li>
       <li>${ingredient.strIngredient4}</li>
       <li>${ingredient.strIngredient5}</li>
       <li>${ingredient.strIngredient6}</li>
       <li>${ingredient.strIngredient7}</li>
       <li>${ingredient.strIngredient8}</li>
       <li>${ingredient.strIngredient9}</li>
       <li>${ingredient.strIngredient10}</li>
    </ul>
    </div>
    `
    }
}