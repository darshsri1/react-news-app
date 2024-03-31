// Import React library
import React, { useState } from 'react'; // Import useState hook

// Import the `Navbar` and `Newsboard` components
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";
import Newsitem from "./components/Newsitem";

// Define the `App` component
const App = () => {
  const [category, setCategory] = useState(""); // State for category selection

  return (
    <div>
      {/* Render the `Navbar` component */}
      <Navbar />
      
      {/* Render the `Newsboard` component and pass the setCategory function */}
      <Newsboard setCategory={setCategory} /> 
      
      {/* Render the `Newsitem` component */}
      <Newsitem/>
    </div>
  );
}

// Export the `App` component
export default App;
