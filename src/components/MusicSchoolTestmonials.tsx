"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const musicSchoolTestmonials = [
  {
    quote: "They fear your success more than your failure.",
    name: "Sidhu Moosewala",
    title: "Punjabi Singer & Lyricist",
  },
  {
    quote: "It’s not about fame, it’s about leaving a legacy.",
    name: "Sidhu Moosewala",
    title: "Legend of Punjabi Music",
  },
  {
    quote: "Real recognize real. That’s why they can’t relate.",
    name: "Sidhu Moosewala",
    title: "Singer, Writer, Gamechanger",
  },
  {
    quote: "I never followed the crowd, I led the way.",
    name: "Sidhu Moosewala",
    title: "Revolutionary Artist",
  },
  {
    quote: "My words are bullets, my tracks are fire.",
    name: "Sidhu Moosewala",
    title: "Voice of the Streets",
  },
];

const MusicSchoolTestmonials = () => {
  return (
    <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white relative">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestmonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestmonials;