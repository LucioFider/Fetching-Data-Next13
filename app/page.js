import Companies from "./companies";
import Users from "./users";

export default function HomePage() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <Users />
        <Companies />
      </div>
    </div>
  );
}
