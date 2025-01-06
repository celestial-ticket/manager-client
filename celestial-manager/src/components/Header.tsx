import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Celestial Manager</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/studios" className="hover:underline">
                Studios
              </Link>
            </li>
            <li>
              <Link href="/showtimes" className="hover:underline">
                Showtimes
              </Link>
            </li>
            <li>
              <Link href="/orders" className="hover:underline">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
