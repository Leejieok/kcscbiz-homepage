import CertNecessity from "@/components/service/certification/CertNecessity";
import CertHelpSection from "../../components/service/certification/CertHelpSection";
import CertIntroSection from "../../components/service/certification/CertIntroSection";
import ProblemSection from "../../components/service/certification/ProblemSection";
import SupportIntro from "../../components/service/certification/SupportIntro";
import GallerySection from "@/components/service/certification/GallerySection";
import ApplicationForm from "@/components/form/ApplicationForm";

//기업인증 컨설팅 페이지
function Service3() {

  return (
    <div>
      <ProblemSection/>
      <SupportIntro/>
      <CertIntroSection/>
      <CertHelpSection/>
      <CertNecessity/>
      <GallerySection/>
      <ApplicationForm/>
    </div>
  )
}

export default Service3;