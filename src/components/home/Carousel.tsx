export default function Carousel() {
  return (
    <div className="bg-gray-800">
      <div className="px-4 py-12">
        <div className="w-full lg:px-10 md:px-6 px-4 py-12 bg-white mx-auto">
          <div className="lg:flex gap-8 items-center justify-center">
            <div>
              <p className="lg:text-6xl text-5xl font-bold text-gray-800">
                Beauty In Style
              </p>
              <p className="text-2xl text-gray-600 mt-6 lg:max-w-[515px] font-normal w-full">
                Find the latest collections that suit your needs and tastes.
              </p>
              <button className="lg:max-w-[296px] w-full bg-gray-800 text-white py-3 transition duration-300 hover:bg-gray-700 mt-10">
                Shop now
              </button>
            </div>
            <div className="md:flex gap-8 lg:mt-0 mt-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blackcat.png"
                  alt="shirt"
                  className="lg:block hidden"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/b-md-bst.png"
                  alt="shirt"
                  className="lg:hidden md:block hidden"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/belltttt.png"
                  alt="shirt"
                  className="md:hidden block"
                />
              </div>
              <div className="md:mt-0 mt-4">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/31258.png "
                  alt="shirt"
                  className="lg:block hidden"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/yyyellloee.png"
                  alt="shirt"
                  className="lg:hidden md:block hidden"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/belly-sm.png"
                  alt="shirt"
                  className="md:hidden block"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex gap-8 mt-14">
            <div>
              <p className="text-4xl font-semibold leading-9 text-gray-800">
                Categories
              </p>
            </div>
            <div className="w-full lg:block md:hidden block ">
              <div className="lg:flex justify-items-center gap-8 w-full">
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-6">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/1032.png"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                      Bags
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-4">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/heeeels.png"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6">
                      Heels
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-4">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/coatsss.png"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6">
                      Coats
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-4">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sssssssvg.svg"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6">
                      Accessories
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-4">
                  <div>
                    <svg
                      className="mx-auto"
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.9499 29.517C27.1041 29.517 28.8567 27.7644 28.8567 25.6101C28.8567 23.4558 27.1041 21.7031 24.9499 21.7031C22.7956 21.7031 21.043 23.4557 21.043 25.61C21.043 27.7643 22.7956 29.517 24.9499 29.517ZM24.9499 28.3401C23.6466 28.3401 22.5544 27.4218 22.2844 26.1986H27.6152C27.3453 27.4218 26.2531 28.3401 24.9499 28.3401ZM24.9499 22.8801C26.2531 22.8801 27.3453 23.7983 27.6153 25.0215H22.2845C22.5544 23.7982 23.6466 22.8801 24.9499 22.8801Z"
                        fill="#6B7280"
                      />
                      <path
                        d="M55.9961 40.1677L54.7968 17.3205C54.7683 16.782 54.537 16.2811 54.1456 15.91C53.7548 15.5395 53.2428 15.3355 52.7038 15.3355C51.5487 15.3355 50.6089 16.2753 50.6089 17.4305V18.1708H49.9027V16.9593C49.9027 15.4857 48.7037 14.2868 47.2302 14.2868H29.2472V14.0691C29.2472 13.4753 28.7642 12.9922 28.1703 12.9922H21.7324C21.1386 12.9922 20.6555 13.4752 20.6555 14.0691V14.2868H2.6725C1.19896 14.2868 0 15.4857 0 16.9593V38.1649C0 39.4057 1.00947 40.4151 2.25021 40.4151H47.6525C48.8932 40.4151 49.9027 39.4057 49.9027 38.1649V20.9954H50.6089V40.3092C50.6089 41.7953 51.8179 43.0044 53.3041 43.0044C54.0513 43.0044 54.746 42.7059 55.2602 42.164C55.774 41.6222 56.0354 40.9132 55.9961 40.1677ZM47.2302 15.4638C47.2354 15.4638 47.2405 15.4638 47.2457 15.4639C47.9548 15.4712 48.4732 16.1416 48.34 16.8381L47.1285 23.1787C46.9242 24.246 45.9877 25.0206 44.9018 25.0206H31.6556C31.5345 23.6084 30.9805 22.2954 30.0687 21.235C30.2614 21.1382 30.3949 20.941 30.3949 20.7107V18.7591C30.3949 18.4342 30.1313 18.1707 29.8064 18.1707H29.2473V15.4637H47.2302V15.4638ZM29.2178 19.3477V20.1224H20.6849V19.3477H29.2178ZM21.4512 21.2993H28.4522C29.7592 22.3605 30.5065 23.9196 30.5065 25.6091C30.5065 27.1332 29.9011 28.5549 28.8019 29.6123C27.7031 30.669 26.2561 31.2177 24.7294 31.1589C21.8477 31.0471 19.507 28.7016 19.4005 25.8194C19.3367 24.0726 20.1014 22.3984 21.4512 21.2993ZM28.0703 14.1691V18.1708H21.8324V14.1691H28.0703ZM2.6725 15.4638H20.6555V18.1708H20.0964C19.7715 18.1708 19.5079 18.4343 19.5079 18.7592V20.7109C19.5079 20.9427 19.6433 21.1414 19.8383 21.2373C18.9324 22.299 18.3714 23.6211 18.247 25.0206H5.00086C3.91489 25.0206 2.97851 24.2459 2.77431 23.1788L1.56264 16.838C1.42952 16.1415 1.94797 15.4711 2.65697 15.4638C2.66214 15.4638 2.66732 15.4638 2.6725 15.4638ZM47.6525 39.2382H2.25021C1.65844 39.2382 1.17695 38.7567 1.17695 38.1649V21.0905L1.61831 23.4C1.92855 25.021 3.35125 26.1977 5.00086 26.1977H18.2453C18.5368 29.5366 21.303 32.2039 24.6836 32.335C24.7743 32.3385 24.8648 32.3403 24.9551 32.3403C26.7045 32.3403 28.3513 31.6785 29.6177 30.4606C30.8073 29.3166 31.5178 27.82 31.6567 26.1977H44.9018C46.5516 26.1977 47.9741 25.0211 48.2845 23.3998L48.7257 21.0907V38.1649C48.7257 38.7567 48.2442 39.2382 47.6525 39.2382ZM49.9027 19.3477H51.6681C51.7979 19.3477 51.9035 19.4533 51.9035 19.5831C51.9035 19.7129 51.7979 19.8185 51.6681 19.8185H49.9027V19.3477ZM54.4063 41.3539C54.1166 41.6593 53.7252 41.8274 53.3041 41.8274C52.4669 41.8274 51.7858 41.1463 51.7858 40.3091V20.9894C52.5095 20.9293 53.0805 20.3221 53.0805 19.5831C53.0805 18.8441 52.5095 18.2369 51.7858 18.1768V17.4305C51.7858 16.9243 52.1976 16.5124 52.7038 16.5124C52.9402 16.5124 53.1647 16.6018 53.3359 16.7641C53.5076 16.9269 53.609 17.1466 53.6215 17.3824L54.8208 40.2295C54.8429 40.6495 54.6957 41.0488 54.4063 41.3539Z"
                        fill="#6B7280"
                      />
                    </svg>
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                      Bags
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden md:block hidden">
              <div className="flex gap-6 mt-8">
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-4">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/1032.png"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                      Bags
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center lg:mt-0 mt-4">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/heeeels.png"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                      Heels
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-6">
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/coatsss.png"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                      Coats
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 lg:max-w-[186px] max-h-[148px] py-6 w-full text-center">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sssssssvg.svg"
                      className="mx-auto"
                    />
                    <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                      Accessories
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 md:max-w-[336px] max-h-[148px] py-6 w-full text-center mt-6">
                <div>
                  <svg
                    className="mx-auto"
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9499 29.517C27.1041 29.517 28.8567 27.7644 28.8567 25.6101C28.8567 23.4558 27.1041 21.7031 24.9499 21.7031C22.7956 21.7031 21.043 23.4557 21.043 25.61C21.043 27.7643 22.7956 29.517 24.9499 29.517ZM24.9499 28.3401C23.6466 28.3401 22.5544 27.4218 22.2844 26.1986H27.6152C27.3453 27.4218 26.2531 28.3401 24.9499 28.3401ZM24.9499 22.8801C26.2531 22.8801 27.3453 23.7983 27.6153 25.0215H22.2845C22.5544 23.7982 23.6466 22.8801 24.9499 22.8801Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M55.9961 40.1677L54.7968 17.3205C54.7683 16.782 54.537 16.2811 54.1456 15.91C53.7548 15.5395 53.2428 15.3355 52.7038 15.3355C51.5487 15.3355 50.6089 16.2753 50.6089 17.4305V18.1708H49.9027V16.9593C49.9027 15.4857 48.7037 14.2868 47.2302 14.2868H29.2472V14.0691C29.2472 13.4753 28.7642 12.9922 28.1703 12.9922H21.7324C21.1386 12.9922 20.6555 13.4752 20.6555 14.0691V14.2868H2.6725C1.19896 14.2868 0 15.4857 0 16.9593V38.1649C0 39.4057 1.00947 40.4151 2.25021 40.4151H47.6525C48.8932 40.4151 49.9027 39.4057 49.9027 38.1649V20.9954H50.6089V40.3092C50.6089 41.7953 51.8179 43.0044 53.3041 43.0044C54.0513 43.0044 54.746 42.7059 55.2602 42.164C55.774 41.6222 56.0354 40.9132 55.9961 40.1677ZM47.2302 15.4638C47.2354 15.4638 47.2405 15.4638 47.2457 15.4639C47.9548 15.4712 48.4732 16.1416 48.34 16.8381L47.1285 23.1787C46.9242 24.246 45.9877 25.0206 44.9018 25.0206H31.6556C31.5345 23.6084 30.9805 22.2954 30.0687 21.235C30.2614 21.1382 30.3949 20.941 30.3949 20.7107V18.7591C30.3949 18.4342 30.1313 18.1707 29.8064 18.1707H29.2473V15.4637H47.2302V15.4638ZM29.2178 19.3477V20.1224H20.6849V19.3477H29.2178ZM21.4512 21.2993H28.4522C29.7592 22.3605 30.5065 23.9196 30.5065 25.6091C30.5065 27.1332 29.9011 28.5549 28.8019 29.6123C27.7031 30.669 26.2561 31.2177 24.7294 31.1589C21.8477 31.0471 19.507 28.7016 19.4005 25.8194C19.3367 24.0726 20.1014 22.3984 21.4512 21.2993ZM28.0703 14.1691V18.1708H21.8324V14.1691H28.0703ZM2.6725 15.4638H20.6555V18.1708H20.0964C19.7715 18.1708 19.5079 18.4343 19.5079 18.7592V20.7109C19.5079 20.9427 19.6433 21.1414 19.8383 21.2373C18.9324 22.299 18.3714 23.6211 18.247 25.0206H5.00086C3.91489 25.0206 2.97851 24.2459 2.77431 23.1788L1.56264 16.838C1.42952 16.1415 1.94797 15.4711 2.65697 15.4638C2.66214 15.4638 2.66732 15.4638 2.6725 15.4638ZM47.6525 39.2382H2.25021C1.65844 39.2382 1.17695 38.7567 1.17695 38.1649V21.0905L1.61831 23.4C1.92855 25.021 3.35125 26.1977 5.00086 26.1977H18.2453C18.5368 29.5366 21.303 32.2039 24.6836 32.335C24.7743 32.3385 24.8648 32.3403 24.9551 32.3403C26.7045 32.3403 28.3513 31.6785 29.6177 30.4606C30.8073 29.3166 31.5178 27.82 31.6567 26.1977H44.9018C46.5516 26.1977 47.9741 25.0211 48.2845 23.3998L48.7257 21.0907V38.1649C48.7257 38.7567 48.2442 39.2382 47.6525 39.2382ZM49.9027 19.3477H51.6681C51.7979 19.3477 51.9035 19.4533 51.9035 19.5831C51.9035 19.7129 51.7979 19.8185 51.6681 19.8185H49.9027V19.3477ZM54.4063 41.3539C54.1166 41.6593 53.7252 41.8274 53.3041 41.8274C52.4669 41.8274 51.7858 41.1463 51.7858 40.3091V20.9894C52.5095 20.9293 53.0805 20.3221 53.0805 19.5831C53.0805 18.8441 52.5095 18.2369 51.7858 18.1768V17.4305C51.7858 16.9243 52.1976 16.5124 52.7038 16.5124C52.9402 16.5124 53.1647 16.6018 53.3359 16.7641C53.5076 16.9269 53.609 17.1466 53.6215 17.3824L54.8208 40.2295C54.8429 40.6495 54.6957 41.0488 54.4063 41.3539Z"
                      fill="#6B7280"
                    />
                  </svg>
                  <p className="text-2xl font-medium leading-normal text-gray-600 mt-6 mb-6">
                    Bags
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
