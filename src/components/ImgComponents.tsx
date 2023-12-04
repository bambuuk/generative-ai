import { styled } from "@mui/material";

const Image = styled('svg')({
  position: 'absolute',
  top: '-88px',
  left: '50%',
  transform: 'translate(-50%)',
});

export const ChatImage = () => {
  return (
    <Image sx={{ top: '-54px' }} xmlns="http://www.w3.org/2000/svg" width="241" height="242" viewBox="0 0 241 242" fill="none">
      <g filter="url(#filter0_f_510_402)">
        <path d="M121.383 88.5935C138.505 89.1453 152.328 103.248 152.499 120.312C152.556 126.56 150.821 132.394 147.774 137.352C147.343 138.05 147.261 138.902 147.522 139.673L150.511 148.599C151.537 151.674 148.475 154.538 145.461 153.321L136.232 149.589C135.515 149.296 134.709 149.305 134.017 149.629C129.903 151.56 125.317 152.656 120.479 152.672C103.138 152.753 88.6794 138.853 88.1744 121.586C87.6287 103.094 102.82 87.9931 121.391 88.5854L121.383 88.5935Z" fill="url(#paint0_linear_510_402)" />
      </g>
      <path d="M121.383 88.5936C138.505 89.1454 152.328 103.248 152.499 120.312C152.556 126.56 150.821 132.394 147.774 137.352C147.343 138.05 147.261 138.902 147.522 139.673L150.511 148.599C151.537 151.674 148.475 154.538 145.461 153.321L136.232 149.589C135.515 149.297 134.709 149.305 134.017 149.629C129.903 151.56 125.317 152.656 120.479 152.672C103.138 152.753 88.6794 138.853 88.1744 121.586C87.6287 103.094 102.82 87.9931 121.391 88.5855L121.383 88.5936Z" fill="url(#paint1_linear_510_402)" />
      <g filter="url(#filter1_b_510_402)">
        <path d="M85.7376 55.0223C63.5919 55.735 45.7203 74.0861 45.5021 96.2921C45.4213 104.423 47.6674 112.019 51.6101 118.458C52.1676 119.365 52.2727 120.474 51.9414 121.486L48.0794 133.108C46.7463 137.108 50.7052 140.834 54.6076 139.246L66.549 134.395C67.47 134.023 68.5123 134.023 69.4172 134.452C74.7334 136.963 80.6637 138.388 86.9253 138.412C109.354 138.509 128.049 120.434 128.704 97.9604C129.407 73.8917 109.766 54.2449 85.7457 55.0223H85.7376Z" fill="url(#paint2_linear_510_402)" />
        <path d="M46.5021 96.302L46.5021 96.3019C46.7149 74.6341 64.1543 56.7259 85.7538 56.0223H85.7618L85.778 56.0218C109.219 55.2631 128.391 74.4359 127.704 97.9312C127.066 119.863 108.815 137.507 86.9296 137.412H86.9291C80.819 137.389 75.0334 135.998 69.8457 133.549C68.669 132.99 67.3341 132.999 66.174 133.468L66.1726 133.469L54.2312 138.32L54.2308 138.32C51.1246 139.583 47.9633 136.619 49.0282 133.424L49.0284 133.423L52.8904 121.802L52.8918 121.797C53.3085 120.524 53.1829 119.108 52.4629 117.935C48.6154 111.653 46.4232 104.24 46.5021 96.302Z" stroke="url(#paint3_linear_510_402)" strokeWidth="2" />
      </g>
      <defs>
        <filter id="filter0_f_510_402" x="0.160156" y="0.568573" width="240.34" height="241.039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_402" />
        </filter>
        <filter id="filter1_b_510_402" x="27.5" y="37" width="119.222" height="120.621" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_402" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_402" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_510_402" x1="113.547" y1="90.7682" x2="127.925" y2="154.619" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0BC7FF" />
          <stop offset="1" stopColor="#DB0EFE" />
        </linearGradient>
        <linearGradient id="paint1_linear_510_402" x1="113.547" y1="90.7682" x2="127.925" y2="154.619" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0BC7FF" />
          <stop offset="1" stopColor="#DB0EFE" />
        </linearGradient>
        <linearGradient id="paint2_linear_510_402" x1="50.1984" y1="134.844" x2="125.254" y2="61.0284" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint3_linear_510_402" x1="51.3746" y1="61.6553" x2="122.179" y2="136.11" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Image>
  )
}

export const CPUImage = () => {
  return (
    <Image xmlns="http://www.w3.org/2000/svg" width="266" height="266" viewBox="0 0 266 266" fill="none">
      <g filter="url(#filter0_f_510_524)">
        <path d="M121.377 88.0001C124.711 88.0001 127.412 90.7116 127.412 94.0578V118H115.341V94.0578C115.341 90.7116 118.042 88.0001 121.377 88.0001Z" fill="url(#paint0_linear_510_524)" />
        <path d="M145.521 88.0001C148.855 88.0001 151.556 90.7116 151.556 94.0578V118H139.485V94.0578C139.485 90.7116 142.186 88.0001 145.521 88.0001Z" fill="url(#paint1_linear_510_524)" />
        <path d="M88.323 144.827C88.323 141.481 91.0248 138.769 94.3589 138.769H118.215V150.885H94.3589C91.0248 150.885 88.323 148.173 88.323 144.827Z" fill="url(#paint2_linear_510_524)" />
        <path d="M88.323 120.596C88.323 117.25 91.0248 114.539 94.3589 114.539H118.215V126.654H94.3589C91.0248 126.654 88.323 123.942 88.323 120.596Z" fill="url(#paint3_linear_510_524)" />
        <path d="M144.946 178C141.612 178 138.91 175.289 138.91 171.942V148H150.982V171.942C150.982 175.289 148.28 178 144.946 178Z" fill="url(#paint4_linear_510_524)" />
        <path d="M120.802 178C117.468 178 114.766 175.289 114.766 171.942V148H126.838V171.942C126.838 175.289 124.136 178 120.802 178Z" fill="url(#paint5_linear_510_524)" />
        <path d="M178 121.173C178 124.519 175.298 127.231 171.964 127.231H148.108V115.115H171.964C175.298 115.115 178 117.827 178 121.173Z" fill="url(#paint6_linear_510_524)" />
        <path d="M178 145.404C178 148.75 175.298 151.462 171.964 151.462H148.108V139.346H171.964C175.298 139.346 178 142.058 178 145.404Z" fill="url(#paint7_linear_510_524)" />
      </g>
      <g filter="url(#filter1_f_510_524)">
        <path d="M148.108 118H118.215V148H148.108V118Z" fill="white" />
      </g>
      <path d="M115.054 88C118.388 88 121.09 90.7116 121.09 94.0577V118H109.018V94.0577C109.018 90.7116 111.72 88 115.054 88Z" fill="url(#paint8_linear_510_524)" />
      <path d="M139.197 88C142.531 88 145.233 90.7116 145.233 94.0577V118H133.161V94.0577C133.161 90.7116 135.863 88 139.197 88Z" fill="url(#paint9_linear_510_524)" />
      <path d="M82 144.827C82 141.481 84.7018 138.769 88.0359 138.769H111.892V150.885H88.0359C84.7018 150.885 82 148.173 82 144.827Z" fill="url(#paint10_linear_510_524)" />
      <path d="M82 120.596C82 117.25 84.7018 114.539 88.0359 114.539H111.892V126.654H88.0359C84.7018 126.654 82 123.942 82 120.596Z" fill="url(#paint11_linear_510_524)" />
      <path d="M138.623 178C135.289 178 132.587 175.288 132.587 171.942V148H144.659V171.942C144.659 175.288 141.957 178 138.623 178Z" fill="url(#paint12_linear_510_524)" />
      <path d="M114.479 178C111.145 178 108.443 175.288 108.443 171.942V148H120.515V171.942C120.515 175.288 117.813 178 114.479 178Z" fill="url(#paint13_linear_510_524)" />
      <path d="M171.676 121.173C171.676 124.519 168.974 127.231 165.64 127.231H141.784V115.115H165.64C168.974 115.115 171.676 117.827 171.676 121.173Z" fill="url(#paint14_linear_510_524)" />
      <path d="M171.676 145.404C171.676 148.75 168.974 151.462 165.64 151.462H141.784V139.346H165.64C168.974 139.346 171.676 142.058 171.676 145.404Z" fill="url(#paint15_linear_510_524)" />
      <g filter="url(#filter2_b_510_524)">
        <path d="M147.821 103H105.856C100.936 103 96.9463 107.004 96.9463 111.942V154.058C96.9463 158.996 100.936 163 105.856 163H147.821C152.742 163 156.731 158.996 156.731 154.058V111.942C156.731 107.004 152.742 103 147.821 103Z" fill="url(#paint16_linear_510_524)" />
        <path d="M105.856 104H147.821C152.186 104 155.731 107.552 155.731 111.942V154.058C155.731 158.448 152.186 162 147.821 162H105.856C101.491 162 97.9463 158.448 97.9463 154.058V111.942C97.9463 107.552 101.491 104 105.856 104Z" stroke="url(#paint17_linear_510_524)" strokeWidth="2" />
      </g>
      <path d="M141.784 118H111.892V148H141.784V118Z" fill="white" />
      <defs>
        <filter id="filter0_f_510_524" x="0.322998" y="6.10352e-05" width="265.677" height="266" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_524" />
        </filter>
        <filter id="filter1_f_510_524" x="30.2153" y="30.0001" width="205.892" height="206" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_524" />
        </filter>
        <filter id="filter2_b_510_524" x="78.9463" y="85" width="95.7844" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_524" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_524" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_510_524" x1="98.2158" y1="82.2712" x2="183.151" y2="164.096" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint1_linear_510_524" x1="110.943" y1="71.1885" x2="195.879" y2="153.014" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint2_linear_510_524" x1="71.3074" y1="112.069" x2="156.352" y2="194.004" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint3_linear_510_524" x1="82.3618" y1="98.5693" x2="167.412" y2="180.498" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint4_linear_510_524" x1="83.2356" y1="101.379" x2="168.171" y2="183.204" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint5_linear_510_524" x1="70.5143" y1="112.462" x2="155.45" y2="194.287" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint6_linear_510_524" x1="110.035" y1="71.4712" x2="195.086" y2="153.406" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint7_linear_510_524" x1="98.9808" y1="84.977" x2="184.026" y2="166.906" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint8_linear_510_524" x1="91.893" y1="82.2712" x2="176.828" y2="164.096" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint9_linear_510_524" x1="104.62" y1="71.1885" x2="189.555" y2="153.014" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint10_linear_510_524" x1="64.9844" y1="112.069" x2="150.029" y2="194.004" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint11_linear_510_524" x1="76.0388" y1="98.5693" x2="161.089" y2="180.498" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint12_linear_510_524" x1="76.9126" y1="101.379" x2="161.848" y2="183.204" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint13_linear_510_524" x1="64.1913" y1="112.462" x2="149.127" y2="194.287" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint14_linear_510_524" x1="103.712" y1="71.4712" x2="188.762" y2="153.406" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint15_linear_510_524" x1="92.6573" y1="84.977" x2="177.702" y2="166.906" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B14DFF" />
          <stop offset="0.99" stopColor="#652AC6" />
        </linearGradient>
        <linearGradient id="paint16_linear_510_524" x1="100.321" y1="159.613" x2="153.546" y2="106.579" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint17_linear_510_524" x1="101.166" y1="107.719" x2="151.332" y2="161.165" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Image>
  );
}

export const TeamImage = () => {
  return (
    <Image sx={{ top: '-72px', }} xmlns="http://www.w3.org/2000/svg" width="233" height="240" viewBox="0 0 233 240" fill="none">
      <g filter="url(#filter0_f_510_379)">
        <path d="M144.424 146.551C141.88 133.452 130.328 123.565 116.454 123.565C102.579 123.565 91.0274 133.452 88.4831 146.551C87.9315 149.378 90.1711 152 93.0529 152H139.846C142.736 152 144.967 149.387 144.416 146.551H144.424Z" fill="url(#paint0_linear_510_379)" />
        <path d="M116.453 116.884C124.266 116.884 130.599 110.563 130.599 102.766C130.599 94.9682 124.266 88.6472 116.453 88.6472C108.641 88.6472 102.308 94.9682 102.308 102.766C102.308 110.563 108.641 116.884 116.453 116.884Z" fill="url(#paint1_linear_510_379)" />
      </g>
      <path d="M144.424 146.552C141.88 133.452 130.328 123.566 116.454 123.566C102.579 123.566 91.0274 133.452 88.4831 146.552C87.9315 149.379 90.1711 152 93.0529 152H139.846C142.736 152 144.967 149.387 144.416 146.552H144.424Z" fill="url(#paint2_linear_510_379)" />
      <path d="M116.453 116.884C124.266 116.884 130.599 110.563 130.599 102.766C130.599 94.9684 124.266 88.6473 116.453 88.6473C108.641 88.6473 102.308 94.9684 102.308 102.766C102.308 110.563 108.641 116.884 116.453 116.884Z" fill="url(#paint3_linear_510_379)" />
      <g filter="url(#filter1_b_510_379)">
        <path d="M105.741 145.171C102.547 128.751 88.0634 116.35 70.6735 116.35C53.2836 116.35 38.8003 128.751 35.6055 145.171C34.9139 148.721 37.7134 152 41.3363 152H100.002C103.625 152 106.425 148.721 105.733 145.171H105.741Z" fill="url(#paint4_linear_510_379)" />
        <path d="M70.6735 117.35C87.3149 117.35 101.218 129.034 104.608 144.623L104.752 145.362C105.318 148.271 103.021 151 100.002 151H41.3363C38.3176 151 36.0204 148.271 36.5871 145.362L36.5871 145.362C39.6919 129.404 53.7701 117.35 70.6735 117.35Z" stroke="url(#paint5_linear_510_379)" strokeWidth="2" />
      </g>
      <g filter="url(#filter2_b_510_379)">
        <path d="M74.7342 107.505C84.263 105.26 90.1644 95.7308 87.9154 86.2203C85.6664 76.7098 76.1186 70.8197 66.5898 73.0644C57.061 75.3091 51.1596 84.8385 53.4086 94.349C55.6576 103.859 65.2054 109.75 74.7342 107.505Z" fill="url(#paint6_linear_510_379)" />
        <path d="M86.9421 86.4496C89.0636 95.421 83.4969 104.413 74.5041 106.532C65.5113 108.65 56.5035 103.091 54.382 94.1197C52.2604 85.1482 57.8272 76.1559 66.82 74.0375C75.8128 71.9191 84.8206 77.4781 86.9421 86.4496Z" stroke="url(#paint7_linear_510_379)" strokeWidth="2" />
      </g>
      <defs>
        <filter id="filter0_f_510_379" x="0.39917" y="0.647156" width="232.101" height="239.353" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_379" />
        </filter>
        <filter id="filter1_b_510_379" x="17.5" y="98.3503" width="106.339" height="71.6498" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_379" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_379" result="shape" />
        </filter>
        <filter id="filter2_b_510_379" x="34.9307" y="54.5872" width="71.4629" height="71.3948" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_379" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_379" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_510_379" x1="116.454" y1="167.647" x2="116.454" y2="82.1548" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6005A" />
          <stop offset="1" stopColor="#F7CBAD" />
        </linearGradient>
        <linearGradient id="paint1_linear_510_379" x1="116.453" y1="-282.191" x2="116.453" y2="82.1549" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6005A" />
          <stop offset="1" stopColor="#F7CBAD" />
        </linearGradient>
        <linearGradient id="paint2_linear_510_379" x1="116.454" y1="167.647" x2="116.454" y2="82.155" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6005A" />
          <stop offset="1" stopColor="#F7CBAD" />
        </linearGradient>
        <linearGradient id="paint3_linear_510_379" x1="116.453" y1="-282.191" x2="116.453" y2="82.155" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6005A" />
          <stop offset="1" stopColor="#F7CBAD" />
        </linearGradient>
        <linearGradient id="paint4_linear_510_379" x1="39.471" y1="149.987" x2="64.976" y2="99.665" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint5_linear_510_379" x1="40.4651" y1="119.154" x2="63.5848" y2="167.928" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint6_linear_510_379" x1="58.9691" y1="109.166" x2="82.2899" y2="71.3632" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint7_linear_510_379" x1="52.4128" y1="79.2636" x2="88.4938" y2="103.315" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Image>
  );
}

export const PlantImage = () => {
  return (
    <Image xmlns="http://www.w3.org/2000/svg" width="252" height="252" viewBox="0 0 252 252" fill="none">
      <g filter="url(#filter0_f_510_733)">
        <path d="M133.795 128.31C126.615 139.199 124.19 151.782 126 163.692C137.774 160.489 148.451 153.194 155.63 142.306C162.809 131.417 165.235 118.834 163.425 106.924C151.651 110.127 140.974 117.422 133.795 128.31Z" fill="url(#paint0_linear_510_733)" />
        <path d="M118.205 128.31C125.384 139.199 127.81 151.782 126 163.692C114.226 160.489 103.549 153.194 96.3697 142.305C89.1907 131.417 86.7652 118.828 88.5752 106.918C100.349 110.121 111.026 117.416 118.205 128.304V128.31Z" fill="url(#paint1_linear_510_733)" />
        <path d="M111.575 126.117C111.575 140.509 117.029 153.639 126 163.626C134.971 153.639 140.425 140.509 140.425 126.117C140.425 111.725 134.971 98.595 126 88.6078C117.029 98.595 111.575 111.725 111.575 126.117Z" fill="url(#paint2_linear_510_733)" />
      </g>
      <path d="M133.795 128.31C126.615 139.199 124.19 151.782 126 163.692C137.774 160.489 148.451 153.194 155.63 142.306C162.809 131.417 165.235 118.834 163.425 106.924C151.651 110.127 140.974 117.422 133.795 128.31Z" fill="url(#paint3_linear_510_733)" />
      <path d="M118.205 128.31C125.384 139.199 127.81 151.782 126 163.692C114.226 160.489 103.549 153.194 96.3697 142.305C89.1907 131.417 86.7652 118.828 88.5752 106.918C100.349 110.121 111.026 117.416 118.205 128.304V128.31Z" fill="url(#paint4_linear_510_733)" />
      <path d="M111.575 126.117C111.575 140.509 117.029 153.639 126 163.626C134.971 153.639 140.425 140.509 140.425 126.117C140.425 111.725 134.971 98.595 126 88.6078C117.029 98.595 111.575 111.725 111.575 126.117Z" fill="url(#paint5_linear_510_733)" />
      <g filter="url(#filter1_b_510_733)">
        <path d="M140.854 188.608H111.767C108.875 188.608 106.311 186.774 105.408 184.059L95.2535 153.542C93.8288 149.263 97.054 144.858 101.613 144.858H151.008C155.567 144.858 158.792 149.263 157.367 153.542L147.213 184.059C146.31 186.774 143.745 188.608 140.854 188.608Z" fill="url(#paint6_linear_510_733)" />
        <path d="M96.2023 153.226L96.2023 153.226C94.9985 149.61 97.7196 145.858 101.613 145.858H151.008C154.901 145.858 157.622 149.61 156.419 153.226L156.419 153.226L146.264 183.743L147.213 184.059L146.264 183.743C145.499 186.043 143.321 187.608 140.854 187.608H111.767C109.3 187.608 107.122 186.043 106.357 183.743L105.408 184.059L106.357 183.743L96.2023 153.226Z" stroke="url(#paint7_linear_510_733)" strokeWidth="2" />
      </g>
      <defs>
        <filter id="filter0_f_510_733" x="0" y="0.607849" width="252" height="251.084" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_733" />
        </filter>
        <filter id="filter1_b_510_733" x="76.9131" y="126.858" width="98.7947" height="79.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_733" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_733" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_510_733" x1="162.608" y1="110.012" x2="128.591" y2="159.466" gradientUnits="userSpaceOnUse">
          <stop stopColor="#21D898" />
          <stop offset="1" stopColor="#198E9B" />
        </linearGradient>
        <linearGradient id="paint1_linear_510_733" x1="92.4755" y1="115.571" x2="124.657" y2="159.666" gradientUnits="userSpaceOnUse">
          <stop stopColor="#21D898" />
          <stop offset="1" stopColor="#198E9B" />
        </linearGradient>
        <linearGradient id="paint2_linear_510_733" x1="126.408" y1="100.344" x2="125.49" y2="159.901" gradientUnits="userSpaceOnUse">
          <stop stopColor="#85FFB7" />
          <stop offset="1" stopColor="#30FF80" />
        </linearGradient>
        <linearGradient id="paint3_linear_510_733" x1="162.608" y1="110.012" x2="128.591" y2="159.466" gradientUnits="userSpaceOnUse">
          <stop stopColor="#21D898" />
          <stop offset="1" stopColor="#198E9B" />
        </linearGradient>
        <linearGradient id="paint4_linear_510_733" x1="92.4755" y1="115.571" x2="124.657" y2="159.666" gradientUnits="userSpaceOnUse">
          <stop stopColor="#21D898" />
          <stop offset="1" stopColor="#198E9B" />
        </linearGradient>
        <linearGradient id="paint5_linear_510_733" x1="126.408" y1="100.344" x2="125.49" y2="159.901" gradientUnits="userSpaceOnUse">
          <stop stopColor="#85FFB7" />
          <stop offset="1" stopColor="#30FF80" />
        </linearGradient>
        <linearGradient id="paint6_linear_510_733" x1="98.4582" y1="186.138" x2="134.865" y2="133.883" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint7_linear_510_733" x1="99.3457" y1="148.299" x2="132.876" y2="199.756" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Image>
  );
}

export const CardImage = () => {
  return (
    <Image xmlns="http://www.w3.org/2000/svg" width="260" height="251" viewBox="0 0 260 251" fill="none">
      <g filter="url(#filter0_f_510_634)">
        <path d="M162.604 88.6078H97.929C92.7537 88.6078 88.5583 94.3583 88.5583 101.452V150.041C88.5583 157.134 92.7537 162.885 97.929 162.885H162.604C167.779 162.885 171.975 157.134 171.975 150.041V101.452C171.975 94.3583 167.779 88.6078 162.604 88.6078Z" fill="url(#paint0_linear_510_634)" />
        <path style={{ mixBlendMode: "overlay" }} d="M171.975 106.134H88.5583V121.991H171.975V106.134Z" fill="url(#paint1_linear_510_634)" />
      </g>
      <path d="M162.604 88.6078H97.929C92.7537 88.6078 88.5583 94.3583 88.5583 101.452V150.041C88.5583 157.134 92.7537 162.885 97.929 162.885H162.604C167.779 162.885 171.975 157.134 171.975 150.041V101.452C171.975 94.3583 167.779 88.6078 162.604 88.6078Z" fill="url(#paint2_linear_510_634)" />
      <path style={{ mixBlendMode: "overlay" }} d="M171.975 106.134H88.5583V121.991H171.975V106.134Z" fill="url(#paint3_linear_510_634)" />
      <g filter="url(#filter1_b_510_634)">
        <path d="M172.716 128.635H87.2842C83.5374 128.635 80.5 132.801 80.5 137.939V179.304C80.5 184.442 83.5374 188.608 87.2842 188.608H172.716C176.463 188.608 179.5 184.442 179.5 179.304V137.939C179.5 132.801 176.463 128.635 172.716 128.635Z" fill="url(#paint4_linear_510_634)" />
        <path d="M87.2842 129.635H172.716C174.192 129.635 175.614 130.453 176.705 131.949C177.795 133.444 178.5 135.559 178.5 137.939V179.304C178.5 181.684 177.795 183.798 176.705 185.293C175.614 186.789 174.192 187.608 172.716 187.608H87.2842C85.8084 187.608 84.3858 186.789 83.2951 185.293C82.2049 183.798 81.5 181.684 81.5 179.304V137.939C81.5 135.559 82.2049 133.444 83.2951 131.949C84.3858 130.453 85.8084 129.635 87.2842 129.635Z" stroke="url(#paint5_linear_510_634)" strokeWidth="2" />
      </g>
      <defs>
        <filter id="filter0_f_510_634" x="0.55835" y="0.607788" width="259.417" height="250.277" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_634" />
        </filter>
        <filter id="filter1_b_510_634" x="62.5" y="110.635" width="135" height="95.9727" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_634" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_634" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_510_634" x1="129.846" y1="84.9106" x2="131.368" y2="163.898" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC200" />
          <stop offset="1" stopColor="#F82AC6" />
        </linearGradient>
        <linearGradient id="paint1_linear_510_634" x1="87.3345" y1="114.914" x2="174.985" y2="113.99" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint2_linear_510_634" x1="129.846" y1="84.9106" x2="131.368" y2="163.898" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC200" />
          <stop offset="1" stopColor="#F82AC6" />
        </linearGradient>
        <linearGradient id="paint3_linear_510_634" x1="87.3345" y1="114.914" x2="174.985" y2="113.99" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint4_linear_510_634" x1="86.0891" y1="185.222" x2="133.242" y2="107.384" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint5_linear_510_634" x1="87.4883" y1="133.352" x2="130.587" y2="209.422" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Image>
  );
}

export const ScopImage = () => {
  return (
    <Image xmlns="http://www.w3.org/2000/svg" width="274" height="275" viewBox="0 0 274 275" fill="none">
      <g filter="url(#filter0_f_510_109)">
        <path d="M140.356 129.859C143.178 132.917 143.348 137.872 144.791 141.638C146.282 145.545 149.338 149.206 149.338 153.366C149.338 157.525 146.282 161.187 144.791 165.093C143.356 168.859 143.186 173.806 140.356 176.873C137.527 179.94 132.963 180.115 129.489 181.679C125.885 183.296 122.507 186.608 118.669 186.608C114.831 186.608 111.453 183.296 107.849 181.679C104.374 180.124 99.8112 179.94 96.9814 176.873C94.1596 173.814 93.9903 168.859 92.5471 165.093C91.104 161.327 88 157.525 88 153.366C88 149.206 91.0556 145.545 92.5471 141.638C93.9822 137.872 94.1515 132.926 96.9814 129.859C99.8032 126.8 104.374 126.616 107.849 125.052C111.453 123.436 114.831 120.124 118.669 120.124C122.507 120.124 125.885 123.436 129.489 125.052C132.963 126.608 137.527 126.791 140.356 129.859Z" fill="url(#paint0_linear_510_109)" />
      </g>
      <g filter="url(#filter1_f_510_109)">
        <path d="M185.997 109.357C186.085 112.163 184.151 114.583 183.304 117.056C182.417 119.617 182.377 122.815 180.684 124.781C178.991 126.747 176.048 127.018 173.758 128.154C171.541 129.247 169.453 131.51 166.865 131.615C164.277 131.72 162.044 129.614 159.762 128.696C157.48 127.779 154.449 127.691 152.635 125.856C150.821 124.021 150.571 120.831 149.523 118.35C148.515 115.946 146.427 113.683 146.33 110.878C146.242 108.073 148.177 105.652 149.023 103.179C149.91 100.619 149.95 97.4203 151.643 95.4541C153.336 93.4878 156.279 93.2169 158.569 92.0809C160.778 90.9798 162.874 88.7165 165.454 88.6116C168.034 88.5068 170.275 90.6128 172.557 91.5304C174.839 92.4479 177.87 92.5353 179.684 94.3704C181.498 96.2056 181.748 99.3952 182.796 101.877C183.804 104.28 185.892 106.544 185.989 109.349L185.997 109.357Z" fill="url(#paint1_linear_510_109)" />
      </g>
      <path d="M140.356 129.858C143.178 132.917 143.348 137.872 144.791 141.638C146.282 145.544 149.338 149.206 149.338 153.366C149.338 157.525 146.282 161.187 144.791 165.093C143.356 168.859 143.186 173.805 140.356 176.873C137.527 179.94 132.963 180.115 129.489 181.679C125.885 183.296 122.507 186.608 118.669 186.608C114.831 186.608 111.453 183.296 107.849 181.679C104.374 180.124 99.8112 179.94 96.9814 176.873C94.1596 173.814 93.9903 168.859 92.5471 165.093C91.104 161.327 88 157.525 88 153.366C88 149.206 91.0556 145.544 92.5471 141.638C93.9822 137.872 94.1515 132.926 96.9814 129.858C99.8032 126.8 104.374 126.616 107.849 125.052C111.453 123.435 114.831 120.123 118.669 120.123C122.507 120.123 125.885 123.435 129.489 125.052C132.963 126.608 137.527 126.791 140.356 129.858Z" fill="url(#paint2_linear_510_109)" />
      <path d="M185.997 109.357C186.086 112.163 184.151 114.583 183.304 117.056C182.417 119.617 182.377 122.815 180.684 124.781C178.991 126.747 176.048 127.018 173.758 128.154C171.541 129.247 169.453 131.51 166.865 131.615C164.277 131.72 162.044 129.614 159.762 128.696C157.481 127.779 154.449 127.691 152.635 125.856C150.821 124.021 150.571 120.831 149.523 118.35C148.515 115.946 146.427 113.683 146.331 110.878C146.242 108.073 148.177 105.652 149.023 103.179C149.91 100.619 149.951 97.4203 151.644 95.4541C153.337 93.4878 156.279 93.2169 158.569 92.0809C160.778 90.9798 162.874 88.7165 165.454 88.6116C168.034 88.5068 170.276 90.6128 172.557 91.5304C174.839 92.4479 177.87 92.5353 179.684 94.3704C181.498 96.2056 181.748 99.3952 182.796 101.877C183.804 104.28 185.892 106.544 185.989 109.349L185.997 109.357Z" fill="url(#paint3_linear_510_109)" />
      <g filter="url(#filter2_b_510_109)">
        <path d="M178.185 168.466L170.703 160.357C181.668 144.155 180.402 121.26 166.881 106.613C151.958 90.438 127.763 90.438 112.84 106.613C97.9166 122.789 97.9166 149.014 112.84 165.18C125.965 179.407 146.274 181.111 161.125 170.301L168.808 178.629C171.396 181.434 175.597 181.434 178.185 178.629C180.773 175.824 180.773 171.271 178.185 168.466Z" fill="url(#paint4_linear_510_109)" />
        <path d="M169.875 159.796L169.431 160.452L169.968 161.035L177.45 169.144C179.684 171.566 179.684 175.529 177.45 177.951C175.258 180.327 171.735 180.327 169.543 177.951L161.86 169.623L161.256 168.969L160.536 169.493C146.097 180.003 126.357 178.357 113.575 164.502L113.575 164.502C99.0051 148.719 99.0049 123.084 113.575 107.292C128.102 91.5453 151.619 91.5453 166.146 107.292L166.147 107.292C179.342 121.586 180.588 143.966 169.875 159.796Z" stroke="url(#paint5_linear_510_109)" strokeWidth="2" />
      </g>
      <defs>
        <filter id="filter0_f_510_109" x="0" y="32.1236" width="237.338" height="242.484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_109" />
        </filter>
        <filter id="filter1_f_510_109" x="58.3274" y="0.607849" width="215.672" height="219.011" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44" result="effect1_foregroundBlur_510_109" />
        </filter>
        <filter id="filter2_b_510_109" x="83.6475" y="76.4819" width="114.478" height="122.251" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="9" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_109" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_109" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_510_109" x1="133.004" y1="127.429" x2="101.025" y2="176.679" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10994D" />
          <stop offset="1" stopColor="#00FF79" />
        </linearGradient>
        <linearGradient id="paint1_linear_510_109" x1="183.326" y1="104.622" x2="148.463" y2="113.907" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10E4E2" />
          <stop offset="1" stopColor="#00FF79" />
        </linearGradient>
        <linearGradient id="paint2_linear_510_109" x1="133.004" y1="127.429" x2="101.025" y2="176.679" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10994D" />
          <stop offset="1" stopColor="#00FF79" />
        </linearGradient>
        <linearGradient id="paint3_linear_510_109" x1="183.326" y1="104.622" x2="148.464" y2="113.907" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10E4E2" />
          <stop offset="1" stopColor="#00FF79" />
        </linearGradient>
        <linearGradient id="paint4_linear_510_109" x1="106.078" y1="175.864" x2="182.251" y2="106.556" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint5_linear_510_109" x1="107.187" y1="101.265" x2="179.419" y2="171.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Image>
  );
}

export const LeftArrow = () => {
  return (
    <svg className='leftArrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame">
        <path id="Vector" d="M19 12H5" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M12 19L5 12L12 5" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

export const RightArrow = () => {
  return (
    <svg className='rightArrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5L19 12L12 19" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SocialNetworkPath = styled('svg')(({ }) => ({
  transition: 'all .3s',
  borderRadius: '50%',
  border: '2px solid transparent',
  '&:hover': {
    "@media (hover: hover) and (pointer: fine)": {
      border: '2px solid #CE1AFE',
      transition: 'all 1s',
    },
  }
}));

export const Facebook = () => {
  return (
    <SocialNetworkPath xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M30.4979 15.0044C30.4979 22.5823 24.8824 28.8471 17.5873 29.8638C16.9052 29.9584 16.2073 30.0078 15.4989 30.0078C14.6813 30.0078 13.8783 29.9426 13.0963 29.8164C5.95474 28.6663 0.5 22.4719 0.5 15.0044C0.5 6.71792 7.21595 0 15.5 0C23.7841 0 30.5 6.71792 30.5 15.0044H30.4979Z" fill="url(#paint0_linear_655_22)" fillOpacity="0.2" />
      <path d="M17.5875 12.0482V15.3168H21.6297L20.9897 19.7197H17.5875V29.8639C16.9054 29.9585 16.2076 30.0079 15.4992 30.0079C14.6815 30.0079 13.8785 29.9427 13.0966 29.8166V19.7197H9.36865V15.3168H13.0966V11.3176C13.0966 8.83645 15.1072 6.82422 17.5886 6.82422V6.82632C17.596 6.82632 17.6023 6.82422 17.6096 6.82422H21.6308V10.6321H19.0033C18.2224 10.6321 17.5886 11.266 17.5886 12.0472L17.5875 12.0482Z" fill="#E2E2E2" />
      <defs>
        <linearGradient id="paint0_linear_655_22" x1="26.75" y1="3.81446e-07" x2="5.87481" y2="30.893" gradientUnits="userSpaceOnUse">
          <stop offset="0.00443459" stopColor="#482B8D" />
          <stop offset="1" stopColor="#180C33" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </SocialNetworkPath>
  );
}

export const Instagram = () => {
  return (
    <SocialNetworkPath xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M15.5342 0H15.4658C7.20044 0 0.5 6.70241 0.5 14.9703V15.0386C0.5 23.3064 7.20044 30.0088 15.4658 30.0088H15.5342C23.7996 30.0088 30.5 23.3064 30.5 15.0386V14.9703C30.5 6.70241 23.7996 0 15.5342 0Z" fill="url(#paint0_linear_655_25)" fillOpacity="0.2" />
      <path d="M20.1417 6.10547H10.8589C8.29433 6.10547 6.20801 8.19241 6.20801 10.7577V19.2527C6.20801 21.818 8.29433 23.9049 10.8589 23.9049H20.1417C22.7063 23.9049 24.7926 21.818 24.7926 19.2527V10.7577C24.7926 8.19241 22.7063 6.10547 20.1417 6.10547ZM7.84869 10.7577C7.84869 9.09763 9.19928 7.74663 10.8589 7.74663H20.1417C21.8013 7.74663 23.1519 9.09763 23.1519 10.7577V19.2527C23.1519 20.9128 21.8013 22.2637 20.1417 22.2637H10.8589C9.19928 22.2637 7.84869 20.9128 7.84869 19.2527V10.7577Z" fill="#E2E2E2" />
      <path d="M15.5004 19.3315C17.8852 19.3315 19.8265 17.3907 19.8265 15.0041C19.8265 12.6176 17.8863 10.6768 15.5004 10.6768C13.1146 10.6768 11.1743 12.6176 11.1743 15.0041C11.1743 17.3907 13.1146 19.3315 15.5004 19.3315ZM15.5004 12.319C16.9813 12.319 18.1858 13.5238 18.1858 15.0052C18.1858 16.4865 16.9813 17.6914 15.5004 17.6914C14.0195 17.6914 12.815 16.4865 12.815 15.0052C12.815 13.5238 14.0195 12.319 15.5004 12.319Z" fill="#E2E2E2" />
      <path d="M20.2271 11.3759C20.8693 11.3759 21.3927 10.8533 21.3927 10.2099C21.3927 9.56647 20.8704 9.04395 20.2271 9.04395C19.5839 9.04395 19.0615 9.56647 19.0615 10.2099C19.0615 10.8533 19.5839 11.3759 20.2271 11.3759Z" fill="#E2E2E2" />
      <defs>
        <linearGradient id="paint0_linear_655_25" x1="26.75" y1="3.81459e-07" x2="5.8738" y2="30.8934" gradientUnits="userSpaceOnUse">
          <stop offset="0.00443459" stopColor="#482B8D" />
          <stop offset="1" stopColor="#180C33" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </SocialNetworkPath>
  )
}

export const Youtube = () => {
  return (
    <SocialNetworkPath xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M30.5 15.0044C30.5 6.71771 23.7843 0 15.5 0C7.21574 0 0.5 6.71771 0.5 15.0044C0.5 23.2911 7.21574 30.0088 15.5 30.0088C23.7843 30.0088 30.5 23.2911 30.5 15.0044Z" fill="url(#paint0_linear_655_31)" fillOpacity="0.2" />
      <path d="M24.9454 11.895C24.8273 10.7553 24.5733 9.49532 23.6384 8.83319C22.9143 8.31972 21.9625 8.30074 21.0739 8.30179C19.1956 8.30179 17.3163 8.30496 15.438 8.30601C13.6314 8.30812 11.8247 8.30918 10.0181 8.31129C9.26342 8.31129 8.52981 8.25329 7.82887 8.58014C7.22702 8.8606 6.75586 9.3941 6.47233 9.9877C6.07917 10.8133 5.99696 11.7485 5.94953 12.6615C5.86204 14.3242 5.87153 15.9912 5.97588 17.6528C6.05282 18.8653 6.24782 20.2054 7.18486 20.9782C8.01544 21.6625 9.18752 21.6962 10.2648 21.6973C13.684 21.7005 17.1044 21.7036 20.5248 21.7057C20.9632 21.7068 21.4207 21.6983 21.8676 21.6498C22.7467 21.5549 23.5846 21.303 24.1496 20.6514C24.7198 19.9945 24.8663 19.0804 24.9528 18.2148C25.1636 16.1145 25.1615 13.9942 24.9454 11.895ZM13.4606 17.948V12.0595L18.5579 15.0032L13.4606 17.948Z" fill="#E2E2E2" />
      <defs>
        <linearGradient id="paint0_linear_655_31" x1="26.75" y1="3.81459e-07" x2="5.87379" y2="30.8934" gradientUnits="userSpaceOnUse">
          <stop offset="0.00443459" stopColor="#482B8D" />
          <stop offset="1" stopColor="#180C33" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </SocialNetworkPath>
  );
}

export const Telegram = () => {
  return (
    <SocialNetworkPath xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M15.5342 0H15.4658C7.20043 0 0.5 6.70241 0.5 14.9703V15.0386C0.5 23.3064 7.20043 30.0088 15.4658 30.0088H15.5342C23.7996 30.0088 30.5 23.3064 30.5 15.0386V14.9703C30.5 6.70241 23.7996 0 15.5342 0Z" fill="url(#paint0_linear_655_34)" fillOpacity="0.2" />
      <path d="M6.18214 14.4931C6.22418 14.4721 6.26624 14.4521 6.30723 14.4332C7.01984 14.1031 7.74191 13.794 8.46293 13.4849C8.50182 13.4849 8.56697 13.4397 8.60375 13.425C8.65946 13.4008 8.71517 13.3777 8.77088 13.3535C8.87809 13.3072 8.9853 13.262 9.09145 13.2158C9.30587 13.1243 9.51921 13.0328 9.73363 12.9413L11.017 12.3915C11.8725 12.0256 12.7291 11.6587 13.5847 11.2928C14.4402 10.9269 15.2968 10.56 16.1524 10.1942C17.0079 9.82828 17.8645 9.46136 18.7201 9.09549C19.5756 8.72962 20.4322 8.36269 21.2878 7.99682C21.478 7.91482 21.684 7.79286 21.8879 7.75711C22.0593 7.72662 22.2264 7.66775 22.3987 7.63516C22.7256 7.57313 23.0861 7.5479 23.3993 7.68352C23.5076 7.73083 23.6074 7.79707 23.6905 7.88012C24.0878 8.27333 24.0321 8.91886 23.948 9.47187C23.3625 13.3261 22.7771 17.1815 22.1906 21.0357C22.1107 21.5646 22.0014 22.1449 21.5842 22.4792C21.231 22.7621 20.7286 22.7936 20.2924 22.6737C19.8562 22.5528 19.4716 22.2995 19.0943 22.0503C17.5292 21.0137 15.9632 19.977 14.3982 18.9404C14.0261 18.6944 13.612 18.3727 13.6162 17.9258C13.6183 17.6567 13.7791 17.417 13.9431 17.2035C15.3031 15.4289 17.2654 14.2093 18.7253 12.5166C18.9313 12.2779 19.0932 11.8469 18.8105 11.7092C18.6423 11.6272 18.4489 11.7386 18.2954 11.8448C16.3657 13.1853 14.4371 14.5268 12.5074 15.8673C11.8778 16.3046 11.2177 16.7546 10.4589 16.8619C9.77989 16.9586 9.09671 16.7693 8.43981 16.5759C7.88906 16.414 7.33935 16.2479 6.79175 16.0765C6.50061 15.9861 6.20001 15.8883 5.97509 15.6833C5.75016 15.4783 5.6209 15.1334 5.75649 14.8601C5.84162 14.6887 6.00664 14.5804 6.18006 14.4921L6.18214 14.4931Z" fill="#FEFFFC" />
      <defs>
        <linearGradient id="paint0_linear_655_34" x1="26.75" y1="3.81459e-07" x2="5.87379" y2="30.8934" gradientUnits="userSpaceOnUse">
          <stop offset="0.00443459" stopColor="#482B8D" />
          <stop offset="1" stopColor="#180C33" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </SocialNetworkPath>
  )
}

export const Linkedin = () => {
  return (
    <SocialNetworkPath xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M15.5342 0H15.4658C7.20045 0 0.5 6.70241 0.5 14.9702V15.0386C0.5 23.3064 7.20045 30.0088 15.4658 30.0088H15.5342C23.7996 30.0088 30.5 23.3064 30.5 15.0386V14.9702C30.5 6.70241 23.7996 0 15.5342 0Z" fill="url(#paint0_linear_655_37)" fillOpacity="0.2" />
      <path d="M7.65447 9.97463C7.25928 9.60771 7.06274 9.15353 7.06274 8.61313C7.06274 8.07273 7.26033 7.59857 7.65447 7.2306C8.04966 6.86367 8.55837 6.67969 9.18164 6.67969C9.80491 6.67969 10.2937 6.86367 10.6878 7.2306C11.083 7.59752 11.2795 8.05907 11.2795 8.61313C11.2795 9.16719 11.0819 9.60771 10.6878 9.97463C10.2926 10.3416 9.79125 10.5255 9.18164 10.5255C8.57204 10.5255 8.04966 10.3416 7.65447 9.97463ZM10.9474 12.0794V23.3289H7.39381V12.0794H10.9474Z" fill="#FEFFFC" />
      <path d="M22.7766 13.1903C23.5512 14.0314 23.938 15.1858 23.938 16.6556V23.1298H20.5631V17.1119C20.5631 16.3707 20.3708 15.7945 19.9871 15.3845C19.6035 14.9745 19.0864 14.7684 18.439 14.7684C17.7915 14.7684 17.2744 14.9734 16.8907 15.3845C16.5071 15.7945 16.3148 16.3707 16.3148 17.1119V23.1298H12.9199V12.0475H16.3148V13.5173C16.6585 13.0274 17.122 12.6405 17.7043 12.3556C18.2866 12.0706 18.9414 11.9287 19.6697 11.9287C20.9667 11.9287 22.003 12.3493 22.7766 13.1893V13.1903Z" fill="#FEFFFC" />
      <defs>
        <linearGradient id="paint0_linear_655_37" x1="26.75" y1="3.81459e-07" x2="5.87381" y2="30.8934" gradientUnits="userSpaceOnUse">
          <stop offset="0.00443459" stopColor="#482B8D" />
          <stop offset="1" stopColor="#180C33" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </SocialNetworkPath>
  )
}

const CustomCloseIconSVG = styled('svg')(({ }) => ({
  width: '32px',
  height: '32px',
  '& path': {
    transition: 'all 0.2s linear',
  },
  '&:hover path': {
    "@media (hover: hover) and (pointer: fine)": {
      stroke: 'red',
    },
  }
}));

export const CloseIcon = () => {
  return (
    <CustomCloseIconSVG xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
      <path d="M16.3524 16.1431L29.7855 29.1045" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.5496 15.9072L16.5882 29.3403" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </CustomCloseIconSVG>
  );
}