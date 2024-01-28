import React from "react";

const DiaryEntry = ({ entry, onDelete, onEdit }) => {
  return (
    <div className="diary-entry">
      <p>{entry}</p>
      <button onClick={onEdit}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default DiaryEntry;
