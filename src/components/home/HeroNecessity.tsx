import { consultingData } from '@/data/consultingContent';
import ConsultingSection from '../section/ConsultingSection';
import need01 from '@/assets/images/need01.webp';
import need02 from '@/assets/images/need02.webp';
import need03 from '@/assets/images/need03.webp';

function HeroNecessity() {
  const backgroundImages = [
    need01,
    need02,
    need03
  ];

  return (
    <ConsultingSection
      mainHeading={consultingData.mainHeading}
      subHeading={consultingData.subHeading}
      sections={consultingData.sections}
      images={backgroundImages}
      backgroundColor="#f5f7fd"
    />
  );
}

export default HeroNecessity;