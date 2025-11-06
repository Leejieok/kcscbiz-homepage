import { warningCardsData } from '@/data/warningCardsData';
import ConsultingSection from '../section/ConsultingSection';

function HeroNecessity2() {
  // warningCardsData를 ConsultingSection이 받을 수 있는 형식으로 변환
  const mainHeading = {
    highlight: warningCardsData.title.normal,
    text: warningCardsData.title.highlight
  };

  const sections = warningCardsData.cards.map(card => {
    // titleHighlight를 고려해서 title을 파싱
    let title = card.title;
    let titleHighlight = '';

    // titleHighlight가 있으면 title에서 제거
    if (card.titleHighlight.length > 0) {
      const firstHighlight = card.titleHighlight[0];
      const highlightIndex = title.indexOf(firstHighlight);

      if (highlightIndex !== -1) {
        // highlight 이전 부분만 title로
        title = title.substring(0, highlightIndex);
        titleHighlight = card.titleHighlight.join(', ');
      }
    }

    return {
      necessity: '',
      title: title,
      titleHighlight: titleHighlight,
      points: [card.description]
    };
  });

  const backgroundImages = warningCardsData.cards.map(card => card.backgroundImage);

  return (
    <ConsultingSection
      mainHeading={mainHeading}
      subHeading=""
      sections={sections}
      backgroundImages={backgroundImages}
      backgroundColor="#ffffff"
      showCheckIcon={false}
    />
  );
}

export default HeroNecessity2;