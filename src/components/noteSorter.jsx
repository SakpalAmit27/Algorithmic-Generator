import React, { useState } from "react";
import { insertionSort } from "./insertionSort";
import P5canvas from "./P5canvas";


const MelodySorter = ({ notes }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const [sortedNotes, setSortedNotes] = useState(notes);

  // Handles dropdown selection
  const handleSortSelection = (event) => {
    setSelectedSort(event.target.value);
  };

  // Performs sorting when button is clicked
  const handleSort = () => {
    if (selectedSort === "insertionSort") {
      setSortedNotes(insertionSort([...notes])); // Sorting and updating state
    }
  };

  return (
    <div>
      <label>Choose Sorting Method: </label>
      <select value={selectedSort} onChange={handleSortSelection}>
        <option value="">None</option>
        <option value="insertionSort">Insertion Sort</option>
      </select>

      <button onClick={handleSort} disabled={!selectedSort}>
        Sort Notes
      </button>

      {/* Pass sortedNotes to P5Canvas for rendering */}
      <P5canvas notes={sortedNotes}/>
    </div>
  );
};

export default MelodySorter;
