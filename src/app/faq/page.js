export const metadata = {
  title: "GTA Vice City Definitive Edition FAQ - Download Tips & Information",
  description:
    "Find answers to frequently asked questions about downloading GTA Vice City Definitive Edition. Learn about system requirements, download platforms, troubleshooting, and legal considerations.",
  keywords: [
    "GTA Vice City Definitive Edition",
    "GTA Definitive Edition FAQ",
    "GTA download guide",
    "Vice City system requirements",
    "download troubleshooting",
    "Rockstar Games",
    "GTA support",
    "legal game download",
    "Vice City installation tips",
  ],
};

export default function FAQ() {
  return (
    <div className="py-6 px-6 grid grid-cols-1 gap-4">
      <div className="card rounded-none shadow-xl" style={{ width: "100%" }}>
        <div className="card-body">
          <h1 className="card-title text-white text-shadow-pink text-3xl font-bold flex justify-center">
            FAQ ?
          </h1>
          <ul>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse collapse-arrow text-white text-shadow-pink text-2xl"
              >
                <input type="checkbox" />
                <div className="collapse-title">
                  <p>How to install Gta ViceCity Definitive Edition?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-xl py-1">
                    Step 1: Download the game from this website.
                    <br />
                    Step 2: Decompress the file using (
                    <a href="https://www.win-rar.com/" target="_blank">
                      WinRAR
                    </a>
                    ).
                    <br />
                    Step 3: Turn on the install.exe file .
                    <br />
                    step 4: Then follow the installation steps.
                    <br />
                    step 5: Finally , Enjoy to run the game.
                  </p>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse collapse-arrow text-white text-shadow-pink text-2xl"
              >
                <input type="checkbox" />
                <div className="collapse-title">
                  <p>
                    How to fix any Gta ViceCity Definitive Edition&apos;s problem?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-xl py-1">
                    Step 1: Check the requirements.
                    <br />
                    Step 2: Update your graphics card driver.
                    <br />
                    Step 3: Update windows os.
                    <br />
                    step 4: Adjust graphic settings.
                    <br />
                    step 5: Close background programs.
                    <br />
                    step 6: If the problems persist, reinstall the game after
                    deleting all the files or contact technical support (
                    <a
                      href="https://support.rockstargames.com/"
                      target="_blank"
                    >
                      RockStar support
                    </a>
                    ).
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
