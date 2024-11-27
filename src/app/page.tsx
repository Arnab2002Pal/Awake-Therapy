import FeatureComponent from './components/Feature';
import FooterComponent from './components/Footer';
import HeroComponent from './components/Hero';
import TestimonialCarousel from './components/Testimonial';

export default function Home() {
  const heading: string = "That weight on your shoulders? "
  const secondHeading: string = "It doesn't have to be there."
  const subheading: string = "Awake Therapy provides on-demand video and telephone psychotherapy, counseling, and coaching to individuals in over 40 countries worldwide."
  return (
    <div className=''>
      <HeroComponent heading={heading} secondHeading={secondHeading} subheading={subheading}/>
      <FeatureComponent/>
      <TestimonialCarousel/>
      <FooterComponent/>
    </div>
  );
}
