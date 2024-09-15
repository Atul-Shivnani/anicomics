export default function () {

    return (
      <div className="rounded-md p-28 justify-center flex flex-col items-center">
        <h1 className="font-manga text-2xl mb-10">Explore Collections</h1>
        <div className="flex justify-center gap-1">
          <div className="relative flex group w-1/5 shadow-2xl shadow-orange-400">
            <img
              src="/Zenitsu.jpeg"
              className="rounded-l-lg w-full h-full border"
            />
            <div className="absolute hidden w-full h-full left-0 top-0 text-black group-hover:flex flex-col justify-center items-center font-manga p-2 bg-white bg-opacity-60">
              <h1 className="text-lg">Zenitsu Agatsuma</h1>
              <h3 className="mb-3">Demon Slayer</h3>
              <p className="mb-3 text-center text-sm">
              "If I’m going to die anyway, then I’m going to die doing what I want to do!"
              </p>
              <button className="rounded-md border border-black hover:bg-orange-100 hover:text-orange-400 bg-orange-400 px-2 py-2">
             <a href="/collection/one piece">
             Explore Collection
             </a>
              </button>
            </div>
          </div>
  
          <div className="relative flex group w-1/5 shadow-2xl shadow-green-400">
            <img
              src="/zoro1.jpeg"
              className="w-full h-full border"
            />
            <div className="absolute hidden w-full h-full left-0 top-0 text-black group-hover:flex flex-col justify-center items-center font-manga p-2 bg-white bg-opacity-60">
              <h1 className="text-lg">Roronoa Zoro</h1>
              <h3 className="mb-3">One Piece</h3>
              <p className="mb-3 text-center text-sm">
              "When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses."
              </p>
              <button className="rounded-md border border-black hover:bg-orange-100 hover:text-orange-400 bg-orange-400 px-2 py-2">
              <a href="/collection/one piece">
             Explore Collection
             </a>
              </button>
            </div>
          </div>
  
          <div className="relative flex group w-1/5 shadow-2xl shadow-purple-400">
            <img
              src="/jujutsu.jpeg"
              className="w-full h-full border"
            />
            <div className="absolute hidden w-full h-full left-0 top-0 text-black group-hover:flex flex-col justify-center items-center font-manga p-2 bg-white bg-opacity-60">
              <h1 className="text-lg">Yuji Itadori</h1>
              <h3 className="mb-3">Jujutsu Kaisen</h3>
              <p className="mb-3 text-center text-sm">
              "I don't know how I'll feel when I'm dead, but I don't want to regret the way I lived."
              </p>
              <button className="rounded-md border border-black hover:bg-orange-100 hover:text-orange-400 bg-orange-400 px-2 py-2">
              <a href="/collection/one piece">
             Explore Collection
             </a>
              </button>
            </div>
          </div>
  
          <div className="relative flex group w-1/5 shadow-2xl shadow-red-400">
            <img
              src="/madara.jpeg"
              className="w-full h-full border"
            />
            <div className="absolute hidden w-full h-full left-0 top-0 text-black group-hover:flex flex-col justify-center items-center font-manga p-2 bg-white bg-opacity-60">
              <h1 className="text-lg">Madara Uchiha</h1>
              <h3 className="mb-3">Naruto</h3>
              <p className="mb-3 text-center text-sm">
              "Wake up to reality! Nothing ever goes as planned in this accursed world."
              </p>
              <button className="rounded-md border border-black hover:bg-orange-100 hover:text-orange-400 bg-orange-400 px-2 py-2">
              <a href="/collection/one piece">
             Explore Collection
             </a>
              </button>
            </div>
          </div>
  
          <div className="relative flex group w-1/5 shadow-2xl shadow-blue-400">
            <img
              src="/goku.jpeg"
              className="rounded-r-lg w-full h-full border"
            />
            <div className="absolute hidden w-full h-full left-0 top-0 text-black group-hover:flex flex-col justify-center items-center font-manga p-2 bg-white bg-opacity-60">
              <h1 className="text-lg">Goku</h1>
              <h3 className="mb-3">Dragon Ball</h3>
              <p className="mb-3 text-center text-sm">
              "I’m not a hero. I’m not a savior. Forget what I’ve done. I’m a fighter, pure and simple!"
              </p>
              <button className="rounded-md border border-black hover:bg-orange-100 hover:text-orange-400 bg-orange-400 px-2 py-2">
              <a href="/collection/one piece">
             Explore Collection
             </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }