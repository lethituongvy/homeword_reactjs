// Bài 8 
// import React, {Component} from 'react';
// import './App.css';
// import TodoItem from './components/TodoItem';

// class App extends Component {
//   constructor(){
//     super();
//     this.todoItems = [
//       "Vy xinh gái",
//       "Cô đơn 20 năm",
//       "Yêu dễ thương"
//     ];
//   }
//   render(){
//     return (
//       <div className="App">
//         {
//           this.todoItems.map((item, index)=> <TodoItem key={index} title={item} />)
//         }
//       </div>
//     );
//   }

// }

// export default App;
//bài 10
// import React, { Component } from 'react';
// import './App.css';
// import TodoItem from './components/TodoItem';

// class App extends Component {
//   constructor() {
//     super();
//     this.todoItems = [
//       { title: "Vy xinh gái", isComplete: true },
//       { title: "Cô đơn 20 năm", isComplete: true },
//       { title: "Yêu dễ thương" }
//     ];
//   }
//   render() {

//     return <div className="App">
//       {
//         this.todoItems.length > 0 && this.todoItems.map((item, index) => (
//           <TodoItem key={index} item={item} />
//         ))
//       }
//       {this.todoItems.length === 0 && 'Nothing here'}
//     </div>;

//   }

// }

// export default App;
// bai 13
import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = [
      { title: "Vy xinh gái", isComplete: true },
      { title: "Cô đơn 20 năm", isComplete: true },
      { title: "Yêu dễ thương" }
    ];
  }
  onItemClicked() {

  }
  render() {
    if (this.todoItems.length) {
      const {todoItems} = this.state;
      return <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClicked} />
          ))
        }
        {this.todoItems.length === 0 && 'Nothing here'}
      </div>;
    }
  }

}

export default App;