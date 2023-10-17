//intial refrences
let result = document.getElementById('result')
let searchBtn = document.querySelector('.search-btn')
let url = MEAL_URL
let userInp = document.getElementById('user-inp').value

searchBtn.addEventListener('click',() =>{
    let userInp = document.getElementById('user-inp').value
    if(userInp.length == 0){
      result.innerHTML = '<h3>Input feild can not be empty</h3>'  
    }else{
fetch(url + userInp).then((res) => res.json()).then((data)=>{


//  console.log(data)
let myMeal =  data.meals[0]

let count = 1;
let ingredients = [];
for(let i in myMeal){
    let ingredient = '';
    let measure = '';
    if(i.startsWith('strIngredient') && myMeal[i]){
ingredient = myMeal[i];
measure = myMeal[`strMeasure` + count]
count  +=1
// console.log(ingredient,measure)
ingredients.push(`${measure}  ${ingredient}`)

    }
}
console.log(ingredients)
result.innerHTML = `<img src=${myMeal.strMealThumb}>
<div class="detail">
<h2>${myMeal.strMeal}</h2>
<h4>${myMeal.strArea}</h4></div>

<div id='ingredient-con'></div></div>

    <div id=recipe>
    <button id="hide-recipe">x</button>
    <pre id='instructions'>${myMeal.strInstructions}</pre>
    </div>
    <button id='show-recipe'>View Recipe</button>`;

let  ingredientCon = document.getElementById('ingredient-con')
let parent = document.createElement('ul')
let recipe = document.getElementById('recipe')
let hideRecipe = document.getElementById('hide-recipe')
let showRecipe = document.getElementById('show-recipe')

ingredients.forEach((ing) => {
    let child  = document.createElement('li')
    child.innerHTML = ing;
    parent.appendChild(child)
    ingredientCon.appendChild(parent)
})
hideRecipe.addEventListener('click',() => {
    recipe.style.display = 'none';
})
showRecipe.addEventListener('click',() => {
    recipe.style.display = 'block'
})


}).catch(() =>{
 result.innerHTML = '<h3> Can not fetch data </h3>'   
})
    }
})

