import React, { useContext } from "react";
import { NoteCard } from "../components";
import { NoteContext } from "../Context/NoteContex";

function Home() {
  const { note } = useContext(NoteContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-30 max-sm:px-10 my-10">
      {note.map((item, index) => (
        <NoteCard key={index} data={item} />
      ))}
    </div>
  );
}

export default Home;
