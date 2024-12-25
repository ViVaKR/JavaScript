'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [ipAddress, setIpAddress] = useState(['0', '0', '0', '0']);
  const messageString = '인간이-이해하는-코드조각...';
  const message = messageString.split('');
  useEffect(() => {
    const getPublicIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip.split('.'));
      } catch (error) {
        console.error(error);
        setIpAddress(['0', '0', '0', '0']);
      }
    };

    getPublicIPAddress();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!');
    console.log(event);
  };

  return (
    <div className={`flex flex-col m-0 p-0 relative min-h-screen`}>
      <div className="relative h-screen sm:h-screen overflow-hidden bg-robot bg-cover bg-center bg-norepeat pt-12 text-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-teal-950/70 bg-fixed">
          <div className="flex flex-col h-full items-center justify-center">
            <div className="text-white">
              <main
                className={`mb-4 text-9xl relative flex
                max-xl:text-7xl text-slate-300 font-cute
                max-md:text-5xl font-extrabold ${styles.main}`}>
                {message.map((char, index) => {
                  return (
                    <span key={index}>{char === '-' ? <>&nbsp;</> : char}</span>
                  );
                })}
              </main>
            </div>

            <div className="text-slate-400 text-xl math-container"></div>
          </div>
        </div>
        <div className={styles.folder}>
          {ipAddress.map((ip, index) => {
            return (
              <div
                key={index}
                className={styles.file}>
                <span className="font-poppins">{ip}</span>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleClick}
          className={`bottom-16 left-1/2 transform-translate-x-1/2 hover:!text-rose-100 ${styles.button}`}>
          Snippets
        </button>
      </div>
    </div>
  );
}

{
  /* folder */
}
