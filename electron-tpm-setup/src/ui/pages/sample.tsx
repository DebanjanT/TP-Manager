import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Header from "../components/header";
import { FaDownload, FaTrashCan, FaWpforms } from "react-icons/fa6";

const Sample = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto my-4">
        <h1 className="text-xl font-extrabold">List Of T.P.s</h1>
        <hr />
        <div className="p-0 overflow-scroll ">
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
            <tbody className="">
              <tr>
                <td className="py-2 px-3 border-b border-slate-200 border-r border-r-slate-300">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-700">
                      WB/G-408855/4089
                    </p>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200  border -r border-r-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="text-sm font-semibold text-slate-700">
                        Jitendranath Garai
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200  border -r border-r-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <div className="flex flex-col justify-start items-center text-slate-700">
                        s
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200 border -r border-r-slate-300">
                  <div className="w-max">
                    <p className="text-sm text-slate7500">Hammer</p>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200  border -r border-r-slate-300">
                  <p className="text-sm text-slate-700">Simlapal Range</p>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <p className="text-sm text-slate-700">28th Feb, 2024</p>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <p className="text-sm text-slate-700">28th Feb, 2024</p>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-3 border-b border-slate-200 border-r border-r-slate-300">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-700">
                      WB/G-408855/4089
                    </p>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200  border -r border-r-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="text-sm font-semibold text-slate-700">
                        Jitendranath Garai
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200  border -r border-r-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <div className="flex flex-col justify-start items-center text-slate-700">
                        s
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200 border -r border-r-slate-300">
                  <div className="w-max">
                    <p className="text-sm text-slate7500">Hammer</p>
                  </div>
                </td>
                <td className="py-2 px-3 border-b border-slate-200  border -r border-r-slate-300">
                  <p className="text-sm text-slate-700">Simlapal Range</p>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <p className="text-sm text-slate-700">28th Feb, 2024</p>
                </td>
                <td className="py-2 px-3 border-b border-slate-200">
                  <div className="flex justify-center items-center gap-3">
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                          <FaDownload className="w-5 h-5" />{" "}
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download TP</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                          <FaWpforms className="w-5 h-5" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add an entry</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                          <FaTrashCan className="w-6 h-6 text-red-600 border rounded-full border-red-700 p-1 bg-red-100 " />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete Mother TP</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sample;
