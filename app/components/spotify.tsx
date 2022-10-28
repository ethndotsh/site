import { clsx } from "clsx";

export async function SpotifyNowPlaying() {
  const nowPlaying = await fetch(`${process.env.URL}/api/spotify`, {
    next: { revalidate: 5 },
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="mt-1 text-sm">
      <svg
        className={clsx(
          nowPlaying.isPlaying ? "animate-bounce-slow" : "",
          "inline mr-1.5 -translate-y-[0.1rem]"
        )}
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
          Listening to{" "}
          <span className="font-medium">
            {nowPlaying.title || "Stranger Things Have Happened"}
          </span>{" "}
          by{" "}
          <span className="font-medium">
            {nowPlaying.artist || "Foo Fighters"}
          </span>
        </a>
      ) : (
        <span>Not listening to anything</span>
      )}
    </div>
  );
}
