import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center items-center dark:bg-black dark:!text-white">
        <div className="w-[60%] lg:w-[40%] flex gap-2 flex-col dark:bg-black dark:!text-white">
          <div className="flex gap-4 items-center">
            <Image
              height="112"
              width="74"
              alt="profile picture"
              src="/img/pfp.png"
              className="object-cover h-28 w-28 hidden md:block rounded-lg"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl">curse.</h1>
              <p className="text-md h-full opacity-70 dark:opacity-100 dark:text-[#CCCCCC]">
                Canadian high school student creating masterpieces with the most
                bleeding-edge tools. Full-stack developer primarily focused on{" "}
                <span className="font-bold text-[#347CC4]">TypeScript</span>,{" "}
                <span className="font-bold text-black dark:text-white">
                  Next ▲
                </span>{" "}
                and{" "}
                <span className="font-bold text-[#74CCDC] dark:text-[#6CD4E4]">
                  Golang
                </span>
                .
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a href="https://github.com/cursecodes">
              <div className="text-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:bg-opacity-100 text-xl hover:bg-[#4501ad] p-2 rounded-md transition-all duration-300 hover:text-white bg-opacity-70">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a href="https://www.buymeacoffee.com/cursecode">
              <div className="text-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:bg-opacity-100 text-xl hover:bg-[#4501ad] p-2 rounded-md transition-all duration-300 hover:text-white bg-opacity-70">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </a>
            <a href="mailto:hi@cursecode.me">
              <div className="text-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:bg-opacity-100 text-xl hover:bg-[#4501ad] p-2 rounded-md transition-all duration-300 hover:text-white bg-opacity-70">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
