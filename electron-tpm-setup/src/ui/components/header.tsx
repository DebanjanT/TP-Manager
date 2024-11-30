import logo from "../assets/icon.png";
type HeaderProps = {
  title?: string;
  badge?: string;
};
const Header = ({ title = "TP Manager", badge }: HeaderProps) => {
  return (
    <div className=" sticky top-0 z-50 bg-background">
      <div className="relative flex justify-between items-center px-4 py-2  border-b shadow">
        {badge && (
          <p className="absolute right-2 top-0 border px-2 font-sans bg-slate-300 text-slate-600 font-bold text-sm">
            {badge}
          </p>
        )}
        <div className="flex justify-start items-center gap-1">
          <a href="https://vite.dev" target="_blank">
            <img src={logo} className="w-10 h-10" alt="DT logo" />
          </a>
          <div>
            <p className="font-bold text-xl">{title}</p>
            <p className="font-medium text-xs -mt-2">by dtt.ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
