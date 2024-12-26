import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={"https://i.ibb.co/br2Vcz8/hero01.png"}
            className="max-w-sm"
            width={"500"}
            height={"500"}
            style={{width:"100%" , height:"100%"}}
          />
          <div>
            <h1 className="text-shadow-pink text-5xl text-white font-bold lg:text-start text-center">
              Gta Vice City Definitive Edition!
            </h1>
            <p className="text-shadow-pink py-6 text-white text-xl lg:text-start text-center">
              The enhanced version of the popular Grand Theft Auto Vice City
              game. The enhanced graphics feature more detail and higher
              quality, with improvements to lighting and shadows to make the
              city more realistic and attractive. The gameplay has also been
              updated to include smoother controls, with fixes to old mechanics
              and some tweaks that make the experience more enjoyable. New
              features include improvements to artificial intelligence, as well
              as updates to audio and music to match the aesthetics of the game.
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
