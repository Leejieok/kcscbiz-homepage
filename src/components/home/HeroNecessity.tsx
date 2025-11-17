import { consultingData } from '@/data/consultingContent';
import ConsultingSection from '../section/ConsultingSection';
import { FIREBASE_IMAGES } from '@/constants/firebaseImages';

function HeroNecessity() {
  const backgroundImages = [
    FIREBASE_IMAGES.images.need01,
    FIREBASE_IMAGES.images.need02,
    FIREBASE_IMAGES.images.need03
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