import React from "react";

const TailwindPlayground = () => {
  return (
    <>
      <div className="flex flex-wrap m-4">
        <div
          className="w-full sm:w-1/2 md:w-2/5 lg:w-1/6 xl:w-7/12
      p-4 bg-neutrals-700 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/3 md:w-1/5 lg:w-3/6 xl:w-1/12
      p-4 bg-neutrals-500 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/6 md:w-2/5 lg:w-2/6 xl:w-4/12
      p-4 bg-neutrals-900 mb-1"
        ></div>

        <div
          className="w-full sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/12
      p-4 bg-neutrals-700 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/3 md:w-3/5 lg:w-1/6 xl:w-5/12
      p-4 bg-neutrals-500 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/2 md:w-1/5 lg:w-4/6 xl:w-6/12
      p-4 bg-neutrals-900 mb-1"
        ></div>

        <div
          className="w-full sm:w-1/3 md:w-1/5 lg:w-2/6 xl:w-3/12
      p-4 bg-neutrals-700 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/6 md:w-1/5 lg:w-2/6 xl:w-4/12
      p-4 bg-neutrals-500 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/2 md:w-3/5 lg:w-2/6 xl:w-5/12
      p-4 bg-neutrals-900 mb-1"
        ></div>

        <div
          className="w-full sm:w-1/2 md:w-3/5 lg:w-3/6 xl:w-8/12
      p-4 bg-neutrals-700 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/6 md:w-1/5 lg:w-2/6 xl:w-2/12
      p-4 bg-neutrals-500 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-2/12
      p-4 bg-neutrals-900 mb-1"
        ></div>

        <div
          className="w-full sm:w-1/2 md:w-2/5 lg:w-2/6 xl:w-5/12
      p-4 bg-neutrals-700 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-3/12
      p-4 bg-neutrals-500 mb-1"
        ></div>
        <div
          className="w-full sm:w-1/6 md:w-2/5 lg:w-3/6 xl:w-4/12
      p-4 bg-neutrals-900 mb-1"
        ></div>
      </div>
      <div className="my-5">
        <h1 className="font-mono text-right">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolor
          suscipit molestiae blanditiis quo. Facere ad dolorum modi esse commodi
          eius impedit corporis veniam, id aliquid ex similique minus dolorem.
        </h1>
        <p className="text-xl font-bold">Lorem</p>
        <ul>
          <li className="italic">Lorem, ipsum dolor</li>
          <li className="font-bold">Lorem, ipsum dolor</li>
          <li className="font-extrabold text-center">Lorem, ipsum dolor</li>
          <li className="font-semibold text-right">Lorem, ipsum dolor</li>
          <li className="font-bold">Lorem, ipsum dolor</li>
          <li className="font-bold text-center">Lorem, ipsum dolor</li>
          <li className="font-bold ">Lorem, ipsum dolor</li>
        </ul>
      </div>
      <div className="mt-16 ml-5 bg-_dontuse-gray-light">
        <h2>Espaciamiento entre letras y lineas</h2>
        <div className="pt-5">
          <p className="font-semibold">
            Cuando tenemos un title donde la letra es grande es conveninete que
            esten mas juntas las letras
          </p>
          <h2 className="mt-8 bg-red-default font-sans tracking-wider">
            Lorem ih2sum
          </h2>
        </div>
        <div className="pt-5">
          <p className="font-semibold">Espacio entre lineas</p>
          <p className="leading-snug">Lorem Ipsum</p>
          <p className="leading-loose underline">Lorem Ipsum</p>
          <p className="leading-relaxed">Lorem Ipsum</p>
        </div>
      </div>
      <div className="mt-16 ml-5 bg-_dontuse-gray-light">
        <h2>Manipulacion de txt</h2>

        <div className="pt-5">
          <p className="leading-snug uppercase">Lorem Ipsum</p>
          <p className="leading-loose capitalize">Lorem Ipsum</p>
          <p className="leading-relaxed lowercase">Lorem Ipsum</p>
        </div>
      </div>

      <div className="mt-16 ml-5">
        <h2>Display </h2>

        <div className="pt-5 mt-8">
          <div className="block my-5 bg-_dontuse-pink">1</div>
          <div className="inline-block my-5 bg-_dontuse-pink">2</div>
          <div className="inline my-5 bg-_dontuse-yellow">3</div>
          <div className="hidden my-5 bg-_dontuse-yellow">hidden</div>
        </div>

        <div className="m-8 text-neutrals-100">
          <h2>FLEXBOX eje horizontal</h2>
          <div className="flex justify-around bg-_dontuse-gray-dark p-8">
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">1</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">2</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">3</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">4</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">5</div>
          </div>
          <h2 className="m-8">FLEXBOX eje vertical</h2>
          <div className="flex h-64 place-items-end bg-_dontuse-gray-dark p-8">
            place-items-end
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">1</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">2</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">3</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">4</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">5</div>
          </div>
          <div className="flex h-64 items-stretch bg-_dontuse-gray-dark p-8">
            ITEMS STRETCH
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">1</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">2</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">3</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">4</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">5</div>
          </div>
          <div className="flex h-64 justify-between items-baseline bg-_dontuse-gray-dark p-8">
            ITEMS BASELINE
            <div className="text-neutrals-0">Hellooooooooo</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">1</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2">2</div>
          </div>
          <div className="flex h-64 justify-between items-baseline bg-_dontuse-gray-dark p-8">
            ORDER
            <div className="text-neutrals-0 order-3">Hellooooooooo</div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2 order-3">
              1
            </div>
            <div className="bg-_dontuse-gray-light px-4 py-2 m-2 order-1">
              2
            </div>
          </div>
        </div>
        <div className="m-8 text-neutrals-500">
          MI PROPIA UTILERIA
          <div className="hover:zoom mx-auto mt-16 h-40 w-40 bg-_dontuse-gray-light font-bold">
            zoom - hover me
          </div>
          <div className="hover:rotate mx-auto mt-16 h-40 w-40 bg-_dontuse-gray-light font-bold">
            rotate - hover me
          </div>
          <div className="sm:rotate mx-auto mt-16 h-40 w-40 bg-_dontuse-gray-light font-bold">
            check me in mobile
          </div>
        </div>
      </div>
      <div className="mt-16 ml-5">
        <h2>Variantes </h2>
        <div className="pt-5 mt-8">
          <div className="mt-16 ml-5 bg-_dontuse-gray-light">
            <h2>cambios de estado</h2>

            <div className="pt-5">
              <button disabled className="disabled:opacity-8 bg-_dontuse-blue">hola</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailwindPlayground;
