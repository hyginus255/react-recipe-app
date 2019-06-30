import React, {Component} from 'react';

import NavBar from '../Components/Molecules/NavBar/NavBar';
import GlobalStyles from "../Components/Styles/_global_styles";
import SearchBar from "../Components/Molecules/SearchBanner/SearchBanner";
import RecipeBanner from "../Components/Molecules/RecipeBanner/RecipeBanner";
import Footer from "../Components/Molecules/Footer/Footer";


class App extends Component {
  render(){
    return(
      <React.Fragment>
        <GlobalStyles/>
        <NavBar />
        <SearchBar />
        <RecipeBanner />
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App