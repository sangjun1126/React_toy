import React, { useState } from "react";
import DiaryEntry from "./DiaryEntry";
import "./Diary.css";

const Diary = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addEntry = () => {
    if (newEntry.trim() !== "") {
      if (editIndex !== null) {
        const updatedEntries = [...diaryEntries];
        updatedEntries[editIndex] = newEntry;
        setDiaryEntries(updatedEntries);
        setEditIndex(null);
      } else {
        setDiaryEntries([...diaryEntries, newEntry]);
      }
      setNewEntry("");
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...diaryEntries];
    updatedEntries.splice(index, 1);
    setDiaryEntries(updatedEntries);
  };

  const editEntry = (index) => {
    setNewEntry(diaryEntries[index]);
    setEditIndex(index);
  };

  return (
    <div className="diary-container">
      <h1>나만의 일기장</h1>
      <textarea
        rows="4"
        cols="50"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
      />
      <button onClick={addEntry}>
        {editIndex !== null ? "수정" : "일기 추가"}
      </button>
      <div className="entries-container">
        {diaryEntries.map((entry, index) => (
          <DiaryEntry
            key={index}
            entry={entry}
            onDelete={() => deleteEntry(index)}
            onEdit={() => editEntry(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Diary;
