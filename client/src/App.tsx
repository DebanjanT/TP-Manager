import dtlogo from "/dt-logo.png";
import hammer from "./assets/HAMMER-81.png";
import "./App.css";

function App() {
  return (
    <div>
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

      <div className="container mx-auto my-4">
        <h1 className="text-xl font-extrabold">List Of T.P.s</h1>
        <hr />
        <div className="p-0 overflow-scroll bg-slate-100 ">
          <table className="w-full mt-4 text-left table-auto min-w-max border ">
            <thead className="bg-gradient-to-r from-green-700 to-sky-700 ">
              <tr>
                <th className="p-4 transition-colors cursor-pointer border-y border-r border-slate-200 ">
                  <p className="flex items-center justify-between gap-2  text-sm font-normal leading-none text-slate-50">
                    R.T. Number
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-r border-slate-200 ">
                  <p className="flex items-center justify-between gap-2  text-sm font-normal leading-none text-slate-50">
                    Buyer Name
                  </p>
                </th>

                <th className="p-4 transition-colors cursor-pointer border-y border-r border-slate-200 ">
                  <p className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-50">
                    Total Items Count
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-r border-slate-200 ">
                  <p className="flex items-center justify-between gap-2  text-sm  font-normal leading-none text-slate-50">
                    Hammer
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 ">
                  <p className="flex items-center justify-between gap-2  text-sm  font-medium leading-none text-slate-50">
                    Source Location
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 ">
                  <p className="flex items-center justify-between gap-2  text-sm  font-medium leading-none text-slate-50">
                    Data Entry
                  </p>
                </th>
                <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 ">
                  <p className="flex items-center justify-between gap-2  text-sm  font-normal leading-none text-slate-500"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 border-b border-slate-200">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-700">
                      WB/G-408855/4089
                    </p>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200 border-r">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="text-sm font-semibold text-slate-700">
                        Jitendranath Garai
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200 border-r">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <div className="flex flex-col justify-start items-center">
                        s
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <div className="w-max">
                    <img
                      src={hammer}
                      alt="John Michael"
                      className="relative inline-block h-12 w-12  object-cover object-center bg-white"
                    />
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <p className="text-sm text-slate-500">Simlapal Range</p>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <p className="text-sm text-slate-500">28th Feb, 2024</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
