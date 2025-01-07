import CallToAction from "./components/CallAction";
import ExtraFeatures from "./components/ExtraFeatures";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import QuizIdeas from "./components/QuixIdeas";
import QuizTemplates from "./components/Quiztemplate";
// import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <QuizTemplates/>
      <QuizIdeas/>
      <ExtraFeatures/>
      {/* <TestimonialCarousel/> */}
      <CallToAction/>
    </div>
  );
}
