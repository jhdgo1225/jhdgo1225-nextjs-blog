import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { API_URL } from "../../../constants";

async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetail({ params, searchParams }) {
    const { id } = await params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
