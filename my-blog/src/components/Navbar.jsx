import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 resize rounded-md">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/public/images/mad3.png" />

          <Link
            to="/"
            className="font-semibold text-4xl tracking-tight text-slate-300"
          >
            Notre Île rouge
          </Link>
        </div>

        <div className="w-full flex-row-reverse lg:flex lg:items-center lg:w-auto mr-20">
          <div className="text-sm lg:flex-grow bg-white rounded-lg ">
            <Link
              to="/face"
              className=" m-4 text-2xl text-slate-700 hover:text-white mr-4 italic"
            >
              Voyages
            </Link>
            <Link
              to="/blog"
              className="text-2xl m-4 text-slate-700 hover:text-white italic"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
