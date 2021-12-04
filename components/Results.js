import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {results.map((res) => (
        <Thumbnail key={res.id} result={res} />
      ))}
    </div>
  );
}

export default Results;
