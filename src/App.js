import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            welcomeMessage: 'Welcome to the React App',
            appClass: 'App-header',
            ajaxRes: '',
            currentPage: 'page1'
        }
        this.changeClass = this.changeClass.bind(this);

    }

  render() {

      var currentPage = this.state.currentPage;
      let page;

      if(currentPage === 'page1'){
          page = <Page1/>
      } else if(currentPage === 'page2'){
          page = <Page2/>
      } else {
          page = <Page404/>
      }

    return (
      <div className="App">
      <h1>The current Page is {this.state.currentPage}</h1>
        <header className={this.state.appClass}>
        <ul>
            <li onClick={this.changePage.bind(this, 'page1')}>Page 1</li>
            <li onClick={this.changePage.bind(this, 'page2')}>Page 2</li>
        </ul>
        <hr/>
          <h1 className="App-title">{this.state.welcomeMessage}</h1>

          {page}

        </header>
        <div className="button" onClick={this.changeClass}>
            <h4>Change the style</h4>
        </div>
      </div>
    );
  }

  changeClass(){
      this.setState({
          appClass: 'alt-header'
      })
  }

  changePage(pageNumber){
      this.setState({
          currentPage: pageNumber
      })
  }


}

class Page1 extends Component {
    render() {
      return (
        <div>
            <h2>Page 1</h2>
            <p>THis is the content of page 1</p>
        </div>
      );
    }
}

class Page2 extends Component {
    render() {
      return (
        <div>
            <h2>Page 2</h2>
            <p>THis is the content of page 2</p>
            <p>This page is longer</p>
        </div>
      );
    }
}

class Page404 extends Component {
    render() {
      return (
        <div>
            <h2>404</h2>
            <p>Page not found</p>
        </div>
      );
    }
}
















export default App;
