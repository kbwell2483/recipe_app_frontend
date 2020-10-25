import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import Recipes from './components/Recipes';
// import Category from './components/Recipes';

export default function App() {
    const [recipes, setRecipes] = useState([])
    const [formInputs, updateFormInputs] = useState({
      name: '',
      first_ingredient: '',
      second_ingredient: '',
      third_ingredient: '',
      category: '',
      instructions: ''
    });
    const getRecipes = async ()=>{
      try{
        const response = await fetch('http://localhost:3000/recipes');
        const data = await response.json();
        setRecipes(data)
      }catch(error){
        console.error(error)
      }
    }
    useEffect(
      ()=>{
        (
          async function (){
             await getRecipes();
          }
        )()
      }, [])
  const handleChange = (event) => {
    const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updateInput)
  }
  
  const handleSubmit  = async (event) =>{
    event.preventDefault()
    try{
      const response = await fetch('http://localhost:3000/recipes',{
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInputs)
      })
      const createdRecipe = await response.json()
      updateFormInputs({
        name: '',
        first_ingredient: '',
        second_ingredient: '',
        third_ingredient: '',
        category: '',
        instructions: ''
      })
      setRecipes([createdRecipe, ...recipes])
    }catch(error){
      console.error(error)

    }
  }  
  return (
    <div className="App">
     
    
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"> 3-Ingredient Recipes</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/breakfast">Breakfast</a></li>
        <li><a href="/lunch">Lunch</a></li>
        <li><a href="/dinner">Dinner</a></li>
        <li><a href="/desserts">Desserts</a></li>
        <li><a href="/drinks">Drinks</a></li>
      </ul>
    </div>
  </nav>
  <div className="container">
  <main>
    <Recipes recipes={recipes} />
    {/* <Category category={recipes.category} /> */}
  </main>

        <div>
          <h1 className="title">Add a Recipe</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Name: </label>
            <input 
            type="text" 
            id="name"
            onChange={handleChange}
            value={formInputs.name}
             />
            <label htmlFor="first_ingredient"> First Ingredient: </label>
            <input 
            type="text" 
            id="first_ingredient"
            onChange={handleChange}
            value={formInputs.first_ingredient} />
            <label htmlFor="second_ingredient"> Second Ingredient: </label>
            <input 
            type="text" 
            id="second_ingredient"
            onChange={handleChange}
            value={formInputs.second_ingredient} />
            <label htmlFor="third_ingredient"> Third Ingredient: </label>
            <input 
            type="text" 
            id="third_ingredient" 
            onChange={handleChange}
            value={formInputs.third_ingredient}/>
            <label htmlFor="category"> Category: </label>
            <input 
            type="text" 
            id="category" 
            onChange={handleChange}
            value={formInputs.category}
            placeholder="Breakfast, Lunch, Dinner Desserts or Drinks"/>
            <label htmlFor="instructions"> Instructions: </label>
  
            
            
            <textarea 
            cols="100" 
            wrap="hard"
            id="instructions"
            onChange={handleChange}
            value={formInputs.instructions}
            ></textarea>
            
      
            <input type="submit" className="submit" />
          
          </form>
        </div>

        <aside>
          
        </aside>
        
      </div>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4 class="white-text">Connect</h4>
                <p class="grey-text text-lighten-4 fa fa-facebook"></p>
                <p class="grey-text text-lighten-4 fa fa-twitter"></p>
                <p class="grey-text text-lighten-4 fa fa-instagram"></p>
                <p class="grey-text text-lighten-4 fa fa-pinterest"></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h4 class="white-text">Learn More</h4>
                <ul>
                  <li><a class="grey-text text-lighten-3" id="footer" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" id="footer" href="#!">Subscribe</a></li>
                  <li><a class="grey-text text-lighten-3" id="footer" href="#!">Contact Us</a></li>
                  <li><a class="grey-text text-lighten-3" id="footer" href="#!">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 3-Ingredient Recipes
            <a class="grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>
    </div>
  );
}


