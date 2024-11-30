import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header badge="TPM Setup" title="TPM Setup" />
      <div className="container mx-auto mt-8 mb-6 max-w-xl px-3 md:p-4 shadow-lg">
        <h1 className="text-xl font-bold text-center ">
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

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-semibold" htmlFor="username">
              Username
            </Label>
            <Input type="text" id="username" placeholder="Username" />
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-semibold" htmlFor="password">
              Password
            </Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5">
            <Label className="font-semibold" htmlFor="confirmpassword">
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="bg-green-700 p-1 mt-4 mb-4 text-white">
            <p>Company Details</p>
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-semibold" htmlFor="Company Name">
              Company Name
            </Label>
            <Input type="text" id="Company Name" placeholder="ex. Apple" />
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-semibold" htmlFor="Registerer Name">
              Registerer Name
            </Label>
            <Input
              type="text"
              id="Registerer Name"
              placeholder="Registerer Name"
            />
          </div>
          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-semibold" htmlFor="GTIN/UIN">
              GTIN/UIN
            </Label>
            <Input
              type="text"
              id="GTIN/UIN"
              placeholder="Enter Govt registered GSTIN or UIN"
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

export default Register;
