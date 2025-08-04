import IntroSection from "./components/IntroSection"
import Overview from "./components/Overview"
import WorkExperience from "./components/WorkExperience"

function App() {
  return (
    <>
      <IntroSection />
      <hr className="border-t border-gray-300 my-10 mx-20" />
      <Overview />
      <WorkExperience />
    </>
  )
}

export default App
