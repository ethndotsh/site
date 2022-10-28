export async function SpotifyNowPlaying() {
  const nowPlaying = await fetch("http://localhost:3000/api/spotify").then(
    (res) => res.json()
  );

  console.log(nowPlaying);

  return (
    <div className="mt-1 text-sm">
      <svg
        className="inline mr-1.5 -translate-y-[0.1rem] animate-bounce2"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.2em"
        width="1.2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
      {nowPlaying.isPlaying ? (
        <a href={nowPlaying.songUrl}>
          Listening to {nowPlaying.compiledString}
        </a>
      ) : (
        <span>Not listening to anything</span>
      )}
    </div>
  );
}
