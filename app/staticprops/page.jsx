import Link from "next/link";
import { use } from "react";

//getStaticProps
async function getCharacters() {
  console.log("herr");
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

export default function Staticprops() {
  const allCharacters = use(getCharacters());
  return (
    <div className="mt-10">
      <h2 className="text-teal-500">getStaticProps</h2>
      {allCharacters?.results.map((c) => (
        <ul key={c.id}>
          <Link
            href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}
