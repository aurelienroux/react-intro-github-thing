import React from 'react';

class layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          Copywhat 2016 Kittens
        </footer>
      </div>
    );
  }
}


// class RedBox extends React.Component {
//   render() {
//     return (
//       <div className="red-box">
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default layout;
