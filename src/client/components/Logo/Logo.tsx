import React from "react";
import { StyledLogoWrapper, StyledPath, StyledSvg } from "./styles";

const Logo: React.FC = () => {
  return (
    <StyledLogoWrapper>
      <StyledSvg
        width="412"
        height="104"
        viewBox="0 0 412 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3706 25.1631L15.6879 33.4739C18.1628 30.6267 21.5559 28.2797 25.8671 26.4329C30.2581 24.586 34.689 23.6626 39.1599 23.6626C52.7321 23.6626 59.5182 33.8202 59.5182 54.1354C59.5182 65.0625 57.682 72.7192 54.0095 77.1054C50.4168 81.4147 44.7484 83.5694 37.0043 83.5694C29.0206 83.5694 22.4341 81.7225 17.2447 78.0289C17.6439 81.9534 17.7636 86.0318 17.604 90.2642V104H0V25.1631H14.3706ZM17.604 42.4772V68.5638C23.8312 70.1029 28.3021 70.8724 31.0165 70.8724C34.9285 70.8724 37.6031 69.795 39.0401 67.6404C40.557 65.4858 41.3155 60.9841 41.3155 54.1354C41.3155 47.4406 40.6368 42.939 39.2796 40.6304C37.9224 38.2449 35.5273 37.0522 32.0943 37.0522C28.1823 37.0522 23.3522 38.8605 17.604 42.4772Z"
          fill="#7B61FF"
        />
        <path
          d="M79.7682 0H87.672C91.105 0 92.8215 1.65446 92.8215 4.96337V11.1964C92.8215 14.5054 91.105 16.1598 87.672 16.1598H79.7682C76.3352 16.1598 74.6187 14.5054 74.6187 11.1964V4.96337C74.6187 1.65446 76.3352 0 79.7682 0ZM92.582 82.0688H74.978V25.1631H92.582V82.0688Z"
          fill="#7B61FF"
        />
        <path
          d="M137.113 58.1754H136.395L122.383 82.0688H104.181L122.383 52.8657L105.498 25.1631H123.581L136.155 47.0943H137.353L149.927 25.1631H168.01L151.125 52.8657L169.327 82.0688H151.125L137.113 58.1754Z"
          fill="#7B61FF"
        />
        <StyledPath d="M218.18 59.3296H196.864C197.422 63.485 198.7 66.2937 200.696 67.7558C202.772 69.141 206.165 69.8335 210.875 69.8335C217.182 69.8335 224.527 69.4103 232.91 68.5638L234.586 79.1831C228.439 82.0303 219.857 83.4539 208.839 83.4539C197.742 83.4539 189.838 81.1454 185.128 76.5283C180.417 71.9112 178.062 64.293 178.062 53.6737C178.062 42.5157 180.337 34.7051 184.888 30.242C189.519 25.7788 197.263 23.5472 208.121 23.5472C217.94 23.5472 225.046 25.2016 229.437 28.5105C233.828 31.7425 236.063 36.7059 236.143 43.4007C236.143 48.7103 234.706 52.7118 231.832 55.4051C229.038 58.0215 224.487 59.3296 218.18 59.3296ZM196.504 49.0566H213.27C215.426 49.0566 216.863 48.5564 217.581 47.556C218.38 46.5557 218.779 45.0936 218.779 43.1698C218.779 40.4765 218.06 38.6297 216.623 37.6293C215.186 36.552 212.552 36.0133 208.719 36.0133C204.169 36.0133 201.055 36.8983 199.379 38.6681C197.702 40.3611 196.744 43.8239 196.504 49.0566Z" />
        <StyledPath d="M264.412 25.1631L265.61 33.4739C273.114 26.8561 280.619 23.5472 288.124 23.5472C296.107 23.5472 301.177 26.6252 303.333 32.7814C310.278 26.6252 317.464 23.5472 324.888 23.5472C330.237 23.5472 334.309 24.8938 337.103 27.5871C339.898 30.2804 341.295 34.205 341.295 39.3607V82.0688H323.691V44.6704C323.691 42.2079 323.252 40.4765 322.374 39.4761C321.495 38.4758 319.859 37.9756 317.464 37.9756C315.548 37.9756 313.711 38.3219 311.955 39.0144C310.198 39.707 307.644 41.0536 304.291 43.0544V82.0688H287.285V44.6704C287.285 42.2079 286.766 40.4765 285.729 39.4761C284.77 38.4758 283.174 37.9756 280.938 37.9756C277.825 37.9756 273.474 39.63 267.885 42.9389V82.0688H250.281V25.1631H264.412Z" />
        <StyledPath d="M359.667 37.8602L357.991 26.3174C368.609 24.4706 378.868 23.5472 388.768 23.5472C396.751 23.5472 402.619 25.1247 406.372 28.2797C410.124 31.3577 412 36.7444 412 44.4395V82.0688H397.989L396.192 73.4118C390.284 80.1066 383.019 83.4539 374.397 83.4539C368.729 83.4539 364.098 82.0303 360.505 79.1831C356.913 76.259 355.116 72.219 355.116 67.0633V61.2919C355.116 56.7518 356.713 53.212 359.907 50.6726C363.1 48.1332 367.531 46.8635 373.199 46.8635H394.276V44.3241C394.196 41.3999 393.478 39.4377 392.121 38.4373C390.843 37.4369 388.328 36.9367 384.576 36.9367C378.029 36.9367 369.727 37.2445 359.667 37.8602ZM372.601 62.5616V64.7547C372.601 68.6792 374.916 70.6415 379.546 70.6415C384.337 70.6415 389.247 68.7947 394.276 65.101V57.1365H378.349C374.517 57.2135 372.601 59.0218 372.601 62.5616Z" />
      </StyledSvg>
    </StyledLogoWrapper>
  );
};

export default Logo;
