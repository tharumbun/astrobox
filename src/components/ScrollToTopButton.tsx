import type { Component } from "solid-js";
import { createSignal, onMount, onCleanup } from "solid-js";

const ScrollToTopButton: Component = () => {
  const [showScrollToTop, setShowScrollToTop] = createSignal<boolean>(false);

  const updateScrollToTop = () => {
    if (window.pageYOffset > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  onMount(() => {
    window.addEventListener("scroll", updateScrollToTop);
    updateScrollToTop();
  });
  onCleanup(() => window.removeEventListener("scroll", updateScrollToTop));

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollToTop() && (
        <button
          onclick={scrollTop}
          class="fixed z-30 p-2 text-black rounded outline-none bg-gray-100/50 right-4 bottom-4 sm:right-6 sm:bottom-6 lg:right-8 lg:bottom-8 dark:text-white hover:bg-gray-200/50 focus:bg-gray-200/50 dark:bg-black-600/50 dark:hover:bg-black-700/50 dark:focus:bg-black-700/50"
          aria-label="Back to the top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

// https://docs.astro.build/en/reference/directives-reference/#clientonly