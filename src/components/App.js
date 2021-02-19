import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },]

  }

  render() {
    
    let filteredCity=this.cityList.filter((city,i)=>(city.country=='India' ));
   
    let updatedList = [...filteredCity];
    return (
      <div id="main">
        <ol>
            {updatedList.map((city,i)=> <li key={`location${i+1}`}>{city.name}(India)</li>)}
        </ol>
        {/* Do not remove the main div */}
      </div>
    )
  }
}


export default App;
