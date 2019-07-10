import React, {Component} from 'react';
// import recipes from '../tempData';

import NavBar from '../Components/NavBar/NavBar';
import GlobalStyles from "../Components/Styles/_global_styles";
import SearchBar from "../Components/RecipeSearch/RecipeSearch";
import RecipeList from "../Components/RecipeList/RecipeList";
import Footer from "../Components/Footer/Footer";
import RecipeDetails from '../Components/RecipeDetails/RecipeDetails';


class App extends Component {

  state = {
    recipes : [],
    url : "https://www.food2fork.com/api/search?key=c840b3ccc49e0bdf6903a413f72fa38d",
    base_url : "https://www.food2fork.com/api/search?key=c840b3ccc49e0bdf6903a413f72fa38d",
    recipe_id : 35382,
    index : 1,
    search: '',
    query: '&q=',
    error: '',
    test_api : '7ad5d20837888d331ed0c0d1e3f589f1'
  }

  async getTopRecipes(){
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0){
        this.setState(()=>{
          return {error:"Recipe not found.... try another recipe, thanks!!!"}
        })
      }else{
        this.setState(()=>{
          return {
            recipes : jsonData.recipes
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  componentDidMount(){
    this.getTopRecipes();
  }

  renderIndexHandler = (index) => {
    this.setState({
      index: index
    })
  }

  renderDetailHandler = (index,id) => {
    this.setState({
      index: index,
      recipe_id : id
    })
  }

  searchChangeHandler = (e) => {
    this.setState({
      search : e.target.value
    })
    //console.log("search change");
  }


  searchSubmitHandler = (e) => {
    e.preventDefault() ;
    const {search,query,base_url} = this.state;
    this.setState(()=>{
      return(
        {
          url : `${base_url}${query}${search}`,
          search : ""
        }
      )
    },()=>{
      this.getTopRecipes();
    })
  }

  renderPage = (index) => {
    switch(index){
      default:
      case 1:
        return(
          <React.Fragment>
            <SearchBar value = {this.state.search} searchChangeHandler = {this.searchChangeHandler}  searchSubmitHandler = {this.searchSubmitHandler} />
            <RecipeList error={this.state.error} recipes = {this.state.recipes} detailHandler = {this.renderDetailHandler}/>
          </React.Fragment>
        )
      case 0 :
        return(<RecipeDetails id={this.state.recipe_id} indexHandler={this.renderIndexHandler}> </RecipeDetails>)
    }
  }

  render(){
    return(
      <React.Fragment>
        <GlobalStyles/>
        <NavBar />
        {this.renderPage(this.state.index)}
        <Footer/>
      </React.Fragment>
    )
  }

}

export default App