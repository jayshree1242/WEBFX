// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Filename - App.js

import React from "react";
import "./App.css";
import Footer from "./components/Footer.js";
function App() {
	return (
		<div>
			<div
				style={{
					minHeight: "400px",
					color: "green",
				}}
			>
				<h1></h1>
			</div>
			<Footer />
		</div>
	);
}

export default App;
