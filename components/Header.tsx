import { useRouter } from 'next/router';
import packageInfo from 'package.json';
import Link from './Link';

const Header = (): JSX.Element => {
  const opacity =
    useRouter().pathname === '/'
      ? ''
      : 'opacity-10 dark:opacity-20 hover:opacity-100';

  return (
    <header
      className={`w-full p-6 font-semibold items-center transition-opacity duration-300 ${opacity}`}
    >
      <div className="flex justify-between max-w-xl mx-auto">
        <Link to="/">
          <p className="text-base lg:text-lg xl:text-xl">TimeTab</p>
        </Link>
        <div className="flex space-x-3">
          <div className="font-mono font-normal">
            <p>{packageInfo.version}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
