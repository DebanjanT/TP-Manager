import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header badge="TPM Setup" title="TPM Setup" />
      <div className="container mx-auto mt-8 mb-6 max-w-xl px-3 md:p-6 shadow-lg border">
        <h1 className="text-xl font-semibold text-center font-adani mt-3">
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
          <div className="  mt-4 text-sky-800 dark:text-sky-500 text-lg font-semibold">
            <p>Superuser Details</p>
          </div>
          <Separator className="my-2" />

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-medium" htmlFor="username">
              Username
            </Label>
            <Input type="text" id="username" placeholder="Username" />
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-medium" htmlFor="password">
              Password
            </Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5">
            <Label className="font-medium" htmlFor="confirmpassword">
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mt-4 text-sky-800 dark:text-sky-500 text-lg font-semibold">
            <p>Company Details</p>
          </div>
          <Separator className="my-2" />

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-medium" htmlFor="Company Name">
              Company Name
            </Label>
            <Input type="text" id="Company Name" placeholder="ex. Apple" />
          </div>

          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-medium" htmlFor="Registerer Name">
              Registerer Name
            </Label>
            <Input
              type="text"
              id="Registerer Name"
              placeholder="Registerer Name"
            />
          </div>
          <div className="grid w-full max-w-xl items-center gap-1.5 mb-3">
            <Label className="font-medium" htmlFor="GTIN/UIN">
              GTIN/UIN
            </Label>
            <Input
              type="text"
              id="GTIN/UIN"
              placeholder="Enter Govt registered GSTIN or UIN"
            />
          </div>

          <Button
            className="w-full mt-4 py-6"
            onClick={() => navigate("/sample")}
          >
            Register Application
          </Button>
        </div>
      </div>
    </>
  );
};

export default Register;
