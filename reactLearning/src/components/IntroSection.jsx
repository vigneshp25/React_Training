import HelloBubble from './HelloBubble'
import photo from '../assets/photo500600.jpg'
import resume from '../assets/vigneshwaran_Resume.pdf'

export default function IntroSection() {
  return (<>
    <div className="w-full max-w-[1120px] mx-auto px-4 mt-20">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        <div className="w-full md:w-1/3">
          <img src={photo} alt="profile picture" className="w-full h-auto shadow-md border-2 border-solid border-black" />
        </div>
        <div className="w-full md:w-2/3">
          <HelloBubble />
          <h2 className="text-5xl mb-6 mt-6 text-center md:text-left">
            I'm <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Vigneshwaran Palanivel</span>
          </h2>

          <h3 className="text-2xl mb-6 font-bold text-center md:text-left"> Senior Associate Developer UI/UX
          </h3>
          <div className="mt-10 flex flex-col items-center md:items-start">
            {/* Contact Info */}
            <div className="w-3/4 md:w-full max-w-xl mx-auto md:mx-0">
              <div className="grid grid-cols-[auto_1fr] gap-6 mt-4 items-start">
                <p className="min-w-[75px] font-semibold whitespace-nowrap">ADDRESS</p>
                <div className="leading-snug text-gray-700">
                  <p>No 24, Sarangapani street,</p>
                  <p>Sholinganallur,</p>
                  <p>Chennai - 600 119.</p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-6 mt-4 items-start">
                <p className="min-w-[75px] font-semibold whitespace-nowrap">E-MAIL</p>
                <div className="leading-snug text-gray-700">
                  <p>
                    <a href="mailto:vigneshwaranp25@gmail.com" className="hover:underline">
                      vigneshwaranp25@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-6 mt-4 items-start">
                <p className="min-w-[75px] font-semibold whitespace-nowrap">PHONE</p>
                <div className="leading-snug text-gray-700">
                  <p>+91 9597420361</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-7 w-full flex justify-center md:justify-start">
              <a
                href={resume}
                download
                className="group relative w-[300px] flex items-center justify-center gap-2 border-2 border-black bg-black text-white px-4 py-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>



        </div>
      </div>

    </div>
  </>)
}