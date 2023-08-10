import PopularMyTineraries from "../components/PopularMyTineraries/PopularMyTineraries";
import { Link as Anchor } from 'react-router-dom';

const Home = () => {

  return (
    <div className="flex flex-col relative max-md:mt-5 md:mt-5 z-10">
      <h1 className="self-center text-6xl max-sm:text-4xl font-bold mb-10">MyTinerary</h1>
      <h3 className="self-center text-center text-4xl max-sm:text-2xl text-gray-300">Find your perfect trip, designed by insiders who know and love their cities!</h3>
      <Anchor id='cta-home' className="flex self-center w-fit max-lg:text-xl max-lg:p-2 text-3xl mt-12 max-lg:mt-10 rounded-xl p-3 bg-gray-500/30 backdrop-blur-xl" to='/cities'>
        View more
        <svg id="arrow-cta-home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 mt-1 opacity-0 self-center w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg></Anchor>
      <PopularMyTineraries />
    </div>
  )
}

export default Home