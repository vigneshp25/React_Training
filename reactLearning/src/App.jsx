import Education from "./components/Education"
import Hobbies from "./components/Hobbies"
import IntroSection from "./components/IntroSection"
import Overview from "./components/Overview"
import WorkExperience from "./components/WorkExperience"
import { useEffect, useState } from "react";

function App() {
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      // Show arrow only when scrolled to bottom
      setShowTopArrow(scrollPosition >= documentHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <IntroSection />
      <hr className="border-t border-gray-300 my-10 mx-20" />
      <Overview />
      <WorkExperience />
      <Education />
      <Hobbies />

      {showTopArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg transition-all hover:bg-gray-800"
          aria-label="Back to Top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
        </button>
      )}
    </>
  );
}

export default App;
