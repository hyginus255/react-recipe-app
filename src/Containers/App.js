import React, {Component} from 'react';
import recipes from '../tempData';

import NavBar from '../Components/Molecules/NavBar/NavBar';
import GlobalStyles from "../Components/Styles/_global_styles";
import SearchBar from "../Components/Molecules/SearchBanner/SearchBanner";
import RecipeBanner from "../Components/Molecules/RecipeBanner/RecipeBanner";
import Footer from "../Components/Molecules/Footer/Footer";


class App extends Component {
  state = {
    recipes : recipes,
    url : "https://www.food2fork.com/api/search?key=6986d75ddbdf856e3cb686faa1c96481&"
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

  render(){
    return(
      <React.Fragment>
        <GlobalStyles/>
        <NavBar />
        <SearchBar />
        <RecipeBanner recipes = {this.state.recipes}/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App