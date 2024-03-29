import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Market() {
  const supabase = createClient();
  let { data: mercado } = await supabase.from("mercado").select();
  if (mercado == null)
    mercado = []
  return (
    <main className="flex flex-col items-center justify-between p-24 min-h-dvh font-mono">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <a
          href="/"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Organización del internauta
        </a>
        <div className="fixed bottom-0 left-0 flex h-42 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            Colaboran: EuskadiTech®, Informatica Euskadi
          </span>
        </div>
      </div>
      <span className="text-6xl">Mercado de recursos</span>
      <span>
        Aquí encontraras recursos revisados por la Organización del internauta.
        <br />
        Para buscar presiona Ctrl-F y escribe (por ejemplo) Educación /
        Seguridad / Tutorial.
      </span>
      <br />
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mercado.map(
          ({ id, name, picture, description, vendedor, open_url }) => (
            <li className="bg-zinc-300 rounded-lg p-5" key={id}>
              <Image
                src={picture}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></Image>
              <p>
                <span className="text-xs">Origen: {vendedor}</span>
                <br />
                <Link href={open_url} target="_blank">
                  {name}
                </Link>
                <br />
                {description}
              </p>
            </li>
          )
        )}
      </ul>
      <span className="text-xs">
        Si quieres solicitar una retirada, contacta a recursos@the2ndworld.org
      </span>
      <br />
    </main>
  );
}
