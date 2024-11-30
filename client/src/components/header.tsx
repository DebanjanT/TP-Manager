import dtlogo from "/dt-logo.png";

const Header = () => {
  return (
    <>
      <div className="bg-sky-100 font-sans text-xs py-1 px-2">
        <p>
          <span className="font-semibold">LIC :</span> Dibyendu Tewary |{" "}
          <span className="font-semibold">Valid :</span> Lifetime |{" "}
          <span className="font-semibold">Reg On :</span> 28/02/2024
        </p>
      </div>
      <div className="relative flex justify-between items-center px-4 py-1 bg-white border-b shadow">
        <div className="flex justify-start items-center gap-1">
          <a href="https://vite.dev" target="_blank">
            <img src={dtlogo} className="w-10 h-10" alt="DT logo" />
          </a>
          <p className="font-bold">TPManager</p>
        </div>

        <button className="bg-gradient-to-r from-green-700 to-blue-800 border p-3 text-white rounded">
          Search T.P.
        </button>
      </div>
    </>
  );
};

export default Header;
