export const metadata = {
  title: "GTA Vice City: The Definitive Edition System Requirements",
  description:
    "Check out the official system requirements for GTA Vice City: The Definitive Edition. Make sure your PC or console is ready for the thrilling adventure of Vice City with updated graphics and improved gameplay!",
  keywords: [
    "GTA Vice City",
    "Vice City",
    "system requirements",
    "GTA Vice City Definitive Edition",
    "game requirements",
    "PC",
    "console",
    "system specs",
    "GTA",
    "gaming",
    "video game requirements",
  ],
};

export default function Requirements() {
  return (
    <div className="flex py-10 px-10 w-full flex-col border-opacity-50">
      <h1 className="text-shadow-pink text-3xl text-white font-bold text-center">
        Here are the full system requirements for GTA Vice City Definitive
        Edition:
      </h1>
      <h2 className="divider divider-warning place-items-center text-shadow-pink py-6 text-white text-xl">
        Suggested Requirements
      </h2>
      <p className="card grid place-items-center text-shadow-pink py-6 text-white text-xl">
        Operating System: Windows 10 (64-bit)
        <br />
        Processor: Intel Core i7-2700K or AMD Ryzen 5 2600
        <br />
        Memory: 16 GB RAM
        <br />
        Graphics: NVIDIA GeForce GTX 970 (4GB) or AMD Radeon RX 570 (4GB)
        <br />
        DirectX: Version 11
        <br />
        Storage: 45 GB available space
      </p>
      <h2 className="divider divider-warning place-items-center text-shadow-pink py-6 text-white text-xl">
        Minimum Requirements
      </h2>
      <p className="card grid place-items-center text-shadow-pink py-6 text-white text-xl">
        Operating System: Windows 10 (64-bit)
        <br />
        Processor: Intel Core i5-6600K or AMD FX-6300
        <br />
        Memory: 8 GB RAM
        <br />
        Graphics: NVIDIA GeForce GTX 760 (2GB) or AMD Radeon R9 280 (3GB)
        <br />
        DirectX: Version 11
        <br />
        Storage: 45 GB available space
      </p>
    </div>
  );
}
