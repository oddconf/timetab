import Link from './Link';
import { ArrowUpRight } from 'react-feather';
import { useRouter } from 'next/router';

const Footer = (): JSX.Element => {
  const opacity =
    useRouter().pathname === '/'
      ? 'text-gray-400'
      : 'opacity-10 dark:opacity-20 hover:opacity-100';

  return (
    <footer>
      <div className={`w-full p-6 transition-opacity duration-300 ${opacity}`}>
        <div className="max-w-xl mx-auto flex justify-between flex-wrap">
          <p>
            &copy; <Link href="//huggins.io">Kyle Huggins</Link>, 2021
          </p>
          <Link href="//github.com/kjhx/timetab">
            <div className="flex items-center space-x-1">
              <p>View on GitHub</p>
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
