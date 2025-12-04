import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import logo from "../public/assets/Logo 3 1.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-10 rounded-t-[40px] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start gap-8">

          <div>
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="Developer"
                className="md:w-[228px]"
              />
            </Link>
            <p className="text-white text-base md:text-xl max-w-xl md:max-w-md first-letter: font-medium  my-4" >
              We specialize in creating high-performing
              websites and digital products that are both
              beautiful and functional.
            </p>

          </div>



          <div className='mt-5'>

            <div className=" flex flex-col md:flex-row justify-between gap-3 md:gap-7 md:items-center items-end">
              <h3>
                <Link href="/about" className="text-white md:text-xl font-semibold hover:text-[#7412FF] transition-colors text-end md:text-center">
                  About
                </Link>
              </h3>
              <h3 className="text-white md:text-xl font-semibold hover:text-[#7412FF] transition-colors  ">
                <Link href="/blog">
                  Accomplishment
                </Link>
              </h3>
              <h3>
                <Link href="/projects" className="text-white md:text-xl font-semibold hover:text-[#7412FF] transition-colors">
                  Portfolio
                </Link>
              </h3>

              <h3>
                <Link href="/services" className="text-white md:text-xl font-semibold  hover:text-[#7412FF] transition-colors">
                  Services
                </Link>
              </h3>
              <h3>
                <Link href="/contact" className="text-white md:text-xl font-semibold  hover:text-[#7412FF] transition-colors">
                  Contact
                </Link>
              </h3>


            </div>

          </div>


        </div>
        <div className="flex  justify-between items-end gap-8 mt-2">

          <div className='flex justify-start'>
            <div >


              <div className="flex  space-x-4">
                <Link href="https://www.facebook.com/share/16YNTbkFNR/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7412FF] transition-colors">
                  <Facebook size={30} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://x.com/dev_capsuleeu?t=i48UEkQwyAMfym8GjvNSAQ&s=09" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7412FF] transition-colors">
                  <Twitter size={30} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/devcapsuleeu?igsh=d2djdDlidjdic3pz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7412FF] transition-colors">
                  <Instagram size={30} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/dev-capsule/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7412FF] transition-colors">
                  <Linkedin size={30} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>



          <div className='flex justify-center'>
            <div className='flex flex-col md:justify-end gap-2'>

              {/* UPDATED: Privacy Policy + Terms */}
              <div className="flex items-center justify-end space-x-2 text-white font-semibold text-lg">
                <Link href="/policy" className="hover:text-[#7412FF] transition-colors">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link href="/terms" className="hover:text-[#7412FF] transition-colors">
                  Terms & Conditions
                </Link>
              </div>

              <p className='text-base text-white font-normal hidden md:flex'>
                © Devcapsule {currentYear} | All Rights Reserved
              </p>

            </div>
          </div>

        </div>



      </div>
      <div className='text-center mt-4'>
        <p className='text-base text-white font-normal md:hidden'>
          © Devcapsule {currentYear} | All Rights Reserved
        </p>
      </div>


   
    </footer >
  );
}