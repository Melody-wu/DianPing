import React from 'react'

class App extends React.Component {
    constructor(){
        super();
       // console.log(this.content.history);
    }
    render() {
        return (
           <div>{this.props.children}</div>
        )
    }
}
// class RootContent extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//             <div className='divider'>
//                 {this.props.children}
//             </div>
//         );
//     }
// }
// class App extends React.Component{
//    constructor(props){
//         super(props);
//         console.log(this.props.children)
//    }
//     render(){
//         return (
//          <RootContent>
//              <p>Hello, React</p>
//              <p>Hello, Redux</p>
//              <p>Hello, Facebook</p>
//              <p>Hello, Google</p>
//              </RootContent>
//          );
//      }
//  }

export default App