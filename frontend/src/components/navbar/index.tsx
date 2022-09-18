import React from "react";
import "./index.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar-container">
      <div>
        <svg
          width="150"
          height="25"
          viewBox="0 0 204 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.8811 28.413C45.1717 28.413 41.2793 23.6248 41.2793 16.4425C41.2793 9.22833 45.4251 4.63965 52.0707 4.63965C57.1661 4.63965 60.8051 7.55047 61.7229 12.6758H57.8564C57.1601 9.57547 54.9137 7.92953 51.939 7.92953C48.3 7.92953 45.4191 10.9062 45.4191 16.4425C45.4191 22.0128 48.2361 25.1131 51.9071 25.1131C55.0074 25.1131 57.224 23.4991 57.9202 20.3668H61.7867C60.8371 25.5022 57.1661 28.413 51.8811 28.413Z"
            fill="white"
          />
          <path
            d="M72.9943 10.5969C77.1082 10.5969 78.78 13.2544 78.78 17.3044V28.002H75.0153V18.2261C75.0153 15.9138 74.6722 13.6674 71.7913 13.6674C68.9104 13.6674 67.833 15.8819 67.833 18.9503V28.002H64.0703V5.05859H67.833V13.3501C68.8166 11.5765 70.6261 10.5969 72.9943 10.5969Z"
            fill="white"
          />
          <path
            d="M97.232 10.9762V28.0022H93.4673V25.7558C92.4538 27.4316 90.6742 28.4132 88.4038 28.4132C84.1303 28.4132 80.998 24.9637 80.998 19.4892C80.998 14.0147 84.1303 10.5972 88.4038 10.5972C90.6821 10.5972 92.4538 11.5768 93.4673 13.2546V10.9762H97.232ZM84.9224 19.4892C84.9224 23.0963 86.4725 25.3428 89.2257 25.3428C91.6937 25.3428 93.6149 23.4135 93.6149 19.4892C93.6149 15.5649 91.6937 13.6676 89.2257 13.6676C86.4725 13.6676 84.9224 15.8821 84.9224 19.4892Z"
            fill="white"
          />
          <path
            d="M116.156 10.6309C120.27 10.6309 121.942 13.2883 121.942 17.3383V28.0319H118.181V18.256C118.181 15.9457 117.834 13.6993 114.953 13.6993C112.072 13.6993 110.997 15.9138 110.997 18.9823V28.0319H107.232V11.0099H110.997V13.3841C111.979 11.6124 113.782 10.6309 116.156 10.6309Z"
            fill="white"
          />
          <path
            d="M131.182 13.5098C129.536 13.5098 128.018 14.238 128.018 15.3772C128.018 16.5163 128.84 17.1169 130.296 17.4022L132.702 17.877C136.15 18.5413 138.777 19.6167 138.777 22.9405C138.777 26.4857 135.424 28.4469 131.561 28.4469C127.386 28.4469 124.6 26.0728 124.189 22.8447H127.86C128.208 24.5864 129.474 25.5999 131.689 25.5999C133.65 25.5999 135.107 24.776 135.107 23.3834C135.107 21.9908 133.842 21.3584 132.164 21.0412L129.6 20.5364C126.721 19.9658 124.473 18.669 124.473 15.5667C124.473 12.5601 127.701 10.6309 131.404 10.6309C134.727 10.6309 137.764 12.2449 138.46 15.6624H134.917C134.506 14.1123 133.082 13.5098 131.182 13.5098Z"
            fill="white"
          />
          <path
            d="M146.136 6.51709V11.01H149.554V13.7313H146.136V23.0044C146.136 24.7441 146.547 25.1551 148.161 25.1551H149.522V28.032H146.729C143.09 28.032 142.362 27.0504 142.362 23.569V13.7313H139.838V11.01H142.37V6.51709H146.136Z"
            fill="white"
          />
          <path
            d="M167.683 11.0099V28.0319H163.916V25.7895C162.905 27.4653 161.123 28.4469 158.853 28.4469C154.582 28.4469 151.447 24.9974 151.447 19.5229C151.447 14.0484 154.582 10.6309 158.853 10.6309C161.131 10.6309 162.905 11.6124 163.916 13.2883V11.0099H167.683ZM155.374 19.5229C155.374 23.13 156.924 25.3765 159.677 25.3765C162.145 25.3765 164.066 23.4472 164.066 19.5229C164.066 15.5986 162.137 13.7013 159.677 13.7013C156.924 13.7013 155.374 15.9158 155.374 19.5229Z"
            fill="white"
          />
          <path
            d="M182.46 16.8337C182.151 15.0281 180.555 13.7633 178.504 13.7633C176.164 13.7633 174.043 15.505 174.043 19.523C174.043 23.5731 176.193 25.3088 178.41 25.3088C180.243 25.3088 182.111 24.4848 182.586 22.2064H186.257C185.499 26.1966 181.985 28.441 178.346 28.441C173.408 28.441 170.15 24.6125 170.15 19.549C170.15 14.4855 173.44 10.625 178.504 10.625C182.207 10.625 185.499 13.0191 186.131 16.8277L182.46 16.8337Z"
            fill="white"
          />
          <path
            d="M192.245 17.8454L198.542 11.0103H203.067L196.549 18.005L203.795 28.0323H199.406L194.059 20.6505L192.263 22.5817V28.0323H188.479V5.08887H192.245V17.8454Z"
            fill="white"
          />
          <path
            d="M104.183 28.0021H100.416V10.9761H104.183V28.0021Z"
            fill="white"
          />
          <path
            d="M102.3 9.77131C103.715 9.77131 104.862 8.62441 104.862 7.20963C104.862 5.79485 103.715 4.64795 102.3 4.64795C100.885 4.64795 99.7383 5.79485 99.7383 7.20963C99.7383 8.62441 100.885 9.77131 102.3 9.77131Z"
            fill="white"
          />
          <path
            d="M22.9235 23.4235H7.31795C6.77424 23.4245 6.23565 23.3183 5.73307 23.1108C5.23049 22.9034 4.7738 22.5988 4.38918 22.2144L1.19706 19.0223C0.428303 18.2472 -0.00210899 17.1992 8.3354e-06 16.1075V7.81795C-0.00108377 7.27424 0.105149 6.73565 0.312618 6.23307C0.520086 5.73049 0.82471 5.2738 1.20903 4.88918L4.40115 1.69706C5.17697 0.928185 6.22568 0.497799 7.31795 0.500008H22.9235V5.08869H8.71251C7.61913 5.08974 6.57083 5.52456 5.7977 6.2977C5.02456 7.07083 4.58974 8.11913 4.58869 9.21251V14.711C4.58869 15.805 5.02303 16.8543 5.79629 17.6283C6.56954 18.4023 7.61844 18.8377 8.71251 18.8388H22.9235V23.4235Z"
            fill="white"
          />
          <path
            d="M9.17773 9.67725H24.7852C25.8755 9.67619 26.9219 10.1065 27.6961 10.8743L30.8882 14.0664C31.6623 14.8405 32.0972 15.8905 32.0972 16.9852V25.2748C32.0972 26.3695 31.6623 27.4195 30.8882 28.1936L27.6961 31.3857C26.9219 32.1598 25.872 32.5947 24.7773 32.5947H9.17773V28.006H23.3887C24.4834 28.006 25.5334 27.5711 26.3075 26.797C27.0816 26.0229 27.5165 24.973 27.5165 23.8782V18.3818C27.5165 17.287 27.0816 16.2371 26.3075 15.463C25.5334 14.6889 24.4834 14.254 23.3887 14.254H9.17773V9.67725Z"
            fill="white"
          />
        </svg>
        <span className="">Bridge</span>
      </div>
    </nav>
  );
}

export default Navbar;