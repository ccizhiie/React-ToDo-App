import Navbar from '../components/Navbar';
import Notes from '../components/Notes';

export default function ArsipNote({ notes, archiveNote }) {
  const noteArchive = notes.filter((notes) => notes.archived);

  return (
    <div className="container">
      <Navbar />
      <div className="row py-5 d-flex gap-2 justify-content-center ">
        {noteArchive.length > 0 ? (
          <Notes notes={noteArchive} archiveNote={archiveNote} />
        ) : (
          <p className="text-center fw-semibold fs-5">
            Belum ada notes yang di arsipkan
          </p>
        )}
      </div>
    </div>
  );
}
