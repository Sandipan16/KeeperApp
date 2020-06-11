import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import Notes from "../note";
import "../styles.css";

export default function App() {
  return (
    <div>
      <Header />
      {Notes.map(note => (
        <Entry key={note.key} title={note.title} desc={note.content} />
      ))}
    </div>
  );
}
