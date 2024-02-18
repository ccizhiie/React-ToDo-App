import { Link } from 'react-router-dom';
import ArsipButton from './button/ArsipButton';
import { useNavigate } from 'react-router-dom';

export default function Notes({ notes, archiveNote }) {
  const navigate = useNavigate();

  const handleArchive = (id) => {
    archiveNote(id);
    navigate('/');
  };

  return (
    <>
      {notes.map((note, i) => (
        <div className="col-lg-4 mb-3" key={i}>
          <div className="card border-0 shadow ">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>

              <p className="card-text">{note.body}</p>
              <div className="d-flex justify-content-between align-items-end  ">
                <div>
                  <p
                    className="text-muted fst-italic "
                    style={{ fontSize: '.7rem' }}
                  >
                    {note.createdAt}
                  </p>
                </div>
                <div className="d-flex gap-1">
                  <Link
                    to={`/detail/${note.id}`}
                    className=" btn btn-primary fs-6 "
                  >
                    Lihat
                  </Link>
                  <ArsipButton handleArchive={() => handleArchive(note.id)}>
                    {note.archived ? 'Batal Arsip' : 'Arsipkan'}
                  </ArsipButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
