import Header from "../../components/header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-3 max-w-lg px-3 md:px-0">
        <h1 className="text-3xl font-bold text-center">
          Superuser Credentials
        </h1>
        <hr />
        <div className="my-8">
          <div className="mb-2">
            <p className="font-semibold text-sky-700">Username</p>
            <input
              placeholder="superuser name"
              type="text"
              className="w-full py-2 px-1 border text-slate-600 italic"
            />
          </div>
          <div className="mb-2">
            <p className="font-semibold text-sky-700">Password</p>
            <input
              placeholder="********"
              type="password"
              className="w-full py-2 px-1 border text-slate-600 italic"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-green-700 to-blue-800 text-white py-2">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
