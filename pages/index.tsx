import Page from '@components/Page';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [input, setInput] = useState('h:mm:ss A');
  const router = useRouter();

  const navigate = (event: any) => {
    event.preventDefault();
    router.push(`/${input}`);
  };

  return (
    <Page>
      <div className="flex flex-col flex-grow text-base lg:text-lg xl:text-xl px-6">
        <div className="flex flex-grow flex-col items-center justify-center">
          <div className="flex flex-col flex-grow items-center justify-center space-y-6">
            <div className="w-full">
              <form
                className="flex sm:space-x-4 sm:space-y-0 space-y-4 flex-col sm:flex-row"
                onSubmit={navigate}
              >
                <div className="flex-grow">
                  <input
                    className="appearance-none bg-gray-200 rounded-md p-3 w-full dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                    placeholder="Clock Format"
                    required
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/4">
                  <input
                    className="w-full sm:w-auto py-3 px-3 font-semibold text-center rounded-lg cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition-colors ease-in-out duration-200"
                    type="submit"
                    value="View Time"
                    onClick={navigate}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
