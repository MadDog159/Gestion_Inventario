'use client'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "./ui/home.module.css"
import Image from 'next/image'



export default function Page() {

  return (
    <main className="flex min-h-screen flex-col  p-6">
      <div className={styles.menu}>
        <img src="/favicon.ico" alt="Favicon" className={styles.icon} />
      </div>

      <div className="mt-4 flex grow flex-col justify-center gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <Image 
            src='/hero-desktop.png'
            alt='imagen producto'
            width={1000}
            height={600}
            className='hidden md:block'/>
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Gestion de Inventario</strong> 
            </p>
            <Link href="/dashboard" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            <span>Homepage</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
        </div>
      </div>


    </main>
  );
}
