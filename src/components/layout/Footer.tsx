import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className="mx-auto lg:px-[80px] md:px-4 sm:px-4 px-4 ">
          <div className="grid grid-cols-12 lg:pb-[65px] md:pb-[64px] pb-8 lg:pt-14 md:pt-12 pt-8">
            <div className="col-span-12 contact lg:col-span-3 md:col-span-4">
              <p className="mb-8 text-xl font-semibold leading-5 text-gray-800">
                Contact
              </p>
              <div className="flex">
                <div className="svg-container">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.1875 5.24023H4.8125C3.60438 5.24023 2.625 6.21783 2.625 7.42375V20.5249C2.625 21.7308 3.60438 22.7084 4.8125 22.7084H23.1875C24.3956 22.7084 25.375 21.7308 25.375 20.5249V7.42375C25.375 6.21783 24.3956 5.24023 23.1875 5.24023Z"
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.125 8.73438L14 14.8482L21.875 8.73438"
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col ml-4">
                  <p className="text-base font-medium leading-none text-gray-800">
                    Send us email
                  </p>
                  <p className="mt-2 text-base leading-none text-gray-600">
                    luxe@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="svg-container">
                  <svg
                    width={27}
                    height={28}
                    viewBox="0 0 27 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7835 20.4161C22.9461 19.5427 20.9179 18.2681 19.9339 17.7544C18.6525 17.0863 18.547 17.0317 17.5398 17.8063C16.8679 18.3232 16.4213 18.785 15.635 18.6115C14.8487 18.4379 13.1401 17.4591 11.6441 15.9154C10.148 14.3716 9.14761 12.5516 8.97939 11.7405C8.81116 10.9293 9.26468 10.4724 9.75933 9.7753C10.4565 8.79272 10.4037 8.62895 9.80784 7.30246C9.34325 6.27075 8.07605 4.19095 7.22913 3.32846C6.32315 2.4021 6.32315 2.56587 5.73938 2.81697C5.26413 3.02396 4.80818 3.27557 4.37726 3.56865C3.53351 4.14892 3.06522 4.63093 2.73774 5.35531C2.41026 6.07969 2.26313 7.77792 3.95433 10.9582C5.64552 14.1385 6.83204 15.7647 9.28788 18.2998C11.7437 20.8348 13.6321 22.1979 16.3928 23.8006C19.8079 25.7805 21.1178 25.3946 21.8197 25.0561C22.5216 24.7177 22.9893 24.2373 23.551 23.3639C23.8348 22.9186 24.0784 22.4471 24.2787 21.9555C24.5218 21.3534 24.68 21.3534 23.7835 20.4161Z"
                      stroke="#4B5563"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <div className="flex flex-col ml-4">
                  <p className="text-base font-medium leading-none text-gray-800">
                    Call us
                  </p>
                  <p className="mt-2 text-base leading-none text-gray-600">
                    333 333-33-3333
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-8 about lg:col-span-3 md:col-span-4 md:mt-0">
              <p className="mb-8 text-xl font-semibold leading-5 text-gray-800">
                About Luxe
              </p>
              <div className="flex flex-col">
                <a className="text-base leading-none text-gray-600 cursor-pointer">
                  The company
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  Luxe App for IOS &amp; Andriod
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  Customer Feedback
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  News
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  Media
                </a>
              </div>
            </div>
            <div className="col-span-12 mt-8 about lg:col-span-3 md:col-span-4 md:mt-0">
              <p className="mb-8 text-xl font-semibold leading-5 text-gray-800">
                Help
              </p>
              <div className="flex flex-col">
                <a className="text-base leading-none text-gray-600 cursor-pointer">
                  FAQ’S
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  How to buy
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  Payment
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  Shipping &amp; Deliveries
                </a>
                <a className="mt-6 text-base leading-none text-gray-600 cursor-pointer">
                  Exchange and Returns
                </a>
              </div>
            </div>
            <div className="col-span-4 mt-8 follow-us lg:col-span-3 md:col-span-3 md:mt-0">
              <p className="mb-6 text-xl font-semibold leading-5 text-gray-800 sm:mb-9">
                Follow Us
              </p>
              <div className="flex flex-shrink-0 w-96">
                <svg
                  className="cursor-pointer "
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  className="ml-6 cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.25 5.13282C22.406 5.49955 21.513 5.74116 20.5992 5.85001C21.5595 5.28769 22.2817 4.39434 22.6303 3.33751C21.7224 3.86841 20.7307 4.24092 19.6978 4.43907C19.2629 3.98322 18.7397 3.62059 18.1603 3.3732C17.5808 3.12581 16.9571 2.99884 16.327 3.00001C13.7761 3.00001 11.7117 5.03438 11.7117 7.5422C11.7099 7.89102 11.7499 8.23881 11.8308 8.57813C10.0016 8.49238 8.2104 8.02575 6.57187 7.2081C4.93333 6.39044 3.48351 5.23977 2.31516 3.8297C1.90527 4.52069 1.6885 5.30909 1.6875 6.11251C1.6875 7.68751 2.50922 9.0797 3.75 9.89532C3.01487 9.87787 2.29481 9.68331 1.65094 9.32813V9.38438C1.65094 11.5875 3.24469 13.4203 5.35406 13.8375C4.9574 13.9432 4.54864 13.9968 4.13812 13.9969C3.84683 13.9974 3.5562 13.9691 3.27047 13.9125C3.85687 15.7172 5.56359 17.0297 7.58531 17.0672C5.94252 18.3333 3.9256 19.0175 1.85156 19.0125C1.48341 19.012 1.11561 18.99 0.75 18.9469C2.85993 20.2942 5.31255 21.0068 7.81594 21C16.3172 21 20.9616 14.0766 20.9616 8.07188C20.9616 7.87501 20.9564 7.67813 20.947 7.48595C21.8485 6.84472 22.6283 6.04787 23.25 5.13282Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  className="ml-6 cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1235_3267)">
                    <path
                      d="M23.8418 6.97453C23.8418 4.86516 22.2902 3.16828 20.3731 3.16828C17.7762 3.04687 15.1277 3 12.4212 3H11.5774C8.87743 3 6.22431 3.04687 3.62743 3.16875C1.71493 3.16875 0.163371 4.875 0.163371 6.98437C0.0461835 8.65266 -0.00350401 10.3214 -0.000691512 11.9902C-0.00537901 13.6589 0.047746 15.3292 0.158683 17.0011C0.158683 19.1105 1.71025 20.8214 3.62275 20.8214C6.35087 20.948 9.14931 21.0042 11.9946 20.9995C14.8446 21.0089 17.6352 20.9495 20.3665 20.8214C22.2837 20.8214 23.8352 19.1105 23.8352 17.0011C23.9477 15.3277 23.9993 13.6589 23.9946 11.9855C24.0052 10.3167 23.9543 8.64641 23.8418 6.97453ZM9.70243 16.5886V7.37766L16.4993 11.9808L9.70243 16.5886Z"
                      fill="#1F2937"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1235_3267">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className="ml-6 cursor-pointer"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0029 1.5C6.20449 1.5 1.50293 6.20156 1.50293 12C1.50293 16.2984 4.09043 19.9922 7.78887 21.6188C7.76074 20.8875 7.78418 20.0062 7.97168 19.2094C8.17324 18.3562 9.32168 13.4859 9.32168 13.4859C9.32168 13.4859 8.98418 12.8156 8.98418 11.8266C8.98418 10.2703 9.88418 9.10781 11.0092 9.10781C11.9654 9.10781 12.4248 9.825 12.4248 10.6828C12.4248 11.6437 11.8107 13.0781 11.4967 14.4094C11.2342 15.525 12.0545 16.4297 13.1561 16.4297C15.1436 16.4297 16.4842 13.875 16.4842 10.8469C16.4842 8.54531 14.9326 6.825 12.1154 6.825C8.93262 6.825 6.94512 9.20156 6.94512 11.8547C6.94512 12.7687 7.21699 13.4156 7.63887 13.9125C7.83105 14.1422 7.85918 14.2359 7.78887 14.4984C7.7373 14.6906 7.6248 15.1547 7.57324 15.3422C7.50293 15.6094 7.2873 15.7031 7.04824 15.6047C5.58105 15.0047 4.89668 13.4016 4.89668 11.5922C4.89668 8.61094 7.41387 5.03438 12.4014 5.03438C16.4092 5.03438 19.0482 7.93594 19.0482 11.0484C19.0482 15.1687 16.7561 18.2438 13.3811 18.2438C12.2467 18.2438 11.1826 17.6297 10.817 16.9359C10.817 16.9359 10.2076 19.3547 10.0764 19.8234C9.85605 20.6344 9.42012 21.4406 9.02168 22.0734C9.98819 22.3586 10.9906 22.5038 11.9982 22.5047C17.7967 22.5047 22.4982 17.8031 22.4982 12.0047C22.4982 6.20625 17.8014 1.5 12.0029 1.5Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-200 h-[1px] w-full" />
        <div className="mx-auto lg:px-[80px] md:px-4 sm:px-4 px-4 ">
          <p className="py-6 text-sm leading-none text-center text-gray-500 md:pt-8 md:pb-12 lg:text-left md:text-center">
            © 2021 Luxe Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
