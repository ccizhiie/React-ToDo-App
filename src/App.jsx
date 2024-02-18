import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AddNote from './pages/AddNote';
import { useState } from 'react';
import Detail from './pages/Detail';
import ArsipNote from './pages/ArsipNote';
import { getAllNotes } from './utils/local-data';

const App = () => {
  const allNotes = getAllNotes();

  const [notes, setNotes] = useState(allNotes);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const deleteNotes = notes.filter((note) => note.id !== id);
    setNotes(deleteNotes);
  };

  const archiveNote = (id) => {
    const data = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(data);
  };

  return (
    <Routes>
      <Route
        path={'/'}
        element={<Home notes={notes} archiveNote={archiveNote} />}
      />
      <Route
        path={'/detail/:id'}
        element={
          <Detail
            notes={notes}
            archiveNote={archiveNote}
            deleteNote={deleteNote}
          />
        }
      />
      <Route path={'/addNote'} element={<AddNote createNote={createNote} />} />
      <Route
        path={'/arsip'}
        element={<ArsipNote notes={notes} archiveNote={archiveNote} />}
      />
      <Route path={'/*'} element={<NotFound />} />
    </Routes>
  );
};

export default App;
