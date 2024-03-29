import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 min-h-dvh font-mono">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <a href="/" className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Organización del internauta
        </a>
        <div className="fixed bottom-0 left-0 flex h-42 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            Colaboran: EuskadiTech®, Informatica Euskadi
          </span>
        </div>
      </div>
      <span className="text-6xl">¡Hola, internauta!</span>
      <span>
        Somos la Organización del internauta
        <br />
        Hacemos todo lo posible para que tu puedas tener un internet mas seguro, accesible y abierto.
      </span>
      <a href="/market">Mercado de recursos gratuitos</a>
      <a href="https://incibe.es">Instituto Nacional de Ciberseguridad (INCIBE)</a>
      <a href="https://www.youtube.com/@EuskadiTech/videos">VideoTutoriales EuskadiTech</a>
      <br/>
    </main>
  );
}
