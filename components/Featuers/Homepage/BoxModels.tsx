import Image from "next/image";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const BoxModels = () => {
  return (
    <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-neutral-700 p-4 rounded-xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total
                </span>

                <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                  40,960
                </span>
              </div>

              <Image
                src="/Home/Icon1.png"
                alt="icon"
                width={50}
                priority
                height={50}
                className="object-contain"
              />
            </div>

            <h5 className="flex items-center gap-2 mt-3 text-sm text-green-600 dark:text-green-400 font-medium">
              <span className="flex items-center gap-1">
                <FaArrowTrendUp className="text-green-500" /> 8.5%
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                Up from yesterday
              </span>
            </h5>
          </div>
        ))}
    </>
  );
};

export default BoxModels;
