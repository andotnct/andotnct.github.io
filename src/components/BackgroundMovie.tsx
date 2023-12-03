const BackgroundMovie = () => {
    return (
        <video className="w-full h-full object-cover fixed" autoPlay loop muted>
            <source src="./bg-movie.mp4" type="video/mp4" />
        </video>
    );
};

export default BackgroundMovie;