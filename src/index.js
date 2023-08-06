import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";
import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);

// https://urldefense.com/v3/__http://www.omdbapi.com/?i=tt3896198&apikey=3bbfb2b0__;!!JYXjzlvb!m1rbBDAYXo657dSO4fQMbtg_ykbxpK7VUkW32n9daL4HlbwOvlo_xy9TrHzbqAMsjJNro4fTjI7sLbKlHRv2tMqm9tSfiXk$
