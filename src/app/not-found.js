import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | GTA Vice City Definitive Edition",
  description:
    "Oops! The page you are looking for doesn't exist. Check out the latest news and updates for GTA Vice City Definitive Edition here.",
  keywords: [
    "GTA",
    "Vice City",
    "Definitive Edition",
    "404",
    "game",
    "error",
    "page not found",
    "news",
    "updates",
    "Rockstar Games",
  ],
};

export default function NotFound() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold text-shadow-pink text-white">
            404 Not found page!
          </h1>
          <Link
            href="/"
            className="btn btn-active border-none rounded-full mt-6 text-xl bg-pink-400 text-white"
          >
            Go To Home <i class="fa-solid fa-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
