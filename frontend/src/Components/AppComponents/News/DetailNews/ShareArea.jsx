import React, { useState } from 'react';
import { MdShare } from "react-icons/md";
import { serverLink } from '../../../../Controller/CommonLinks/ServerLink';

function ShareArea({data}) {
  const [showOptions, setShowOptions] = useState(false);
  const [open,setOPen] = useState(false)

  const handleShare = (platform) => {
    const shareURL = `${serverLink}/news/${data._id}/share`;
    console.log({shareURL})

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`, "_blank");
        break;
        case "telegram":
            window.open(`https://t.me/share/url?url=${encodeURIComponent(shareURL)}`, "_blank");
            break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${shareURL}`, "_blank");
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(shareURL)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/shareArticle?url=${shareURL}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(shareURL);
        //alert("Link copied to clipboard!");
        setOPen(true)
        setTimeout(() => {
          setOPen(false)
        }, 1000);
        break;
      default:
        break;
    }
    setShowOptions(false); // Hide options after sharing
  };

  return (
    <div className="">
      {/* Share Button */}
      <button
        className="dark:bg-gray-500 bg-slate-200 dark:hover:bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        onClick={() => setShowOptions(!showOptions)}
      >
         <div className="flex gap-2 items-center content-center ">
            <span className='text-gray-500 dark:text-white/50'><MdShare/></span>
            <p className=' text-gray-500 hidden md:block items-center self-center text-sm dark:text-white/50'>Share</p>
        </div>
      </button>

      {/* Sharing Options */}
      {showOptions && (
        <div className="fixed top-[30%] left-[30%] bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mt-2 space-y-2">
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => handleShare("facebook")}
          >
            Share on Facebook
          </button>
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => handleShare("telegram")}
          >
            Share on Telegram
          </button>
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => handleShare("twitter")}
          >
            Share on Twitter
          </button>
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => handleShare("whatsapp")}
          >
            Share on WhatsApp
          </button>
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => handleShare("linkedin")}
          >
            Share on LinkedIn
          </button>
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => handleShare("copy")}
          >
            Copy Link
          </button>
        </div>
      )}
      <dialog open={open} className='fixed top-[30%] left-[30%]'>
      <div class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
            <p class="font-bold">
                Copied
            </p>
            <p>
              The link of content has been copied successfully.
            </p>
        </div>
      </dialog>
    </div>
  );
}

export default ShareArea;
