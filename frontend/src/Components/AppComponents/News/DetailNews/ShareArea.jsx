import React, { useState } from 'react';

function ShareArea() {
  const [showOptions, setShowOptions] = useState(false);

  const handleShare = (platform) => {
    const shareURL = window.location.href; // Dynamically fetch the current URL
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
        alert("Link copied to clipboard!");
        break;
      default:
        break;
    }
    setShowOptions(false); // Hide options after sharing
  };

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        onClick={() => setShowOptions(!showOptions)}
      >
        Share
      </button>

      {/* Sharing Options */}
      {showOptions && (
        <div className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mt-2 space-y-2">
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
    </div>
  );
}

export default ShareArea;
