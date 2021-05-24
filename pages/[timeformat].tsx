import Page from '@components/Page';
import { useRouter } from 'next/router';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function CustomTimeFormat(): JSX.Element {
  const router = useRouter();
  const timeformat = router.query.timeformat as string;
  const [displayTime, setDisplayTime] = useState('');

  const watch = () => {
    setDisplayTime(moment().format(timeformat));
  };

  useEffect(() => {
    watch();
    const timer = setInterval(watch, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Page>
      <div className="flex flex-col flex-grow text-base lg:text-lg xl:text-xl px-6">
        <div className="flex flex-grow flex-col items-center justify-center">
          <div className="flex flex-col flex-grow items-center justify-center space-y-6">
            <div className="flex text-5xl sm:text-7xl font-semibold font-mono select-all">
              <p>{displayTime}</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
