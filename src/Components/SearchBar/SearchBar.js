import React from 'react';
import './SearchBar.css';


 class SearchBar extends React.Component{
constructor(props){
  super(props);

  this.state = 
  {
    item: ""
  }
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
}
search(){
   this.props.onSearch(this.state.item);
}
handleTermChange(event){
this.setState({ item : event.target.value });

}
    render(){
      return(
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
  <button className="SearchButton">SEARCH</button>
</div>)
    }
 }



 export default SearchBar;