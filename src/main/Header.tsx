
type Args = {
    subtitle: string;
}

const Header = ({subtitle} : Args) => {
  return (
    <header className="bg-gray-800 text-white p-4 align-middle">
      <h1 className="text-2xl">{subtitle}</h1>
    </header>
  );
}

export default Header;