export default function ArsipButton({ children, handleArchive }) {
  return (
    <button onClick={handleArchive} className="btn btn-warning " type="button">
      {children}
    </button>
  );
}
