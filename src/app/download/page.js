import Image from "next/image";

export const metadata = {
  title:
    "Download GTA Vice City Definitive Edition - Free PC & Console Edition",
  description:
    "Explore the world of GTA Vice City Definitive Edition. Learn how to get the game legally, discover tips, cheats, and everything you need to enhance your gaming experience.",
  keywords: [
    "GTA Vice City Definitive Edition",
    "GTA download free",
    "Grand Theft Auto Vice City",
    "remastered GTA game",
    "Vice City PC download",
    "GTA Definitive Edition download",
    "action-adventure games",
    "free GTA game",
  ],
};

export default function Download() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={"https://i.ibb.co/LJv56KG/hero02.png"}
            className="max-w-sm"
            width={"500"}
            height={"500"}
            style={{ width: "100%", height: "100%" }}
            alt="Gta Vice City - Phil Cassidy with Gun"
          />
          <div>
            <h1 className="text-shadow-pink text-5xl text-white font-bold lg:text-start text-center">
              Download Gta Vice City Definitive Edition!
            </h1>
            <p className="text-shadow-pink py-6 text-white text-xl lg:text-start text-center">
              Easily download GTA Vice City Definitive Edition.
            </p>
            <p className="text-shadow-pink text-white text-xl lg:text-start text-center">
              OS: Windows 10 (64-bit).
              <br />
              Storage: 20 GB of available space.
            </p>
            <p className="text-shadow-pink py-6 text-white text-xl lg:text-start text-center">
              <i class="fa-solid fa-circle-check mr-2"></i>Agree to the terms of
              use or privacy policy of the site.
            </p>
            <div className="flex lg:justify-start justify-center">
              <a
                href="https://pixeldrain.com/api/file/vcJmSrS9?download"
                className="btn btn-active border-none rounded-full text-xl bg-pink-400 text-white"
              >
                Download Now <i class="fa-solid fa-circle-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
