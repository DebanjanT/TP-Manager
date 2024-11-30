import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header badge="TPM Setup" />
      <div className="container mx-auto mt-8 mb-6 max-w-xl px-3 md:px-0">
        <h1 className="text-xl font-bold text-center text-slate-700">
          Application Account Registration
        </h1>
        <div className="my-2 bg-yellow-200 p-2 rounded-lg">
          <p className="text-sm text-yellow-900">
            You can only create 1 superuser. You have to either delete it or
            change the password using recovery code(will be provided after
            registration)
          </p>
        </div>
        <div className="my-3">
          <div className="bg-green-700 p-1 mb-2 mt-4 text-white">
            <p>Superuser Details</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-sky-700">Username</p>
            <input
              placeholder="superuser name"
              type="text"
              className="w-full py-2 px-1 border text-slate-600 "
            />
          </div>
          <div className="mb-2">
            <p className="font-semibold text-sky-700">Password</p>
            <input
              placeholder="********"
              type="password"
              className="w-full py-2 px-1 border text-slate-600 "
            />
          </div>
          <div className="mb-2">
            <p className="font-semibold text-sky-700">Confirm Password</p>
            <input
              placeholder="********"
              type="password"
              className="w-full py-2 px-1 border text-slate-600 "
            />
          </div>
          <div className="bg-green-700 p-1 mt-4 mb-2 text-white">
            <p>Company Details</p>
          </div>

          <div className="mb-2">
            <p className="font-semibold text-sky-700">Company Name</p>
            <input
              placeholder="etc. Apple"
              type="text"
              className="w-full py-2 px-1 border text-slate-600 "
            />
          </div>

          <div className="mb-2">
            <p className="font-semibold text-sky-700">Registerer Name</p>
            <input
              placeholder="Name of the person who is registering"
              type="text"
              className="w-full py-2 px-1 border text-slate-600 "
            />
          </div>
          <div className="mb-2">
            <p className="font-semibold text-sky-700">GSTIN/UIN</p>
            <input
              placeholder="etc. 19ABCDE1234F1Z5"
              type="text"
              className="w-full py-2 px-1 border text-slate-600 "
            />
          </div>

          <button
            onClick={() => navigate("/sample")}
            className="w-full bg-gradient-to-r from-green-700 to-sky-800 text-white py-3 mt-2 hover:from-green-600 hover:to-sky-700"
          >
            Register Application
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
