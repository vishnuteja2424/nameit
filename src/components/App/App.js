import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import ResultContainer from './../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

// A class based component
class App extends React.Component {

    state = {
        headerExpanded: true,
        suggestedNames: []
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : []
        });
    };
    
    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}

// function App () {
//     return <h1>This is my functional component</h1> //A functional component
// }

export default App;


//state and props
// state = {
//         headerText: "Hello World"
//     };

// <h3>{this.state.headerText}</h3>
//                 <button 
//                     onClick={() => {
//                         this.state.headerText = 'Did Magic happen?';
//                         console.log(this.state.headerText); // updating state manually do no trigger rerendering
//                     }}>Magic here
//                 </button>
//                 <button 
//                     onClick={() => {
//                         this.setState({
//                             headerText: "Its the new headerText"
//                         })
//                     }}>Magic here
//                 </button>