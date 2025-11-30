
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-[#1685FB] h-screen w-full flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-10 bg-white rounded-2xl shadow-lg max-w-sm text-center">
        <Image
          src="/404.png"
          alt="404 Not Found"
          width={200}
          height={200}
          priority
          className="object-contain"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Looks like you’ve got lost…
        </h2>
        <Link
          href="/"
          prefetch
          className="bg-[#4880FF] text-white px-5 py-2 rounded-md hover:bg-[#4880FF]/80 transition-all duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
