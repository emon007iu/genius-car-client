 import expert1 from '../../images/banner/banner1.jpg';
import expert2 from '../../images/banner/banner2.jpg';
import expert3 from '../../images/banner/banner3.jpg';

const Banner = () => {
  return (
    <div>
      <div id="default-carousel" class="relative" data-carousel="slide">
        <div class="overflow-hidden relative h-56 rounded-lg sm:h-80 xl:h-80 2xl:h-96">
          <div
            class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item=""
          >
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <img
              src={expert1}
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          <div
            class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src={expert2}
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          <div
            class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src={expert3}
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
