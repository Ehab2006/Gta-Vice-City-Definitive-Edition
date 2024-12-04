import Image from "next/image";
export const metadata = {
  title:
    "GTA Vice City Definitive Edition Features - Explore Enhanced Gameplay & Graphics",
  description:
    "Discover the upgraded features of GTA Vice City Definitive Edition. Dive into enhanced graphics, reimagined gameplay mechanics, and an immersive open-world experience. Find out why this edition is a must-play!",
  keywords: [
    "GTA Vice City Definitive Edition",
    "Vice City Features",
    "Definitive Edition Gameplay",
    "GTA Enhanced Graphics",
    "Vice City Gameplay Upgrades",
    "Rockstar Games",
    "Open World",
    "Action Game",
    "GTA Series",
  ],
};
export default function Features() {
  let Images = [
    {
      id: 1,
      src: "https://i.ibb.co/TwfsWcx/img01.jpg",
      alt: "Vice city - bulding view.",
    },
    {
      id: 2,
      src: "https://i.ibb.co/9cyL04q/img02.jpg",
      alt: "Gta Vice city - Tommy character.",
    },
    {
      id: 3,
      src: "https://i.ibb.co/7y17KDW/img03.png",
      alt: "Gta Vice city - Tommy with Ken Rosenberg.",
    },
    {
      id: 4,
      src: "https://i.ibb.co/KXktjFT/img04.png",
      alt: "Gta Vice city - Tommy with Ken Rosenberg.",
    },
    {
      id: 5,
      src: "https://i.ibb.co/VjQyhW0/Nhf-K8jv35-EJSf8v-Xnv0j-APzp-Mp-Mpx-E-Kox-EIWPQbm-FUbui-l43-GZ2v8k-GCOf-U38b7w-w2560-h1440-rw.webp",
      alt: "The view of Gta Vice city.",
    },
    {
      id: 6,
      src: "https://i.ibb.co/Cwsy4Wb/U2-z9-T-FKKa-Rp42-ZI6-4-Oi0hc1d93-Wp-Tu-XKv0-KO87-Zd-F2-Rob-L-QH-i-B32-Hvju8-AIz-Ls-w2560-h1440-rw.webp",
      alt: "GTA: Vice City Definitive - Tommy rides motorbike.",
    },
  ];
  return (
    <div className="flex py-10 px-10 w-full flex-col border-opacity-50">
      <h1 className="text-shadow-pink text-3xl mb-6 text-white font-bold text-center">
        Here are the Compare between GTA Vice City & GTA Vice City Definitive
        Edition:
      </h1>
      <div className="flex w-full flex-col mb-6 lg:flex-row">
        <div className="card grid flex-grow place-items-center">
          <Image
            src={"https://i.ibb.co/CmsNkGC/old.png"}
            className="max-w-sm rounded-box border-pink-400 border-4"
            width={"500"}
            height={"500"}
            style={{ width: "100%", height: "100%" }}
            alt="Gta Vice City in 2002"
          />
        </div>
        <div className="divider divider-warning lg:divider-horizontal text-shadow-pink text-white text-xl">
          VS
        </div>
        <div className="card grid flex-grow place-items-center">
          <Image
            src={"https://i.ibb.co/6rPBfVT/new.png"}
            className="max-w-sm rounded-box border-pink-400 border-4"
            width={"500"}
            height={"500"}
            style={{ width: "100%", height: "100%" }}
            alt="Gta Vice City Definitive Edition in 2021"
          />
        </div>
      </div>
      <div className="divider divider-warning">
        <h2 className="text-white text-2xl font-bold text-shadow-pink py-6">
          New from Gta ViceCity
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <ul>
            <li>
              <h3 className="text-white text-2xl font-bold text-shadow-pink py-6">
                <i class="fa-solid fa-angle-right"></i> Graphics Enhancements
              </h3>
              <p className="text-white text-2xl text-shadow-pink">
                1. Improved Lighting: Enhanced global illumination and shadows
                for a more vibrant and realistic look.
                <br />
                2. High-Resolution Textures: Sharper textures for characters,
                vehicles, buildings, and objects.
                <br />
                3. Better Environmental Effects: Enhanced water reflections,
                improved weather effects, and more realistic day-night cycles.
                <br />
                4. Increased Draw Distance: Greater visibility of cityscapes and
                landmarks.
              </p>
            </li>
            <li>
              {" "}
              <h3 className="text-white text-2xl font-bold text-shadow-pink py-6">
                <i class="fa-solid fa-angle-right"></i> Gameplay Upgrades
              </h3>
              <p className="text-white text-2xl text-shadow-pink">
                1. GTA V-Style Controls: Improved targeting, aiming mechanics,
                and weapon wheel for seamless combat.
                <br />
                2. Improved Navigation:
                <br />
                - Modernized mini-maps with the ability to set waypoints.
                <br />
                - Streamlined UI for better user experience.
                <br />
                3. Mission Retry Option: Players can restart missions directly
                without losing significant progress.
              </p>
            </li>
            <li>
              {" "}
              <h3 className="text-white text-2xl font-bold text-shadow-pink py-6">
                <i class="fa-solid fa-angle-right"></i> Audio and Immersion
              </h3>
              <p className="text-white text-2xl text-shadow-pink">
                1. Enhanced Soundtracks: The original music is retained where
                possible, with improved audio quality.
                <br />
                2. Ambient Sounds: More immersive background noises, enhancing
                the tropical feel of Vice City.
              </p>
            </li>
            <li>
              <h3 className="text-white text-2xl font-bold text-shadow-pink py-6">
                <i class="fa-solid fa-angle-right"></i> Platform-Specific
                Features
              </h3>
              <p className="text-white text-2xl text-shadow-pink">
                1. 4K Resolution Support: Available on newer consoles and PCs
                for stunning visuals.
                <br />
                2. NVIDIA DLSS Support: For smoother performance on compatible
                GPUs.
                <br />
                3. Haptic Feedback (PlayStation 5): Enhanced controller
                responses for a more tactile gaming experience.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <div
            className="carousel carousel-center carousel-vertical rounded-box max-w-md space-y-4 p-4"
            style={{ height: "1120px" }}
          >
            {Images.map((i) => {
              return (
                <div key={i.id} className="carousel-item h-150">
                  <Image
                    src={i.src}
                    className="max-w-sm rounded-box border-pink-400 border-4"
                    width={"500"}
                    height={"500"}
                    style={{ width: "100%", height: "200px" }}
                    alt={i.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
