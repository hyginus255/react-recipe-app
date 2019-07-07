import React, {Component} from 'react';
import recipes from '../tempData';

import NavBar from '../Components/Molecules/NavBar/NavBar';
import GlobalStyles from "../Components/Styles/_global_styles";
import SearchBar from "../Components/Compound/RecipeSearch/RecipeSearch";
import RecipeList from "../Components/Compound/RecipeList/RecipeList";
import Footer from "../Components/Molecules/Footer/Footer";
import RecipeDetails from '../Components/Compound/RecipeDetails/RecipeDetails';


class App extends Component {
  state = {
    recipes : recipes,
    url : "https://www.food2fork.com/api/search?key=6986d75ddbdf856e3cb686faa1c96481&",
    recipe_id : 35382,
    index : 0,
  }

  // async getTopRecipes(){
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes : jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log("something went wrong");
  //   }
    
  // }

  // componentDidMount(){
  //   this.getTopRecipes();
  // }

  renderPage = (index) => {
    switch(index){
      default:
      case 1:
        return(
          <React.Fragment>
            <SearchBar />
            <RecipeList recipes = {this.state.recipes} detailHander = {this.renderDetailHandler}/>
          </React.Fragment>
        )
      case 0 :
        return(<RecipeDetails id={this.state.recipe_id} indexHandler={this.renderIndexHandler}> </RecipeDetails>)
    }
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