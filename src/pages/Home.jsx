import Notes from '../components/Notes';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Search from '../components/Search';

export default function Home({ notes, archiveNote }) {
  const [query, setQuery] = useState('');

  const noteActive = notes.filter((notes) => !notes.archived);

  const filteredNotes = noteActive.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />
      <Search handleSearch={(e) => setQuery(e.target.value)} query={query} />
      <div className="d-flex row flex-wrap px-3 gap-2 justify-content-center ">
        {noteActive.length > 0 ? (
          <Notes notes={filteredNotes} archiveNote={archiveNote} />
        ) : (
          <p className="text-center fw-semibold fs-4">Belum ada catatan</p>
        )}
      </div>
    </div>
  );
}
