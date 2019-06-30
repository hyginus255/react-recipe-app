import React, {Component} from 'react';

import NavBar from '../Components/Molecules/NavBar/NavBar';
import GlobalStyles from "../Components/Styles/_global_styles";
import SearchBar from "../Components/Molecules/SearchBanner/SearchBanner";
import RecipeBanner from "../Components/Molecules/RecipeBanner/RecipeBanner";


class App extends Component {
  render(){
    return(
      <React.Fragment>
        <GlobalStyles/>
        <NavBar />
        <SearchBar />
        <RecipeBanner />
      </React.Fragment>
    )
  }
}

export default App