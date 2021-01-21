import React, { Component } from "react";
import ReactInput from "./components/ReactInput";
import ReactList from "./components/ReactList";

import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from "uuid";

  class App extends Component {

    state = {
      items: [],
      id:uuid(),
      item:'',
      editItem:false,
    };
    handleChange = (e)=>{
      this.setState({
        item:e.target.value
      })
    };
    handleSubmit = (e)=>{
      e.preventDefault();

      const newItem = {
        id:this.state.id,
        title:this.state.item
      }
    


      const updateItems = [...this.state.items,newItem];

      this.setState({
        items:updateItems,
        item:'',
        id:uuid(),
        editItem: false
      });
    };
    clearList = ()=>{
      this.setState({
        items: []
      })
    };
    handleDelete = (id) => {
      const fileredItems = this.state.items.filter(item => item.id !== id);
      this.setState({
        items: fileredItems
      });
    };
    handleEdit = id => {
      const fileredItems = this.state.items.filter(item => item.id !== id);
      
      const selectedItem = this.state.items.find(item => item.id === id);

      console.log(selectedItem);

      this.setState({
        items: fileredItems,
        item: selectedItem.title,
        editItem: true,
        id: id

      });
    }
    render() {
      return(
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                React Input
              </h3>
              <ReactInput 
              item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit = {this.handleSubmit}
              editItem={this.state.editItem}
              />
              <ReactList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit} 
              />
            </div>
          </div>
        </div>
        
      );      
    }  
}

export default App;
