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
                href="https://s421vla.storage.yandex.net/rdisk/44f3a194da726acaa3cd8329d6490c15e1491344d2eadb43379990cc474da32b/675076f4/J00YuEGVzxb4DpQA3xTzAer6lQEHgV8r7lChfJpyzXQIlj8GvFj5VRKs1gmlLoBMqhpUy42N__X8XmcOzK0NxA==?uid=1503153631&filename=GTA-Vice-City-Definitive-Edition.zip&disposition=attachment&hash=&limit=0&content_type=application%2Fzip&owner_uid=1503153631&fsize=10153871827&hid=16b4c72f980d2ec230aa2992f34cf33b&media_type=compressed&tknv=v2&etag=a91752502a96a62bddcb294bb67c0f6b&ts=628738b14a500&s=2ab45019b82f316d3db2999963692db95cce3cb8693372be83fb6c391f19dafe&pb=U2FsdGVkX197URxLrM8nP2-WNmjPBndcgWKueASs9jqt6NdycRRGYSk6HmEfMhvTzhyaho98xSqy-2yQWMF8Lu1buxyZiFJiceHHsILCEVY"
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
