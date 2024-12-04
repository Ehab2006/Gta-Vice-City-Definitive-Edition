export const metadata = {
  title: "Contact Us - GTA Vice City Definitive Edition Fan Site",
  description:
    "Get in touch with us for any inquiries about the GTA Vice City Definitive Edition fan community, updates, and support.",
  keywords: [
    "GTA Vice City",
    "Vice City Definitive Edition",
    "contact",
    "fan site",
    "GTA community",
    "game updates",
    "support",
  ],
};
export default function Contact() {
  return (
    <div className="flex py-10 px-10 w-full flex-col border-opacity-50">
      <h1 className="text-shadow-pink text-3xl text-white font-bold text-center">
        Contact us:
      </h1>
      <h2 className="divider divider-warning place-items-center text-shadow-pink py-6 text-white text-xl">
        HOoBs developer ( ME )
      </h2>
      <ul>
        <li>
          <p className="text-shadow-pink text-white text-xl">
            My name is called Ehab George.I am web
            <br />
            developer and publisher for this website.
          </p>
        </li>
        <li>
          <a href="https://www.hoobs-portfolio.web.app" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-solid fa-user mr-2"></i>Portfolio:
              https://www.hoobs-portfolio.web.app
            </p>
          </a>
        </li>
        <li>
          <a href="mailto:ehabgoo2006@gmail.com" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-solid fa-envelope mr-2"></i>Email:
              ehabgoo2006@gmail.com
            </p>
          </a>
        </li>
        <li>
          <a href="tel:01097958700" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-brands fa-square-whatsapp mr-2"></i>WhatsApp: +20
              01097958700
            </p>
          </a>
        </li>
        <li>
          <a href="https://github.com/Ehab2006" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-brands fa-github mr-2"></i>GitHub:
              https://github.com/Ehab2006
            </p>
          </a>
        </li>
      </ul>
      <h2 className="divider divider-warning place-items-center text-shadow-pink py-6 text-white text-xl">
        Rockstar ( GAME )
      </h2>
      <ul>
        <li>
          <a href="https://www.rockstargames.com" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-solid fa-globe mr-2"></i>Website:
              https://www.rockstargames.com
            </p>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/RockstarGames" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-brands fa-twitter mr-2"></i>Twitter:
              https://twitter.com/RockstarGames
            </p>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/rockstargames" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-brands fa-facebook mr-2"></i>Facebook:
              https://www.facebook.com/rockstargames
            </p>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/RockstarGames" target="_blank">
            <p className="text-shadow-pink text-white text-xl">
              <i class="fa-brands fa-youtube mr-2"></i>YouTube:
              https://www.youtube.com/user/RockstarGames
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}
