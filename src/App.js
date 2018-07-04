import React, { Component } from 'react';
import jsonData from './db.json'

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';

export default class App extends Component {

  state={
    news:jsonData,
    filtered:[],
    headerClass:'header header-empty'

  }

  getKeyword=(event)=>{
    const value=event.target.value===''?'header header-empty':'header header-fill';
    let keyword=(event.target.value).toLowerCase();
    let filtered=this.state.news.filter((item)=>{
      return item.title.toLowerCase().indexOf(keyword)>-1;
    });
    
    this.setState({
      headerClass:value,
      filtered:filtered
    });
    console.log(filtered);
  }

  render() {
    return (
      <div className="App">
        <Header 
          keywords={this.getKeyword} 
          headerClass={this.state.headerClass}
        />
        <NewsList news={this.state.filtered.length===0?this.state.news:this.state.filtered}>
          News List Items
        </NewsList>
      </div>
    );
  }
}

//export default App;
