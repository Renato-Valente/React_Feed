import React from "react";
import content from "./content";
import Navbar from "./components/navbar";



class App extends React.Component{
  render(){

   

    return(
      <div>
        <Navbar />
        {content}
      </div>
    )
  }
}

export default App;
