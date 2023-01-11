import Link from "next/link";

const routes = [
  { name: "Server", path: "/server" },
  { name: "Client", path: "/client" },
  { name: "Staticprop", path: "/staticprops" },
];

export default function Navbar() {
  return (
    <main className="flex text-white items-center space-x-8">
      {routes.map((r) => (
        <Link href={r.path} key={r.index} className="flex">
          {r.name}
        </Link>
      ))}
    </main>
  );
}
