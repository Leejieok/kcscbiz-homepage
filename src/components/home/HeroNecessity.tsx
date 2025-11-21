import { consultingData } from '@/data/consultingContent';
import ConsultingSection from '../section/ConsultingSection';

function HeroNecessity() {
  const backgroundImages = [
    'https://cdn.imweb.me/thumbnail/20250307/c7608c7b6d7e2.png',
    'https://cdn.imweb.me/thumbnail/20250307/dddf4ad7955d7.png',
    'https://cdn.imweb.me/thumbnail/20250307/19736215ba905.png'
  ];

  return (
    <ConsultingSection
      mainHeading={consultingData.mainHeading}
      subHeading={consultingData.subHeading}
      sections={consultingData.sections}
      backgroundImages={backgroundImages}
      backgroundColor="#f5f7fd"
    />
  );
}

export default HeroNecessity;