
import logoImage from '../assets/img/logo.svg';
import iconCloseImage from '../assets/img/icon-close.svg';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TextSourceType } from '@/pages';
//import Link from 'next/link';

export const ScrollTo = (id: string) => {
  const element = document.getElementById(id.slice(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar = ({ data }: { data: TextSourceType }) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);


  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const triggerMobileNavItem = (id: string) => {
    setMobileMenu(false);
    ScrollTo(id);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('max-h-screen');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('max-h-screen');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('max-h-screen');
    };
  }, [mobileMenu]);

  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a onClick={() => window.document.location.reload()}>
              <Image src={logoImage} className="w-24 lg:w-48" alt="logo" />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group">
                <span onClick={() => ScrollTo('#about')}
                  className="cursor-pointer px-3 pt-0.5 font-header font-semibold uppercase text-white">About</span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group">
                <span onClick={() => ScrollTo("#services")}
                  className="cursor-pointer px-3 pt-0.5 font-header font-semibold uppercase text-white">Services</span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group">
                <span onClick={() => ScrollTo("#work")}
                  className="cursor-pointer px-3 pt-0.5 font-header font-semibold uppercase text-white">Work</span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group">
                <span onClick={() => ScrollTo("#contact")}
                  className="cursor-pointer px-3 pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setMobileMenu(true)}>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden ${mobileMenu ? "opacity-100 pointer-events-auto" : ""}`}>
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
            <Image src={iconCloseImage} className="h-10 w-auto" alt="" />
          </button>
          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#about')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#services')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#portfolio')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#clients')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#work')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#statistics')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#blog')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>
            </li>
            <li className="py-2">
              <span onClick={() => triggerMobileNavItem('#contact')}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;