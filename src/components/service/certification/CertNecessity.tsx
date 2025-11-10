import ConsultingSection from '../../section/ConsultingSection';
import { certNecessityData } from '@/data/certNecessityData';

function CertNecessity() {
  return (
    <ConsultingSection
      mainHeading={certNecessityData.mainHeading}
      subHeading={certNecessityData.subHeading}
      sections={certNecessityData.sections}
      backgroundImages={certNecessityData.backgroundImages}
      backgroundColor={certNecessityData.backgroundColor}
      showCheckIcon={certNecessityData.showCheckIcon}
    />
  );
}

export default CertNecessity;