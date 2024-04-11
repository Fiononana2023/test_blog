export function Profile() {
  return (
    <>
      <h1 className="text-2xl text-violet-600 italic">Mon profile</h1>
      <a
        className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
      >
        <img
          src="/images/Avat.png"
          className="shadow rounded-lg overflow-hidden border"
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl">A propos de moi</h4>
          <p className="mt-2 text-gray-600">
            Create Exercises for any subject with the topics you and your
            students care about.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </a>
    </>
  );
}
