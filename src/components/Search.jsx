export default function Search({ handleSearch, query }) {
  return (
    <div className="container pt-5">
      <div className="row ">
        <div className="col-lg-5 mb-3 mx-auto ">
          <div className="mb-3">
            <input
              value={query || ''}
              onChange={handleSearch}
              type="search"
              className="form-control"
              id="keyword"
              placeholder="Cari catatan..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
