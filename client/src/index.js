import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// const firstLast = (num, arr) => {
//  const first = arr[0];
//  const last = arr[arr.length - 1];

//  //console.log(num === first || num === last);
//  if (arr.length >= 3 && (num === first || num === last)) {
//   console.log('good job')

// } else {
//   console.log('bad Array')
// }

// firstLast(7, [5, 7, 8, 9, 6])
// firstLast(3, [3, 18, 75, 20, 4])
// firstLast(5, [5, 18])//