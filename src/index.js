import React from 'react';
import ReactDOM from 'react-dom';

// function MyThing() {
//   return (
//     <React.Fragment>
//       <span> This is America</span>
//       <p> Don't catch you slippin' up</p>
//       <td> Look what I 'm whippin' up </td>
//       <span> This Is A React App</span>
//     </React.Fragment>
//   );
// }

// ReactDOM.render( <MyThing />, document.getElementById('root'));

function Book() {
  return (
  <div className = 'book' >
    <div className = 'title' >
        The Title 
    </div>
    <div className='author'>
      The Author
    </div>
      <ul className='stats'>
        <li className = 'rating'>
          5 Stars
        </li>
        <li className='isbn'>
          12 - 345678 - 910
        </li>
      </ul> 
  </div>

  )
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  );
}

function Data() {
  return (
    <React.Fragment>
      <td>This</td>
      <td>Is</td>
      <td>My-Data</td>
    </React.Fragment>
  );
}  
    // console.log(MyThing())
    
    
ReactDOM.render(<Book />, document.getElementById('root'));

