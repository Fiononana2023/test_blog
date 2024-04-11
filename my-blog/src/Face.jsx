import "./App.css";

export function Face() {
  return (
    <div className="m-6">
      <div className="flex w-full flex-wrap content-center justify-center p-5 bg-gray-200 mt-16 rounded-lg">
        <h1 className="text-3xl text-shadow-lg shadow-gray-600 italic mb-10">
          Voyager à madagascar
        </h1>
        <div className="grid grid-cols-3 gap-3 ">
          <div className="w-80 bg-white p-3 rounded-xl">
            <img className="h-52 w-full object-cover" src="/images/imgb4.jpg" />
            <h2 className="text-xl font-semibold text-blue-600 ">Charette</h2>
          </div>

          <div className="w-80 bg-white p-3 rounded-xl">
            <img className="h-52 w-full object-cover" src="/images/pous2.jpg" />
            <h2 className="text-xl font-semibold text-blue-600">Posy posy</h2>
          </div>

          <div className="w-80 bg-white p-3 rounded-xl">
            <img className="h-52 w-full object-cover" src="/images/img3.jpg" />
            <h2 className="text-xl font-semibold text-blue-600">Tuk-tuk</h2>
          </div>

          <div className="w-80 bg-white p-3 rounded-xl">
            <img className="h-52 w-full object-cover" src="/images/imga2.jpg" />
            <h2 className="text-xl font-semibold text-blue-600">
              Bus en ville
            </h2>
          </div>

          <div className="w-80 bg-white p-3 rounded-xl">
            <img
              className="h-52 w-full object-cover"
              src="/images/brouss.webp"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              Taxi brousse
            </h2>
          </div>

          <div className="w-80 bg-white p-3 rounded-xl">
            <img
              className="h-52 w-full object-cover"
              src="/images/images12.jfif"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              Taxi brousse
            </h2>
          </div>
        </div>
        <div className="mt-6 w-3/6 grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl">
            <img
              className="w-full h-5/6 object-cover"
              src="/images/imga1.jpg"
            />
            <h2 className="text-xl font-semibold text-blue-600 pt-5">BUS</h2>
          </div>

          <div className="bg-white p-3 rounded-xl">
            <img className="w-full h-5/6 object-cover" src="/images/img5.jpg" />
            <h2 className="text-xl font-semibold text-blue-600 pt-5">Train</h2>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br"> */}
      <div className="flex items-center justify-center  bg-teal-400 mt-10 rounded-lg">
        <div className="overflow-hidden  aspect-video bg-teal-400 cursor-pointer rounded-xl relative group ">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <div className="font-bold text-3xl">Pousse pousse</div>

                <p className="opacity-60 text-xl ">
                  Le posiposy sert à transporter des personnes et des bagages.
                  Il est plus pratique par rapport au bus. Son rôle est plus ou
                  moins égale à celui du taxi-ville. Il conduit directement à
                  destination et ne s’arrête jamais en route. Les habitants de
                  la ville d’Antsirabe fréquentent habituellement le posy pour
                  aller au marché, à l’école, à l’église etc. Les vacanciers et
                  les touristes aussi s’y intéressent beaucoup.
                </p>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out p-6"
            src="/images/pous1.webp"
          />
        </div>
      </div>
    </div>
  );
}
