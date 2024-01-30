import { useState } from "react"; // Importing useState hook from React
import { Select, SelectOption } from "./Select"; // Importing Select component and SelectOption interface

// Array of options for the Select component
const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  { label: "Sixth", value: 6 },
  { label: "Seventh", value: 7 },
  { label: "Eighth", value: 8 },
];

// Main App component
function App() {
  // State variables to manage selected values for the Select components
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]); // For Select component with multiple selection
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]); // For Select component with single selection

  // Render the JSX
  return (
    <>
      {/* Select component for multiple selection */}
      <Select 
        multiple 
        options={options} 
        value={value1} 
        onChange={o => setValue1(o)} 
      />
      <br />
      {/* Select component for single selection */}
      <Select 
        options={options} 
        value={value2} 
        onChange={o => setValue2(o)} 
      />
    </>
  );
}

// Exporting the App component as default
export default App;

