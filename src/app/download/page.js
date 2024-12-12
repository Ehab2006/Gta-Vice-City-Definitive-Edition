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
                href="https://s579vla.storage.yandex.net/rdisk/fa00aeb6a8b3f0e26cad08a65baee723d6500c731a71033628c3bd4d568bee52/675ae294/v-15KkitP4d6CGgtD7rdlRkK3SXroTOydEId0ANKtF09SRxADxRIqNlTX31TomrzdDrdJkTbUtDtebpzj42ZEw==?uid=1430612300&filename=GTA-Vice-City-Definitive-Edition-DirectForGames.com.zip&disposition=attachment&hash=&limit=0&content_type=application%2Fzip&owner_uid=1430612300&fsize=10153880887&hid=d4a91ee39de6756e9133e09dbcbe381d&media_type=compressed&tknv=v2&etag=e95ab4a78e5d7892b323ce20d699f42b&ts=629128bcecd00&s=f62fb430541c7064fbae973fe5a1af8df4a74b443734a3250aaa715e445527be&pb=U2FsdGVkX18x6HpqVYBVZc6m73qJ29j02WDL4L6sYaw3HXnPV3RVwSzjTIlllVCd0wSQnDIpZtlv2D8La3FnrEg6oao27ET7kwCxdvwy460"
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
