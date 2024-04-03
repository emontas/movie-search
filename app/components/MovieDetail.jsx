const MovieDetail = ({ movie }) => {
    const { Title, Year, imdbID, Poster, Plot } = movie;
  
    return (
      <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md">
        <img src={Poster} alt={Title} className="w-40 h-60 object-cover rounded-md" />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-medium">{Title}</h3>
          <p className="text-sm text-gray-500">{Year}</p>
          <p className="mt-2">{Plot}</p>
        </div>
      </div>
    );
  };
  
  export default MovieDetail;
  