import type { TMovie } from "../../api/movie/type";
import { getImageUrl } from "../../utils/getImageUrl";

const MovieHorizontalCard2 = ({
	movie,
	isMatched,
}: { movie: TMovie; isMatched: boolean }) => {
	return (
		<div
			key={movie.id}
			className={`transition-all border-1 rounded-md border-solid overflow-hidden flex ${
				isMatched ? "" : "hidden"
			}`}
		>
			<img
				loading="lazy"
				src={getImageUrl(movie.poster_path)}
				alt={movie.title}
				className="movie-poster h-48 w-40 object-cover aspect-video fade-in-image"
			/>
			<div className="flex flex-col gap-2 grow p-4">
				<p className="font-semibold">{movie.title}</p>
				<p>Vote: {movie.vote_average}</p>
				<p className="line-clamp-4">OverView:{movie.overview}</p>
			</div>
		</div>
	);
};

export default MovieHorizontalCard2;
