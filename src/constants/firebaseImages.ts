// Firebase Storage 이미지 URL 관리
// URL 형식: https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.appspot.com/o/폴더명%2F파일명.webp?alt=media&token=...


export const FIREBASE_IMAGES = {
  // 📁 assets/ - 로고 및 아이콘
  assets: {
    logo: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/assets%2Flogo.webp?alt=media&token=e2088c76-0ad9-4bc7-8b0a-176b59bfb295', // assets/logo.webp
    logoBlack: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/assets%2Flogo_black.webp?alt=media&token=9079d5fe-6dc0-4718-9174-a792f3642dba', // assets/logo_black.webp
    con01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/assets%2Fcon01.webp?alt=media&token=44fa9e44-bde1-4b2d-93f0-ee1587e78998', // assets/con01.webp
    con02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/assets%2Fcon02.webp?alt=media&token=505092b1-4b28-41cf-a20c-7490996a6119', // assets/con02.webp
    con03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/assets%2Fcon03.webp?alt=media&token=4ad99498-b40a-4c12-bc79-4b748cbbe359', // assets/con03.webp
    con04: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/assets%2Fcon04.webp?alt=media&token=71b962be-9095-4ebb-bba7-8920c9d9c017', // assets/con04.webp
  },

  // 📁 images/ - 콘텐츠 이미지
  images: {
    // Hero 이미지
    hero: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fhero.webp?alt=media&token=a9a015b3-0a55-41c7-ab4b-2143e2df9939', // images/hero.webp
    hero2: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fhero2.webp?alt=media&token=55f8e3a0-9659-4368-b16a-b14c551433f0', // images/hero2.webp
    hero3: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fhero3.webp?alt=media&token=7ba7c110-94aa-4562-881a-e0aebac4276a', // images/hero3.webp

    // Need 시리즈
    need01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fneed01.webp?alt=media&token=517fb15b-512e-4db2-b8a1-a6826028f9fe', // images/need01.webp
    need02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fneed02.webp?alt=media&token=ea76922b-20bc-45b5-a1db-5cd2b20d99d0', // images/need02.webp
    need03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fneed03.webp?alt=media&token=588dd1a9-d406-46c7-bcc4-e60e9255db05', // images/need03.webp

    // Before 시리즈
    before01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fbefore01.webp?alt=media&token=fa971961-13d6-4e57-b9a5-1d03fee315fa', // images/before01.webp
    before02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fbefore02.webp?alt=media&token=3de912cc-dde9-4fcf-8472-9a0aa2219eee', // images/before02.webp
    before03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fbefore03.webp?alt=media&token=369babf8-5d83-449f-ba3f-65cd35eaafe5', // images/before03.webp

    // After 시리즈
    after01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fafter01.webp?alt=media&token=53dd988b-726e-4362-bfbd-5bdcdee221fd', // images/after01.webp
    after02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fafter02.webp?alt=media&token=c88f85c3-3373-4f37-99c5-0a3624548ebc', // images/after02.webp
    after03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fafter03.webp?alt=media&token=dc91663a-b6ab-46be-9c39-505aa4506cee', // images/after03.webp

    // Slide 이미지
    slide01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fslide01.webp?alt=media&token=6ced40d5-ccb9-47bd-b1db-d8428e58c28e', // images/slide01.webp
    slide02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fslide02.webp?alt=media&token=69775c93-43c7-41bf-b8db-814aa8d2a5f0', // images/slide02.webp
    slide03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fslide03.webp?alt=media&token=b6c6ebe7-c3c5-47a0-9b30-3b35b9bea17d', // images/slide03.webp

    // Review 이미지
    review01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview01.webp?alt=media&token=693c53e9-ba34-442b-b62c-f882c1a33c55', // images/review01.webp
    review02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview02.webp?alt=media&token=0858f2ce-5af9-4ca7-8e81-6ce468c53278', // images/review02.webp
    review03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview03.webp?alt=media&token=00542d41-4942-4f27-9c9b-181f29eeb784', // images/review03.webp
    review04: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview04.webp?alt=media&token=83410382-338a-42f7-9c03-cb5891c77977', // images/review04.webp
    review05: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview05.webp?alt=media&token=4b6d4793-f850-4847-b92d-80b9647ca328', // images/review05.webp
    review06: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview06.webp?alt=media&token=4aea2022-1260-4468-9f2a-7f5e3cbebf5b', // images/review06.webp
    review07: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview07.webp?alt=media&token=552e604f-e678-4696-aa5c-a185f8555ce1', // images/review07.webp
    review08: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview08.webp?alt=media&token=23187ff1-c638-437a-94fe-d68366d2984a', // images/review08.webp
    review09: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview09.webp?alt=media&token=4b503c35-23a7-4ff8-b40d-3063d2e9b55b', // images/review09.webp
    review10: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview10.webp?alt=media&token=e3c3b126-64fe-4db6-9a2c-6c59794cb7d9', // images/review10.webp
    reviews11: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview11.webp?alt=media&token=b2395a4d-f526-400a-ae57-07f3b266a152', // images/reviews11.webp
    reviews12: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview12.webp?alt=media&token=c731fc1e-29a5-4ff8-b4c9-c3c26dde68ae', // images/reviews12.webp
    reviews13: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Freview13.webp?alt=media&token=b0cc8624-3f64-46c7-9f3a-e392f4eb6f19', // images/reviews13.webp

    // Crape 시리즈
    crape01: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fcrape01.webp?alt=media&token=ef17cc56-5bbf-4a3c-a3a7-fad4e3e20f8c', // images/crape01.webp
    crape02: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fcrape02.webp?alt=media&token=fc07806e-0856-43d9-b84e-578c5d9fb635', // images/crape02.webp
    crape03: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fcrape03.webp?alt=media&token=b7acb2d1-5660-4b3c-b7b3-97ef79d8d4a3', // images/crape03.webp
    crape04: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fcrape04.webp?alt=media&token=1535ac57-afda-4af1-b674-233f455eae96', // images/crape04.webp

    // 기타 이미지
    about: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fabout.webp?alt=media&token=a7f5ce90-3909-4c8e-82f8-34d5508504fc', // images/about.webp
    mockup: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Fmockup.webp?alt=media&token=3e8b7206-9012-44a5-81be-e6663d705bab', // images/mockup.webp
    foodCEO: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2FfoodCEO.webp?alt=media&token=537fb0f5-9978-4414-a249-0527a77d6eda', // images/foodCEO.webp

    // 아이콘 이미지
    icon1: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Ficon1.webp?alt=media&token=55bc8b70-8812-405e-a17d-ae25c61e0fa8', // images/icon1.webp
    icon2: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Ficon2.webp?alt=media&token=d70acf85-3dc5-43ad-90bf-d9111809761e', // images/icon2.webp
    icon3: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/images%2Ficon3.webp?alt=media&token=a89e4cbb-5041-4874-8dd3-811a540beae1', // images/icon3.webp
  },

  // 📁 backgrounds/ - 배경 이미지
  backgrounds: {
    brandBG: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/backgrounds%2FbrandBG.webp?alt=media&token=46dcf2d7-1963-434e-8430-76f97eca764d', // backgrounds/brandBG.webp
    serviceBG: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/backgrounds%2FserviceBG.webp?alt=media&token=75d7c5e4-b939-4c43-890c-f90ca6353362', // backgrounds/serviceBG.webp
    reviewBG: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/backgrounds%2FreviewBG.webp?alt=media&token=9e77038f-223a-4859-a4ed-1e716814535a', // backgrounds/reviewBG.webp
    forestWay: 'https://firebasestorage.googleapis.com/v0/b/kcsc-db-home.firebasestorage.app/o/backgrounds%2Fforest_way.webp?alt=media&token=6dbf265f-0cc2-4989-8be6-e54c09a49396', // backgrounds/forest_way.webp
  },
};

// 개별 이미지 URL을 쉽게 가져오기 위한 헬퍼 함수
export const getFirebaseImage = (
  category: keyof typeof FIREBASE_IMAGES,
  imageName: string
): string => {
  const categoryObj = FIREBASE_IMAGES[category];
  if (typeof categoryObj === 'object' && imageName in categoryObj) {
    return categoryObj[imageName as keyof typeof categoryObj];
  }
  return '';
};
