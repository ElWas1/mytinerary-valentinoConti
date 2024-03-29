import PopularMyTineraries from "../components/PopularMyTineraries/PopularMyTineraries";
import CtaButton from "../components/PopularMyTineraries/CtaButton";

const Home = () => {

  return (
    <div className="flex flex-col items-center relative max-md:mt-5 md:mt-5 z-10">
      <h1 className="self-center text-6xl max-sm:text-4xl font-bold mb-10">MyTinerary</h1>
      <p className="self-center text-center text-4xl max-sm:text-2xl text-gray-300">Find your perfect trip, designed by insiders who know and love their cities!</p>
        <CtaButton />
      <PopularMyTineraries />
    </div>
  )
}

export default Home