import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../images/hero-illustration.svg';
import Avatar01 from '../images/avatar-01.jpg';
import Avatar02 from '../images/avatar-02.jpg';
import Avatar03 from '../images/avatar-03.jpg';
import Avatar04 from '../images/avatar-04.jpg';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="1440" height="749" alt="Hero Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-8 md:pt-36 md:pb-16">
          {/* Hero content */}
          <div className="max-w-3xl text-center md:text-left">
            {/* Copy */}
            <h1 className="h1 font-inter mb-6">
              Trusted by the best tech startups in the <span className="font-nycd text-indigo-500 font-normal">industry</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">
            Our experts implement new solutions and technologies to evolve your business.
              <br className="hidden md:block" />  optimize costs with DevOps to bring the best standard outcomes.
            </p>
            {/* Button + Avatars */}
            <div className="sm:flex sm:items-center sm:justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-5">
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm" href="/post-a-job">
                  Get Started
                </Link>
              </div>
              <div className="sm:flex sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="inline-flex -space-x-3 -ml-0.5">
                  <img
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar01}
                    width="32"
                    height="32"
                    alt="Avatar 01"
                  />
                  <img
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar02}
                    width="32"
                    height="32"
                    alt="Avatar 02"
                  />
                  <img
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar03}
                    width="32"
                    height="32"
                    alt="Avatar 03"
                  />
                  <img
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar04}
                    width="32"
                    height="32"
                    alt="Avatar 04"
                  />
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Reach <span className="text-indigo-500">100+</span> Prefessionals at your service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
