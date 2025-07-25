import React from 'react'
import { logo1 } from '../Images/images'
import { useTranslation } from 'react-i18next';

function Vission() {
      const { t } = useTranslation();
  return (
    <div class=" flex flex-wrap   mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white dark:bg-gray-900 dark:text-white/80">

    <div className="w-96 p-2 ">
        <img className='rounded-lg' src={logo1}/>
    </div>
    
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mb-9 rounded-xl  min-h-[400px] py-8 px-7 shadow-md transition-all hover:shadow-lg dark:bg-gray-700 sm:p-9 lg:px-6 xl:px-9">
            <div class="mx-auto mb-7 inline-block"><svg width="53" height="61" viewBox="0 0 53 61" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="20.8433" y="19.3018" width="10.1675" height="12.201" fill="#ABA8F7"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M42.1119 5.91343C40.9499 4.62242 39.4875 3.95192 38.2383 4.04801C36.1465 4.20891 33.9414 5.92602 31.8695 8.63549C30.0459 11.0202 28.5417 13.8917 27.5307 16.2458C33.6951 16.5488 37.7115 15.7786 40.1926 14.5916C42.7088 13.3878 43.5948 11.7969 43.7449 10.3715C43.9049 8.85254 43.2637 7.19309 42.1119 5.91343ZM8.75274 16.6855C6.24093 15.1295 4.93328 12.9984 4.69026 10.691C4.42078 8.13252 5.49249 5.64717 7.08955 3.87282C8.6764 2.10982 10.9989 0.817106 13.4643 1.00675C16.9349 1.27372 19.8489 3.94064 22.0221 6.78264C23.4868 8.69803 24.7428 10.8606 25.7343 12.8643C26.7259 10.8606 27.9818 8.69803 29.4465 6.78264C31.6197 3.94064 34.5337 1.27372 38.0043 1.00675C40.4697 0.817106 42.7922 2.10982 44.3791 3.87282C45.9761 5.64717 47.0478 8.13252 46.7784 10.691C46.5353 12.9984 45.2277 15.1295 42.7159 16.6855H49.8822C51.286 16.6855 52.4241 17.8236 52.4241 19.2274V31.1348C52.4241 32.5386 51.286 33.6766 49.8822 33.6766H49.3122V58.6608C49.3122 59.9464 48.1845 60.9886 46.7933 60.9886H31.5363L31.5191 60.9887L31.502 60.9886H20.3521L20.3349 60.9887L20.3178 60.9886H5.0608C3.66963 60.9886 2.54187 59.9464 2.54187 58.6608L2.54187 33.6766C1.13804 33.6766 0 32.5386 0 31.1348V19.2274C0 17.8236 1.13803 16.6855 2.54187 16.6855H8.75274ZM33.0443 58.1952H46.2895V33.6766H33.0443V58.1952ZM33.0443 30.6264H49.3738V19.7358H33.0443V30.6264ZM29.994 19.7358V30.6264H21.8601V19.7358H29.994ZM29.994 33.6766V58.1952H21.8601V33.6766H29.994ZM18.8098 58.1952V33.6766H5.56459V58.1952H18.8098ZM18.8098 30.6264V19.7358H3.05024V30.6264H18.8098ZM13.2303 4.04801C11.9811 3.95192 10.5187 4.62242 9.35668 5.91343C8.20488 7.19309 7.56373 8.85254 7.72372 10.3715C7.87385 11.7969 8.7598 13.3878 11.276 14.5916C13.7571 15.7786 17.7735 16.5488 23.9379 16.2458C22.9269 13.8917 21.4227 11.0202 19.5991 8.63549C17.5272 5.92602 15.3221 4.20891 13.2303 4.04801Z"
                        fill="#6A64F1"></path>
                </svg></div>
            <div>
                <h3 class="mb-4 text-xl font-bold text-black dark:text-white/90 sm:text-2xl lg:text-xl xl:text-2xl">
                {t('mission')}
                </h3>
                <p class="text-base font-medium text-body-color">
                    {t('missionDetail')}
                </p>
            </div>
        </div>
    </div>



    <div class="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <div class="mb-9 rounded-xl py-8 px-7 min-h-[400px] shadow-md transition-all dark:bg-gray-700  hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div class="mx-auto mb-7 inline-block"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.4049 2.9752H37.19C38.0116 2.9752 38.6776 2.30918 38.6776 1.4876C38.6776 0.666021 38.0116 0 37.19 0H10.9091C9.53977 0 8.42974 1.11003 8.42974 2.47933V17.5764L1.04954 22.7859C0.391399 23.2505 0 24.0059 0 24.8115V57.5207C0 58.89 1.11004 60 2.47933 60H57.5205C58.8898 60 59.9999 58.89 59.9999 57.5207V26.4868C59.9999 24.3552 57.488 23.2172 55.8856 24.6229L52.066 27.8242V22.8021C52.066 21.9805 51.4 21.3145 50.5784 21.3145C49.7568 21.3145 49.0908 21.9805 49.0908 22.8021V30.2401C49.0908 30.2656 49.0915 30.291 49.0927 30.3162L30.2843 46.0802L11.4049 29.0236V18.365C11.4051 18.3523 11.4051 18.3396 11.4049 18.3269V2.9752ZM8.42974 21.2181L5.24984 23.4628L8.42974 26.3357V21.2181ZM23.284 43.7729C23.2591 43.7943 23.2333 43.815 23.2066 43.835L5.62021 57.0248H54.8755L37.4608 43.9637L31.9071 48.6143C30.9458 49.4575 29.5009 49.4314 28.5708 48.5539L23.284 43.7729ZM39.8036 42.0019L57.0247 54.9177V27.5813L39.8036 42.0019ZM2.9752 55.2896L21.0384 41.7422L2.9752 25.4071V55.2896Z"
                        fill="#6A64F1"></path>
                    <circle cx="46.6115" cy="11.4049" r="9.42147" fill="#6A64F1"></circle>
                    <path
                        d="M46.7807 15.868C47.6859 15.868 48.6475 15.6441 49.0878 15.4202L48.7884 14.5452C48.4538 14.6692 47.6436 14.8965 46.8405 14.8965C44.5088 14.8965 43.2478 13.6633 43.2478 11.431C43.2478 9.35033 44.4524 7.90005 46.7525 7.90005C48.6299 7.90005 50.0283 8.9404 50.0247 10.8971C50.0283 12.3198 49.8028 12.9605 49.2393 12.9605C48.9399 12.9605 48.7637 12.7263 48.7602 12.3852V9.10575H47.7775V9.49157H47.7282C47.6155 9.18842 46.9392 8.90939 46.1748 9.01274C45.1921 9.1402 44.2481 9.92907 44.2481 11.4035C44.2481 12.9226 45.0935 13.8149 46.2417 13.8665C47.0413 13.9044 47.6612 13.5565 47.8268 13.1466H47.8691C47.9536 13.6633 48.4185 13.9458 49.1301 13.9079C50.6447 13.8527 51.0779 12.5299 51.0744 10.9556C51.0779 8.69237 49.521 6.94238 46.7771 6.94238C43.8536 6.94238 42.1523 8.7027 42.1488 11.4448C42.1523 14.2524 43.8254 15.868 46.7807 15.868ZM46.5341 12.8779C45.6148 12.8779 45.3048 12.1475 45.3013 11.3621C45.3048 10.5767 45.7521 10.0014 46.5411 10.0014C47.4182 10.0014 47.7423 10.4217 47.7458 11.3587C47.7564 12.3646 47.4253 12.8779 46.5341 12.8779Z"
                        fill="white"></path>
                </svg></div>
            <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl dark:text-white/90 xl:text-2xl">
               {t('vision')}
                </h3>
                <p class="text-base font-medium text-body-color">{t('visionDetail')}</p>
            </div>
        </div>
    </div>



    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mb-9  min-h-[400px] dark:bg-gray-700 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div class="mx-auto mb-7 inline-block"><svg width="67" height="60" viewBox="0 0 67 60"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M17.892 6.67578C17.892 6.1235 18.3397 5.67578 18.892 5.67578H24.226C26.4351 5.67578 28.226 7.46664 28.226 9.67578V32.789C28.226 33.3413 27.7783 33.789 27.226 33.789C26.6737 33.789 26.226 33.3413 26.226 32.789V9.67578C26.226 8.57121 25.3305 7.67578 24.226 7.67578H18.892C18.3397 7.67578 17.892 7.22807 17.892 6.67578Z"
                        fill="#6A64F1"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M37.8959 38.7891C37.8959 38.2368 38.3436 37.7891 38.8959 37.7891H49.7859C51.995 37.7891 53.7859 39.5799 53.7859 41.7891V50.5679C53.7859 51.1202 53.3382 51.5679 52.7859 51.5679C52.2336 51.5679 51.7859 51.1202 51.7859 50.5679V41.7891C51.7859 40.6845 50.8905 39.7891 49.7859 39.7891H38.8959C38.3436 39.7891 37.8959 39.3413 37.8959 38.7891Z"
                        fill="#ABA8F7"></path>
                    <rect width="20.0016" height="13.3344" rx="2" fill="#6A64F1"></rect>
                    <rect x="19" y="33" width="21" height="11" rx="2"
                        fill="#ABA8F7"></rect>
                    <rect x="39.8958" y="47.666" width="24.6688" height="11.3344" rx="2"
                        fill="white" stroke="#6A64F1" stroke-width="2"></rect>
                    <rect x="21" y="18" width="45" height="10" rx="2"
                        fill="white" stroke="#6A64F1" stroke-width="2">
                    </rect>
                </svg></div>
            <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl dark:text-white/90 lg:text-xl xl:text-2xl">{t('coreValue')}
                </h3>
                <p class="text-base font-medium text-body-color">{t('coreValueDetail')}</p>
            </div>
        </div>
    </div>


    
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all dark:bg-gray-700 min-h-[400px] hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div class="mx-auto mb-7 inline-block"><svg width="58" height="60" viewBox="0 0 58 60"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="24" height="26" rx="2"
                        stroke="#6A64F1" stroke-width="2"></rect>
                    <path
                        d="M14.6146 17.1967C14.8371 17.4191 14.8392 17.7843 14.5838 17.9678C13.9915 18.3933 13.2769 18.6264 12.5382 18.6264C11.6083 18.6264 10.7165 18.257 10.059 17.5994C9.40148 16.9419 9.03209 16.0501 9.03209 15.1203C9.03209 14.3816 9.26519 13.667 9.69065 13.0747C9.87417 12.8192 10.2393 12.8214 10.4617 13.0438L14.6146 17.1967Z"
                        fill="#6A64F1"></path>
                    <path
                        d="M9.94096 17.0091L10.6493 17.7175L9.11456 19.2522C8.91896 19.4478 8.60183 19.4478 8.40622 19.2522C8.21062 19.0566 8.21062 18.7395 8.40622 18.5439L9.94096 17.0091Z"
                        fill="#6A64F1"></path>
                    <path
                        d="M12.4851 11.0203C12.2627 10.7978 12.2605 10.4327 12.516 10.2492C13.1082 9.82372 13.8229 9.59062 14.5615 9.59062C15.4914 9.59062 16.3832 9.96001 17.0407 10.6175C17.6983 11.275 18.0676 12.1668 18.0676 13.0967C18.0676 13.8354 17.8345 14.55 17.4091 15.1423C17.2256 15.3977 16.8604 15.3956 16.638 15.1732L12.4851 11.0203Z"
                        fill="#ABA8F7"></path>
                    <path
                        d="M17.1588 11.2077L16.4504 10.4994L17.6015 9.34833C17.7482 9.20163 18.0257 9.24127 18.2213 9.43688C18.4169 9.63248 18.4565 9.90997 18.3098 10.0567L17.1588 11.2077Z"
                        fill="#ABA8F7"></path>
                    <path
                        d="M12.5383 12.7575C12.7339 12.5619 13.051 12.5619 13.2466 12.7575C13.4422 12.9531 13.4422 13.2702 13.2466 13.4658L12.0661 14.6464L11.3577 13.9381L12.5383 12.7575Z"
                        fill="#ADAAFF"></path>
                    <path
                        d="M12.5382 12.758C12.7338 12.5624 13.051 12.5624 13.2466 12.758C13.4422 12.9536 13.4422 13.2708 13.2466 13.4664L12.066 14.6469L11.3577 13.9386L12.5382 12.758Z"
                        fill="#6A64F1"></path>
                    <path
                        d="M14.309 14.5276C14.5046 14.332 14.8217 14.332 15.0173 14.5276C15.2129 14.7232 15.2129 15.0403 15.0173 15.2359L13.8368 16.4165L13.1284 15.7081L14.309 14.5276Z"
                        fill="#6A64F1"></path>
                    <rect x="31" y="23" width="27" height="37" rx="3"
                        fill="#6A64F1"></rect>
                    <path
                        d="M44.7681 36C43.323 36 42.1462 37.1768 42.1462 38.6219C42.1462 39.4842 42.5743 40.2411 43.2196 40.7194L41.925 42.8578C41.9148 42.8548 41.9035 42.8527 41.8923 42.8496C41.6219 42.7769 41.3402 42.8169 41.0975 42.9561C40.5967 43.246 40.4236 43.8892 40.7124 44.39C40.906 44.7259 41.2593 44.9144 41.6219 44.9144C41.8001 44.9144 41.9814 44.8703 42.1462 44.7751C42.389 44.6348 42.5651 44.4064 42.6378 44.136C42.7106 43.8656 42.6716 43.584 42.5313 43.3412C42.4873 43.2654 42.4269 43.1979 42.3675 43.1364L43.7931 40.7931L43.9324 40.5637L43.703 40.4326C43.0854 40.068 42.6706 39.3931 42.6706 38.6219C42.6706 37.4605 43.6067 36.5244 44.7681 36.5244C45.9295 36.5244 46.8656 37.4605 46.8656 38.6219C46.8656 38.838 46.8359 39.0408 46.7755 39.2364L47.2753 39.392C47.3511 39.1473 47.39 38.8902 47.39 38.6219C47.39 37.1768 46.2132 36 44.7681 36ZM44.7681 37.5731C44.1895 37.5731 43.7194 38.0432 43.7194 38.6219C43.7194 39.2005 44.1895 39.6706 44.7681 39.6706C44.8552 39.6706 44.9412 39.6583 45.0221 39.6378L46.2839 41.9238L46.4068 42.1532L46.6444 42.0303C46.9445 41.8644 47.2845 41.7681 47.6522 41.7681C48.8136 41.7681 49.7497 42.7042 49.7497 43.8656C49.7497 45.027 48.8136 45.9631 47.6522 45.9631C47.0858 45.9631 46.5717 45.7368 46.1938 45.3732L45.8333 45.7501C46.3044 46.2038 46.9475 46.4875 47.6522 46.4875C49.0973 46.4875 50.274 45.3107 50.274 43.8656C50.274 42.4205 49.0973 41.2437 47.6522 41.2437C47.2886 41.2437 46.9516 41.339 46.6362 41.4732L45.4809 39.3839C45.6858 39.1923 45.8169 38.924 45.8169 38.6219C45.8169 38.0432 45.3468 37.5731 44.7681 37.5731ZM40.9828 41.3175C39.8408 41.6022 39 42.6397 39 43.8656C39 45.3107 40.1768 46.4875 41.6219 46.4875C42.9738 46.4875 44.0563 45.4439 44.1946 44.1278H46.6444C46.7611 44.5795 47.1647 44.9144 47.6522 44.9144C48.2308 44.9144 48.7009 44.4443 48.7009 43.8656C48.7009 43.287 48.2308 42.8169 47.6522 42.8169C47.1647 42.8169 46.7611 43.1518 46.6444 43.6034H43.7194V43.8656C43.7194 45.027 42.7833 45.9631 41.6219 45.9631C40.4605 45.9631 39.5244 45.027 39.5244 43.8656C39.5244 42.8804 40.2024 42.061 41.1139 41.8337L40.9828 41.3175Z"
                        fill="white"></path>
                    <rect x="32" y="1" width="25" height="16" rx="2"
                        stroke="#6A64F1" stroke-width="2"></rect>
                    <g clip-path="url(#clip0_971_7928)">
                        <path
                            d="M42.9 9.52246C42.3264 9.52246 41.8348 10.0141 41.8348 10.5876V13.2422C41.8348 13.8158 42.3264 14.3074 42.9 14.3074C43.4735 14.3074 43.9651 13.8158 43.9651 13.2422V10.5876C43.9651 9.98129 43.5063 9.52246 42.9 9.52246Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M39.1638 10.5876C39.1638 11.1611 39.6554 11.6527 40.229 11.6527C40.8025 11.6527 41.2941 11.1611 41.2941 10.5876V9.52246H40.2453C39.6554 9.52246 39.1638 9.98129 39.1638 10.5876Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M42.9 4.16406C42.3264 4.16406 41.8348 4.65566 41.8348 5.2292C41.8348 5.80273 42.3264 6.29433 42.9 6.29433H43.9651C43.9651 5.68802 43.9651 5.83551 43.9651 5.2292C43.9651 4.65566 43.5063 4.16406 42.9 4.16406Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M40.229 8.96523H42.9C43.4735 8.96523 43.9651 8.47363 43.9651 7.9001C43.9651 7.32656 43.4735 6.83496 42.9 6.83496H40.229C39.6554 6.83496 39.1638 7.32656 39.1638 7.9001C39.1638 8.47363 39.6226 8.96523 40.229 8.96523Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M48.242 6.83496C47.6685 6.83496 47.1769 7.32656 47.1769 7.9001V8.96523H48.242C48.8156 8.96523 49.3072 8.47363 49.3072 7.9001C49.3072 7.32656 48.8319 6.83496 48.242 6.83496Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M44.5222 5.2292V7.90023C44.5222 8.47376 45.0138 8.96536 45.5874 8.96536C46.1609 8.96536 46.6525 8.47376 46.6525 7.90023V5.2292C46.6525 4.65566 46.1609 4.16406 45.5874 4.16406C44.981 4.16406 44.5222 4.65566 44.5222 5.2292Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M46.6525 13.2585C46.6525 12.685 46.1609 12.1934 45.5874 12.1934H44.5222V13.2585C44.5222 13.832 45.0138 14.3236 45.5874 14.3236C46.1609 14.3236 46.6525 13.832 46.6525 13.2585Z"
                            fill="#6A64F1"></path>
                        <path
                            d="M48.2584 9.52246H45.5874C45.0138 9.52246 44.5222 10.0141 44.5222 10.5876C44.5222 11.1611 45.0138 11.6527 45.5874 11.6527H48.2584C48.8319 11.6527 49.3235 11.1611 49.3235 10.5876C49.3235 9.98129 48.8319 9.52246 48.2584 9.52246Z"
                            fill="#6A64F1"></path>
                    </g>
                    <rect x="1" y="34" width="24" height="25" rx="2"
                        stroke="#6A64F1" stroke-width="2"></rect>
                    <g clip-path="url(#clip1_971_7928)">
                        <path
                            d="M17.6477 43.6591L16.2036 50.4186C16.0961 50.8949 15.8195 51.0024 15.4201 50.7873L13.254 49.1896L12.194 50.2036C12.0864 50.3111 11.9789 50.4186 11.7331 50.4186L11.9021 48.1911L15.9424 44.5194C16.1114 44.3504 15.8963 44.289 15.6813 44.4273L10.6577 47.5919L8.49161 46.9313C8.01537 46.7777 8.01537 46.4551 8.59915 46.24L17.0178 42.9678C17.4326 42.8449 17.7859 43.06 17.6477 43.6591Z"
                            fill="#6A64F1"></path>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31 10.5H26V8.5H31V10.5Z" fill="#6A64F1">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31 47H26V45H31V47Z" fill="#ABA8F7"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 28L14 33L12 33L12 28L14 28Z"
                        fill="#6A64F1">
                    </path>
                    <defs>
                        <clipPath id="clip0_971_7928">
                            <rect width="10.4875" height="10.4875" fill="white" transform="translate(39 4)">
                            </rect>
                        </clipPath>
                        <clipPath id="clip1_971_7928">
                            <rect width="9.83201" height="9.83201" fill="white" transform="translate(8 42)">
                            </rect>
                        </clipPath>
                    </defs>
                </svg></div>
            <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl dark:text-white/90 xl:text-2xl">{t('goal')}</h3>
                <p class="text-base font-medium text-body-color">{t('goalDetail')}</p>
            </div>
        </div>
    </div>


    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mb-9 rounded-xl py-8 px-7 min-h-[400px]  dark:bg-gray-700 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div class="mx-auto mb-7 inline-block"><svg width="51" height="60" viewBox="0 0 51 60"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M33.1015 4.53152C28.1688 2.60657 22.6927 2.60657 17.76 4.53152L3.08781 10.2572V31.4086C3.08781 36.1366 5.05872 40.6505 8.52635 43.8644L24.3812 56.5006C24.9733 57.0494 25.8882 57.0494 26.4802 56.5006L42.3351 43.8644C45.8027 40.6505 47.7736 36.1366 47.7736 31.4086V10.2572L33.1015 4.53152ZM16.6374 1.65499C22.292 -0.551664 28.5695 -0.551662 34.224 1.65499L49.2237 7.50853C50.2113 7.89393 50.8615 8.84554 50.8615 9.90564V31.4086C50.8615 36.9962 48.5322 42.3309 44.4341 46.1291L28.5792 58.7653C26.803 60.4116 24.0585 60.4116 22.2823 58.7653L6.42737 46.1291C2.32926 42.3309 0 36.9962 0 31.4086V9.90564C0 8.84554 0.650144 7.89393 1.63772 7.50853L16.6374 1.65499Z"
                        fill="#ABA8F7"></path>
                    <path
                        d="M25.217 50.5233V8.42143C25.217 7.75383 24.5754 7.27369 23.9349 7.46207L9.15513 11.8091C8.30396 12.0594 7.71946 12.8406 7.71946 13.7278V32.0977C7.71946 34.5312 8.70493 36.861 10.4512 38.5559L23.5206 51.2409C24.1547 51.8564 25.217 51.407 25.217 50.5233Z"
                        fill="#6A64F1"></path>
                </svg></div>
            <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl dark:text-white/90 xl:text-2xl">{t('destination')}</h3>
                <p class="text-base font-medium text-body-color">{t('destinationDetail')}</p>
            </div>
        </div>
    </div>


</div>
  )
}

export default Vission