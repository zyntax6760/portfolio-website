let emailLink = "";
let isMobile = false;

function checkDevice() {
   const width = window.innerWidth;
   const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
   const isMobileDevice = width <= 768 || isTouchDevice;

   isMobile = isMobileDevice;

   if (isMobileDevice) {
      // 모바일: mailto 사용
      emailLink = "mailto:kinghojoon12@gmail.com";
   } else {
      // PC: 브라우저별 최적화
      const emailAddress = "kinghojoon12@gmail.com";
      const userAgent = navigator.userAgent.toLowerCase();

      if (userAgent.includes("edg")) {
         emailLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${emailAddress}`;
      } else if (userAgent.includes("firefox")) {
         emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
      } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
         const isMacOS = userAgent.includes("mac");
         const isIOS = userAgent.includes("iphone") || userAgent.includes("ipad");

         if (isMacOS || isIOS) {
            emailLink = `mailto:${emailAddress}`;
         } else {
            emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
         }
      } else if (
         userAgent.includes("opera") ||
         userAgent.includes("opr") ||
         userAgent.includes("brave") ||
         userAgent.includes("vivaldi") ||
         userAgent.includes("whale") ||
         userAgent.includes("chrome")
      ) {
         emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
      } else if (userAgent.includes("trident") || userAgent.includes("msie")) {
         emailLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${emailAddress}`;
      } else {
         emailLink = `mailto:${emailAddress}`;
      }
   }

   return emailLink;
}

/**
 * 초기화 및 resize 이벤트 등록
 */
export function initEmailLink() {
   checkDevice();
   window.addEventListener("resize", checkDevice);
   return () => window.removeEventListener("resize", checkDevice);
}

/**
 * 현재 이메일 링크 가져오기
 */
export function getEmailLink() {
   return emailLink;
}

/**
 * 모바일 여부 가져오기
 */
export function getIsMobile() {
   return isMobile;
}

// 기본 export로 emailLink 상태 전달
export default { getEmailLink, initEmailLink, getIsMobile };
