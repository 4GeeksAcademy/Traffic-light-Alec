//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "/workspaces/Traffic-light-Alec/src/styles/index.css";

//import your own components
import TrafficLight from "./component/TrafficLight.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<TrafficLight/>);

