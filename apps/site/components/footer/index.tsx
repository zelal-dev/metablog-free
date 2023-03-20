import { FooterDataOne, FooterDataTwo } from '@/data/footerData'
import Link from 'next/link'
import React from 'react'
import NewsLetter from '@/components/newsletter/NewsLetter'
import useMode from '@/utils/themeMode'
import Image from 'next/image'

const Footer = () => {
   const { lightMode } = useMode()

   return (
      <div>
         <div className="bg-base-200 px-5 md:px-0">
            <div className="container mx-auto">
               <footer className="grid grid-cols-12 gap-5 py-16">
                  <div className="col-span-12 lg:col-span-3">
                     <span className="text-lg font-semibold text-base-content font-sans">
                        About
                     </span>
                     <p className="mt-3 text-base text-base-content/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                     </p>
                     <h6 className="mt-6">
                        <span className="font-semibold text-base-content">
                           Email :
                        </span>
                        <span className="text-base-content/70">
                           info@jstemplate.net
                        </span>
                     </h6>
                     <h6 className="mt-1">
                        <span className="font-semibold text-base-content">
                           Phone :
                        </span>
                        <span className="text-base-content/70">
                           880 123 456 789
                        </span>
                     </h6>
                  </div>
                  <div className="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
                     <div>
                        <span className="text-base-content text-lg font-semibold">
                           Quick Link
                        </span>
                        <div className="flex flex-col gap-y-2 mt-6">
                           {FooterDataOne.map((item: any, index: number) => (
                              <div key={index}>
                                 <Link
                                    href={item.link}
                                    className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                                 >
                                    {item.name}
                                 </Link>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div>
                        <span className="text-base-content text-lg font-semibold">
                           Category
                        </span>
                        <div className="flex flex-col gap-y-2 mt-6">
                           {FooterDataTwo.map((item: any, index: number) => (
                              <div key={index}>
                                 <Link
                                    href={item.link}
                                    className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                                 >
                                    {item.name}
                                 </Link>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                     <NewsLetter />
                  </div>
               </footer>
               <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-300">
                  <div className="flex items-center gap-2.5">
                     {lightMode ? (
                        <Link href="/">
                           <Image
                              src="/footerLight.png"
                              alt="site-logo"
                              width={48}
                              height={48}
                              priority={true}
                           />
                        </Link>
                     ) : (
                        <Link href="/">
                           <Image
                              src="/footerDark.png"
                              alt="site-logo"
                              width={48}
                              height={48}
                              priority={true}
                           />
                        </Link>
                     )}
                     <div>
                        <h5 className="text-xl text-base-content">
                           Meta<strong>Blog</strong>
                        </h5>
                        <p className="mt-0.5 text-base-content/70 text-base">
                           © JS Template 2023. All Rights Reserved.
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 text-base-content/70">
                     <Link
                        href="/"
                        className="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300"
                     >
                        Terms of Use
                     </Link>
                     <Link
                        href="/"
                        className="text-base border-r border-base-content/10 pr-4  hover:text-primary transition hover:duration-300"
                     >
                        Privacy Policy
                     </Link>
                     <Link
                        href="/"
                        className="text-base hover:text-primary transition hover:duration-300"
                     >
                        Cookie Policy
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
