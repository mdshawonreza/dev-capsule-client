"use client";
import { useEffect, useRef } from "react";

export default function VidioSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video starts muted (required for autoplay on most browsers)
    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = false; // unmute when visible
            video.play().catch(() => {}); // play safely
          } else {
            video.pause();          // pause when out of view
            video.muted = true;     // mute
          }
        });
      },
      { threshold: 0.6 } // 60% visible triggers play
    );

    observer.observe(video);
    return () => observer.unobserve(video);
  }, []);

  return (
    <div className="px-4 py-20 mx-auto lg:max-w-6xl">
      {/* CENTERED VIDEO SECTION */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-14">
        <div className='flex justify-center'>
          <h3 className="text-2xl md:text-4xl text-[#7412FF] text-center font-semibold px-6 py-2 bg-[#7412FF1A] rounded-full">
            Creativity Meets Tech
          </h3>
        </div>
        <p className="mt-4 text-gray-600 text-lg">
          We build modern, meaningful, and visually striking digital solutions that help brands unlock real growth.
        </p>
        {/* <hr className="w-full mt-8 border-gray-300" /> */}
      </div>

      {/* VIDEO CENTERED */}
      <div className="flex justify-center w-full">
        <video
          ref={videoRef}
          src="/assets/Devcapsule (1).mp4"
          className="rounded-xl shadow-lg w-full max-w-3xl h-full object-cover"
          autoPlay
          muted       // must start muted
          loop
          playsInline
          
        />
      </div>
    </div>
  );
}
