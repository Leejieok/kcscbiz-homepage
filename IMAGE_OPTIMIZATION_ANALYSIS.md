# 이미지 최적화 기법 분석 보고서

## 제공된 HTML 코드에서 발견된 최적화 기법

### 1. **CSS 배경 이미지 활용**
```html
<div class="inner_img img03"></div>
```
- **장점**: 
  - CSS로 이미지 크기 조절 가능 (`background-size: cover/contain`)
  - 반응형 디자인에 유리
  - 이미지 로딩 타이밍 제어 가능

### 2. **CDN (Content Delivery Network) 사용**
```
https://co1116.shiningcorp.com/sh_img/...
```
- **장점**:
  - 전 세계 캐싱 서버 활용
  - 지리적 위치에 따른 빠른 로딩
  - 서버 부하 분산

### 3. **서버 측 이미지 최적화 (추정)**
```
thumb-7a0581314e507b09111ae14aecd96acb_1702435192_0699_610x.jpg
```
- URL 패턴 분석:
  - `thumb-`: 썸네일 버전
  - `_610x`: 리사이즈된 크기 (610px)
  - 해시값: 캐시 버스팅용
- **추정되는 최적화**:
  - 서버에서 요청 시 이미지 리사이징
  - WebP/AVIF 자동 변환
  - 압축 품질 자동 조절

### 4. **Swiper 슬라이더를 통한 지연 로딩**
- 현재 보이는 슬라이드만 로드
- Fade 효과로 부드러운 전환

### 5. **CSS 클래스 기반 이미지 관리**
- 여러 이미지를 CSS 클래스로 그룹화
- 요청 수 감소 가능

---

## 추가 최적화 기법 (현재 프로젝트 적용 가능)

### 1. **WebP 포맷 사용**
```typescript
// 현재 프로젝트에서 이미 사용 중
import heroImg from '@/assets/images/hero.webp';
```
✅ 이미 적용됨

### 2. **Lazy Loading**
```html
<img loading="lazy" src="..." />
```
✅ 현재 프로젝트에서 이미 사용 중

### 3. **Responsive Images (srcset)**
```html
<img 
  srcset="image-320w.webp 320w,
          image-640w.webp 640w,
          image-1280w.webp 1280w"
  sizes="(max-width: 640px) 100vw, 50vw"
  src="image-1280w.webp"
  alt="..."
/>
```

### 4. **이미지 압축**
- Vite 빌드 시 자동 압축
- 또는 이미지 최적화 도구 사용:
  - `sharp` (Node.js)
  - `imagemin`
  - `squoosh` (온라인)

### 5. **CDN 이미지 최적화 서비스 활용**
- Cloudinary
- ImageKit
- Imgix
- 현재 프로젝트에서 `cdn.imweb.me` 사용 중 ✅

### 6. **CSS Image Sprites**
- 작은 아이콘들을 하나의 이미지로 통합
- CSS `background-position`으로 특정 영역 표시

### 7. **Blur-up / Low Quality Image Placeholder (LQIP)**
```typescript
// 작은 블러 이미지 먼저 로드
const [imageLoaded, setImageLoaded] = useState(false);
const [showBlur, setShowBlur] = useState(true);

<img 
  src={showBlur ? blurImage : fullImage}
  onLoad={() => {
    setImageLoaded(true);
    setShowBlur(false);
  }}
/>
```

### 8. **Intersection Observer API**
```typescript
// 뷰포트에 들어올 때만 이미지 로드
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement;
      img.src = img.dataset.src || '';
      observer.unobserve(img);
    }
  });
});
```

---

## 제공된 HTML 코드의 최적화 수준 평가

### ✅ 잘 구현된 부분:
1. CSS 배경 이미지 활용
2. CDN 사용
3. 슬라이더를 통한 이미지 관리

### ⚠️ 개선 가능한 부분:
1. **Lazy Loading 미적용**: 모든 이미지가 즉시 로드됨
2. **Responsive Images 미사용**: `srcset` 속성 없음
3. **이미지 포맷**: JPG만 사용 (WebP/AVIF 미사용)
4. **압축 정보 부재**: 이미지 압축 품질 확인 불가

---

## 실제 최적화가 이루어지는 곳 (추정)

### 서버 측 최적화 (가장 가능성 높음)
1. **이미지 리사이징 서비스**
   - URL 파라미터나 경로 기반으로 자동 리사이징
   - 예: `image.jpg?w=800&q=80`

2. **캐싱 전략**
   - CDN 레벨에서 이미지 캐싱
   - 브라우저 캐싱 헤더 설정

3. **자동 포맷 변환**
   - User-Agent 기반 WebP/AVIF 자동 제공
   - Accept 헤더 확인

---

## 결론

제공된 HTML 코드 자체에는 **명시적인 최적화 기법이 많지 않지만**, 
**서버 측(백엔드/CDN)에서 최적화가 이루어지고 있을 가능성이 높습니다.**

특히:
- URL 패턴 (`thumb-`, `_610x`)으로 보아 서버 측 리사이징
- CDN을 통한 캐싱 및 전송 최적화
- CSS 배경 이미지로 이미지 로딩 제어

현재 프로젝트에서는 이미 WebP 사용, Lazy Loading 등이 적용되어 있어 
제공된 HTML보다 더 최적화되어 있습니다.

