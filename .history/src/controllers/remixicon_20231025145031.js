module.exports.get_list = async (req, res, next) => {
    const { remixicon, Op } = require('../models/remixicon');
    try {

        remixicon.bulkCreate([
            { name: 'logout-circle-r-fill'},{ name: 'logout-circle-r-line'},{ name: 'luggage-cart-fill'},{ name: 'luggage-cart-line'},{ name: 'luggage-deposit-fill'},{ name: 'luggage-deposit-line'},{ name: 'lungs-fill'},{ name: 'lungs-line'},{ name: 'mac-fill'},{ name: 'mac-line'},{ name: 'macbook-fill'},{ name: 'macbook-line'},{ name: 'magic-fill'},{ name: 'magic-line'},{ name: 'mail-add-fill'},{ name: 'mail-add-line'},{ name: 'mail-check-fill'},{ name: 'mail-check-line'},{ name: 'mail-close-fill'},{ name: 'mail-close-line'},{ name: 'mail-download-fill'},{ name: 'mail-download-line'},{ name: 'mail-fill'},{ name: 'mail-forbid-fill'},{ name: 'mail-forbid-line'},{ name: 'mail-line'},{ name: 'mail-lock-fill'},{ name: 'mail-lock-line'},{ name: 'mail-open-fill'},{ name: 'mail-open-line'},{ name: 'mail-send-fill'},{ name: 'mail-send-line'},{ name: 'mail-settings-fill'},{ name: 'mail-settings-line'},{ name: 'mail-star-fill'},{ name: 'mail-star-line'},{ name: 'mail-unread-fill'},{ name: 'mail-unread-line'},{ name: 'mail-volume-fill'},{ name: 'mail-volume-line'},{ name: 'map-2-fill'},{ name: 'map-2-line'},{ name: 'map-fill'},{ name: 'map-line'},{ name: 'map-pin-2-fill'},{ name: 'map-pin-2-line'},{ name: 'map-pin-3-fill'},{ name: 'map-pin-3-line'},{ name: 'map-pin-4-fill'},{ name: 'map-pin-4-line'},{ name: 'map-pin-5-fill'},{ name: 'map-pin-5-line'},{ name: 'map-pin-add-fill'},{ name: 'map-pin-add-line'},{ name: 'map-pin-fill'},{ name: 'map-pin-line'},{ name: 'map-pin-range-fill'},{ name: 'map-pin-range-line'},{ name: 'map-pin-time-fill'},{ name: 'map-pin-time-line'},{ name: 'map-pin-user-fill'},{ name: 'map-pin-user-line'},{ name: 'mark-pen-fill'},{ name: 'mark-pen-line'},{ name: 'markdown-fill'},{ name: 'markdown-line'},{ name: 'markup-fill'},{ name: 'markup-line'},{ name: 'mastercard-fill'},{ name: 'mastercard-line'},{ name: 'mastodon-fill'},{ name: 'mastodon-line'},{ name: 'medal-2-fill'},{ name: 'medal-2-line'},{ name: 'medal-fill'},{ name: 'medal-line'},{ name: 'medicine-bottle-fill'},{ name: 'medicine-bottle-line'},{ name: 'medium-fill'},{ name: 'medium-line'},{ name: 'men-fill'},{ name: 'men-line'},{ name: 'mental-health-fill'},{ name: 'mental-health-line'},{ name: 'menu-2-fill'},{ name: 'menu-2-line'},{ name: 'menu-3-fill'},{ name: 'menu-3-line'},{ name: 'menu-4-fill'},{ name: 'menu-4-line'},{ name: 'menu-5-fill'},{ name: 'menu-5-line'},{ name: 'menu-add-fill'},{ name: 'menu-add-line'},{ name: 'menu-fill'},{ name: 'menu-fold-fill'},{ name: 'menu-fold-line'},{ name: 'menu-line'},{ name: 'menu-unfold-fill'},{ name: 'menu-unfold-line'},{ name: 'merge-cells-horizontal'},{ name: 'merge-cells-vertical'},{ name: 'message-2-fill'},{ name: 'message-2-line'},{ name: 'message-3-fill'},{ name: 'message-3-line'},{ name: 'message-fill'},{ name: 'message-line'},{ name: 'messenger-fill'},{ name: 'messenger-line'},{ name: 'meteor-fill'},{ name: 'meteor-line'},{ name: 'mic-2-fill'},{ name: 'mic-2-line'},{ name: 'mic-fill'},{ name: 'mic-line'},{ name: 'mic-off-fill'},{ name: 'mic-off-line'},{ name: 'mickey-fill'},{ name: 'mickey-line'},{ name: 'microscope-fill'},{ name: 'microscope-line'},{ name: 'microsoft-fill'},{ name: 'microsoft-line'},{ name: 'mind-map'},{ name: 'mini-program-fill'},{ name: 'mini-program-line'},{ name: 'mist-fill'},{ name: 'mist-line'},{ name: 'money-cny-box-fill'},{ name: 'money-cny-box-line'},{ name: 'money-cny-circle-fill'},{ name: 'money-cny-circle-line'},{ name: 'money-dollar-box-fill'},{ name: 'money-dollar-box-line'},{ name: 'money-dollar-circle-fill'},{ name: 'money-dollar-circle-line'},{ name: 'money-euro-box-fill'},{ name: 'money-euro-box-line'},{ name: 'money-euro-circle-fill'},{ name: 'money-euro-circle-line'},{ name: 'money-pound-box-fill'},{ name: 'money-pound-box-line'},{ name: 'money-pound-circle-fill'},{ name: 'money-pound-circle-line'},{ name: 'moon-clear-fill'},{ name: 'moon-clear-line'},{ name: 'moon-cloudy-fill'},{ name: 'moon-cloudy-line'},{ name: 'moon-fill'},{ name: 'moon-foggy-fill'},{ name: 'moon-foggy-line'},{ name: 'moon-line'},{ name: 'more-2-fill'},{ name: 'more-2-line'},{ name: 'more-fill'},{ name: 'more-line'},{ name: 'motorbike-fill'},{ name: 'motorbike-line'},{ name: 'mouse-fill'},{ name: 'mouse-line'},{ name: 'movie-2-fill'},{ name: 'movie-2-line'},{ name: 'movie-fill'},{ name: 'movie-line'},{ name: 'music-2-fill'},{ name: 'music-2-line'},{ name: 'music-fill'},{ name: 'music-line'},{ name: 'mv-fill'},{ name: 'mv-line'},{ name: 'navigation-fill'},{ name: 'navigation-line'},{ name: 'netease-cloud-music-fill'},{ name: 'netease-cloud-music-line'},{ name: 'netflix-fill'},{ name: 'netflix-line'},{ name: 'newspaper-fill'},{ name: 'newspaper-line'},{ name: 'node-tree'},{ name: 'notification-2-fill'},{ name: 'notification-2-line'},{ name: 'notification-3-fill'},{ name: 'notification-3-line'},{ name: 'notification-4-fill'},{ name: 'notification-4-line'},{ name: 'notification-badge-fill'},{ name: 'notification-badge-line'},{ name: 'notification-fill'},{ name: 'notification-line'},{ name: 'notification-off-fill'},{ name: 'notification-off-line'},{ name: 'npmjs-fill'},{ name: 'npmjs-line'},{ name: 'number-0'},{ name: 'number-1'},{ name: 'number-2'},{ name: 'number-3'},{ name: 'number-4'},{ name: 'number-5'},{ name: 'number-6'},{ name: 'number-7'},{ name: 'number-8'},{ name: 'number-9'},{ name: 'numbers-fill'},{ name: 'numbers-line'},{ name: 'nurse-fill'},{ name: 'nurse-line'},{ name: 'oil-fill'},{ name: 'oil-line'},{ name: 'omega'},{ name: 'open-arm-fill'},{ name: 'open-arm-line'},{ name: 'open-source-fill'},{ name: 'open-source-line'},{ name: 'opera-fill'},{ name: 'opera-line'},{ name: 'order-play-fill'},{ name: 'order-play-line'},{ name: 'organization-chart'},{ name: 'outlet-2-fill'},{ name: 'outlet-2-line'},{ name: 'outlet-fill'},{ name: 'outlet-line'},{ name: 'page-separator'},{ name: 'pages-fill'},{ name: 'pages-line'},{ name: 'paint-brush-fill'},{ name: 'paint-brush-line'},{ name: 'paint-fill'},{ name: 'paint-line'},{ name: 'palette-fill'},{ name: 'palette-line'},{ name: 'pantone-fill'},{ name: 'pantone-line'},{ name: 'paragraph'},{ name: 'parent-fill'},{ name: 'parent-line'},{ name: 'parentheses-fill'},{ name: 'parentheses-line'},{ name: 'parking-box-fill'},{ name: 'parking-box-line'},{ name: 'parking-fill'},{ name: 'parking-line'},{ name: 'passport-fill'},{ name: 'passport-line'},{ name: 'patreon-fill'},{ name: 'patreon-line'},{ name: 'pause-circle-fill'},{ name: 'pause-circle-line'},{ name: 'pause-fill'},{ name: 'pause-line'},{ name: 'pause-mini-fill'},{ name: 'pause-mini-line'},{ name: 'paypal-fill'},{ name: 'paypal-line'},{ name: 'pen-nib-fill'},{ name: 'pen-nib-line'},{ name: 'pencil-fill'},{ name: 'pencil-line'},{ name: 'pencil-ruler-2-fill'},{ name: 'pencil-ruler-2-line'},{ name: 'pencil-ruler-fill'},{ name: 'pencil-ruler-line'},{ name: 'percent-fill'},{ name: 'percent-line'},{ name: 'phone-camera-fill'},{ name: 'phone-camera-line'},{ name: 'phone-fill'},{ name: 'phone-find-fill'},{ name: 'phone-find-line'},{ name: 'phone-line'},{ name: 'phone-lock-fill'},{ name: 'phone-lock-line'},{ name: 'picture-in-picture-2-fill'},{ name: 'picture-in-picture-2-line'},{ name: 'picture-in-picture-exit-fill'},{ name: 'picture-in-picture-exit-line'},{ name: 'picture-in-picture-fill'},{ name: 'picture-in-picture-line'},{ name: 'pie-chart-2-fill'},{ name: 'pie-chart-2-line'},{ name: 'pie-chart-box-fill'},{ name: 'pie-chart-box-line'},{ name: 'pie-chart-fill'},{ name: 'pie-chart-line'},{ name: 'pin-distance-fill'},{ name: 'pin-distance-line'},{ name: 'ping-pong-fill'},{ name: 'ping-pong-line'},{ name: 'pinterest-fill'},{ name: 'pinterest-line'},{ name: 'pinyin-input'},{ name: 'pixelfed-fill'},{ name: 'pixelfed-line'},{ name: 'plane-fill'},{ name: 'plane-line'},{ name: 'plant-fill'},{ name: 'plant-line'},{ name: 'play-circle-fill'},{ name: 'play-circle-line'},{ name: 'play-fill'},{ name: 'play-line'},{ name: 'play-list-2-fill'},{ name: 'play-list-2-line'},{ name: 'play-list-add-fill'},{ name: 'play-list-add-line'},{ name: 'play-list-fill'},{ name: 'play-list-line'},{ name: 'play-mini-fill'},{ name: 'play-mini-line'},{ name: 'playstation-fill'},{ name: 'playstation-line'},{ name: 'plug-2-fill'},{ name: 'plug-2-line'},{ name: 'plug-fill'},{ name: 'plug-line'},{ name: 'polaroid-2-fill'},{ name: 'polaroid-2-line'},{ name: 'polaroid-fill'},{ name: 'polaroid-line'},{ name: 'police-car-fill'},{ name: 'police-car-line'},{ name: 'price-tag-2-fill'},{ name: 'price-tag-2-line'},{ name: 'price-tag-3-fill'},{ name: 'price-tag-3-line'},{ name: 'price-tag-fill'},{ name: 'price-tag-line'},{ name: 'printer-cloud-fill'},{ name: 'printer-cloud-line'},{ name: 'printer-fill'},{ name: 'printer-line'},{ name: 'product-hunt-fill'},{ name: 'product-hunt-line'},{ name: 'profile-fill'},{ name: 'profile-line'},{ name: 'projector-2-fill'},{ name: 'projector-2-line'},{ name: 'projector-fill'},{ name: 'projector-line'},{ name: 'psychotherapy-fill'},{ name: 'psychotherapy-line'},{ name: 'pulse-fill'},{ name: 'pulse-line'},{ name: 'pushpin-2-fill'},{ name: 'pushpin-2-line'},{ name: 'pushpin-fill'},{ name: 'pushpin-line'},{ name: 'qq-fill'},{ name: 'qq-line'},{ name: 'qr-code-fill'},{ name: 'qr-code-line'},{ name: 'qr-scan-2-fill'},{ name: 'qr-scan-2-line'},{ name: 'qr-scan-fill'},{ name: 'qr-scan-line'},{ name: 'question-answer-fill'},{ name: 'question-answer-line'},{ name: 'question-fill'},{ name: 'question-line'},{ name: 'question-mark'},{ name: 'questionnaire-fill'},{ name: 'questionnaire-line'},{ name: 'quill-pen-fill'},{ name: 'quill-pen-line'},{ name: 'radar-fill'},{ name: 'radar-line'},{ name: 'radio-2-fill'},{ name: 'radio-2-line'},{ name: 'radio-button-fill'},{ name: 'radio-button-line'},{ name: 'radio-fill'},{ name: 'radio-line'},{ name: 'rainbow-fill'},{ name: 'rainbow-line'},{ name: 'rainy-fill'},{ name: 'rainy-line'},{ name: 'reactjs-fill'},{ name: 'reactjs-line'},{ name: 'record-circle-fill'},{ name: 'record-circle-line'},{ name: 'record-mail-fill'},{ name: 'record-mail-line'},{ name: 'recycle-fill'},{ name: 'recycle-line'},{ name: 'red-packet-fill'},{ name: 'red-packet-line'},{ name: 'reddit-fill'},{ name: 'reddit-line'},{ name: 'refresh-fill'},{ name: 'refresh-line'},{ name: 'refund-2-fill'},{ name: 'refund-2-line'},{ name: 'refund-fill'},{ name: 'refund-line'},{ name: 'registered-fill'},{ name: 'registered-line'},{ name: 'remixicon-fill'},{ name: 'remixicon-line'},{ name: 'remote-control-2-fill'},{ name: 'remote-control-2-line'},{ name: 'remote-control-fill'},{ name: 'remote-control-line'},{ name: 'repeat-2-fill'},{ name: 'repeat-2-line'},{ name: 'repeat-fill'},{ name: 'repeat-line'},{ name: 'repeat-one-fill'},{ name: 'repeat-one-line'},{ name: 'reply-all-fill'},{ name: 'reply-all-line'},{ name: 'reply-fill'},{ name: 'reply-line'},{ name: 'reserved-fill'},{ name: 'reserved-line'},{ name: 'rest-time-fill'},{ name: 'rest-time-line'},{ name: 'restart-fill'},{ name: 'restart-line'},{ name: 'restaurant-2-fill'},{ name: 'restaurant-2-line'},{ name: 'restaurant-fill'},{ name: 'restaurant-line'},{ name: 'rewind-fill'},{ name: 'rewind-line'},{ name: 'rewind-mini-fill'},{ name: 'rewind-mini-line'},{ name: 'rhythm-fill'},{ name: 'rhythm-line'},{ name: 'riding-fill'},{ name: 'riding-line'},{ name: 'road-map-fill'},{ name: 'road-map-line'},{ name: 'roadster-fill'},{ name: 'roadster-line'},{ name: 'robot-fill'},{ name: 'robot-line'},{ name: 'rocket-2-fill'},{ name: 'rocket-2-line'},{ name: 'rocket-fill'},{ name: 'rocket-line'},{ name: 'rotate-lock-fill'},{ name: 'rotate-lock-line'},{ name: 'rounded-corner'},{ name: 'route-fill'},{ name: 'route-line'},{ name: 'router-fill'},{ name: 'router-line'},{ name: 'rss-fill'},{ name: 'rss-line'},{ name: 'ruler-2-fill'},{ name: 'ruler-2-line'},{ name: 'ruler-fill'},{ name: 'ruler-line'},{ name: 'run-fill'},{ name: 'run-line'},{ name: 'safari-fill'},{ name: 'safari-line'},{ name: 'safe-2-fill'},{ name: 'safe-2-line'},{ name: 'safe-fill'},{ name: 'safe-line'},{ name: 'sailboat-fill'},{ name: 'sailboat-line'},{ name: 'save-2-fill'},{ name: 'save-2-line'},{ name: 'save-3-fill'},{ name: 'save-3-line'},{ name: 'save-fill'},{ name: 'save-line'},{ name: 'scales-2-fill'},{ name: 'scales-2-line'},{ name: 'scales-3-fill'},{ name: 'scales-3-line'},{ name: 'scales-fill'},{ name: 'scales-line'},{ name: 'scan-2-fill'},{ name: 'scan-2-line'},{ name: 'scan-fill'},{ name: 'scan-line'},{ name: 'scissors-2-fill'},{ name: 'scissors-2-line'},{ name: 'scissors-cut-fill'},{ name: 'scissors-cut-line'},{ name: 'scissors-fill'},{ name: 'scissors-line'},{ name: 'screenshot-2-fill'},{ name: 'screenshot-2-line'},{ name: 'screenshot-fill'},{ name: 'screenshot-line'},{ name: 'sd-card-fill'},{ name: 'sd-card-line'},{ name: 'sd-card-mini-fill'},{ name: 'sd-card-mini-line'},{ name: 'search-2-fill'},{ name: 'search-2-line'},{ name: 'search-eye-fill'},{ name: 'search-eye-line'},{ name: 'search-fill'},{ name: 'search-line'},{ name: 'secure-payment-fill'},{ name: 'secure-payment-line'},{ name: 'seedling-fill'},{ name: 'seedling-line'},{ name: 'send-backward'},{ name: 'send-plane-2-fill'},{ name: 'send-plane-2-line'},{ name: 'send-plane-fill'},{ name: 'send-plane-line'},{ name: 'send-to-back'},{ name: 'sensor-fill'},{ name: 'sensor-line'},{ name: 'separator'},{ name: 'server-fill'},{ name: 'server-line'},{ name: 'service-fill'},{ name: 'service-line'},{ name: 'settings-2-fill'},{ name: 'settings-2-line'},{ name: 'settings-3-fill'},{ name: 'settings-3-line'},{ name: 'settings-4-fill'},{ name: 'settings-4-line'},{ name: 'settings-5-fill'},{ name: 'settings-5-line'},{ name: 'settings-6-fill'},{ name: 'settings-6-line'},{ name: 'settings-fill'},{ name: 'settings-line'},{ name: 'shape-2-fill'},{ name: 'shape-2-line'},{ name: 'shape-fill'},{ name: 'shape-line'},{ name: 'share-box-fill'},{ name: 'share-box-line'},{ name: 'share-circle-fill'},{ name: 'share-circle-line'},{ name: 'share-fill'},{ name: 'share-forward-2-fill'},{ name: 'share-forward-2-line'},{ name: 'share-forward-box-fill'},{ name: 'share-forward-box-line'},{ name: 'share-forward-fill'},{ name: 'share-forward-line'},{ name: 'share-line'},{ name: 'shield-check-fill'},{ name: 'shield-check-line'},{ name: 'shield-cross-fill'},{ name: 'shield-cross-line'},{ name: 'shield-fill'},{ name: 'shield-flash-fill'},{ name: 'shield-flash-line'},{ name: 'shield-keyhole-fill'},{ name: 'shield-keyhole-line'},{ name: 'shield-line'},{ name: 'shield-star-fill'},{ name: 'shield-star-line'},{ name: 'shield-user-fill'},{ name: 'shield-user-line'},{ name: 'ship-2-fill'},{ name: 'ship-2-line'},{ name: 'ship-fill'},{ name: 'ship-line'},{ name: 'shirt-fill'},{ name: 'shirt-line'},{ name: 'shopping-bag-2-fill'},{ name: 'shopping-bag-2-line'},{ name: 'shopping-bag-3-fill'},{ name: 'shopping-bag-3-line'},{ name: 'shopping-bag-fill'},{ name: 'shopping-bag-line'},{ name: 'shopping-basket-2-fill'},{ name: 'shopping-basket-2-line'},{ name: 'shopping-basket-fill'},{ name: 'shopping-basket-line'},{ name: 'shopping-cart-2-fill'},{ name: 'shopping-cart-2-line'},{ name: 'shopping-cart-fill'},{ name: 'shopping-cart-line'},{ name: 'showers-fill'},{ name: 'showers-line'},{ name: 'shuffle-fill'},{ name: 'shuffle-line'},{ name: 'shut-down-fill'},{ name: 'shut-down-line'},{ name: 'side-bar-fill'},{ name: 'side-bar-line'},{ name: 'signal-tower-fill'},{ name: 'signal-tower-line'},{ name: 'signal-wifi-1-fill'},{ name: 'signal-wifi-1-line'},{ name: 'signal-wifi-2-fill'},{ name: 'signal-wifi-2-line'},{ name: 'signal-wifi-3-fill'},{ name: 'signal-wifi-3-line'},{ name: 'signal-wifi-error-fill'},{ name: 'signal-wifi-error-line'},{ name: 'signal-wifi-fill'},{ name: 'signal-wifi-line'},{ name: 'signal-wifi-off-fill'},{ name: 'signal-wifi-off-line'},{ name: 'sim-card-2-fill'},{ name: 'sim-card-2-line'},{ name: 'sim-card-fill'},{ name: 'sim-card-line'},{ name: 'single-quotes-l'},{ name: 'single-quotes-r'},{ name: 'sip-fill'},{ name: 'sip-line'},{ name: 'skip-back-fill'},{ name: 'skip-back-line'},{ name: 'skip-back-mini-fill'},{ name: 'skip-back-mini-line'},{ name: 'skip-forward-fill'},{ name: 'skip-forward-line'},{ name: 'skip-forward-mini-fill'},{ name: 'skip-forward-mini-line'},{ name: 'skull-2-fill'},{ name: 'skull-2-line'},{ name: 'skull-fill'},{ name: 'skull-line'},{ name: 'skype-fill'},{ name: 'skype-line'},{ name: 'slack-fill'},{ name: 'slack-line'},{ name: 'slice-fill'},{ name: 'slice-line'},{ name: 'slideshow-2-fill'},{ name: 'slideshow-2-line'},{ name: 'slideshow-3-fill'},{ name: 'slideshow-3-line'},{ name: 'slideshow-4-fill'},{ name: 'slideshow-4-line'},{ name: 'slideshow-fill'},{ name: 'slideshow-line'},{ name: 'smartphone-fill'},{ name: 'smartphone-line'},{ name: 'snapchat-fill'},{ name: 'snapchat-line'},{ name: 'snowy-fill'},{ name: 'snowy-line'},{ name: 'sort-asc'},{ name: 'sort-desc'},{ name: 'sound-module-fill'},{ name: 'sound-module-line'},{ name: 'soundcloud-fill'},{ name: 'soundcloud-line'},{ name: 'space-ship-fill'},{ name: 'space-ship-line'},{ name: 'space'},{ name: 'spam-2-fill'},{ name: 'spam-2-line'},{ name: 'spam-3-fill'},{ name: 'spam-3-line'},{ name: 'spam-fill'},{ name: 'spam-line'},{ name: 'speaker-2-fill'},{ name: 'speaker-2-line'},{ name: 'speaker-3-fill'},{ name: 'speaker-3-line'},{ name: 'speaker-fill'},{ name: 'speaker-line'},{ name: 'spectrum-fill'},{ name: 'spectrum-line'},{ name: 'speed-fill'},{ name: 'speed-line'},{ name: 'speed-mini-fill'},{ name: 'speed-mini-line'},{ name: 'split-cells-horizontal'},{ name: 'split-cells-vertical'},{ name: 'spotify-fill'},{ name: 'spotify-line'},{ name: 'spy-fill'},{ name: 'spy-line'},{ name: 'stack-fill'},{ name: 'stack-line'},{ name: 'stack-overflow-fill'},{ name: 'stack-overflow-line'},{ name: 'stackshare-fill'},{ name: 'stackshare-line'},{ name: 'star-fill'},{ name: 'star-half-fill'},{ name: 'star-half-line'},{ name: 'star-half-s-fill'},{ name: 'star-half-s-line'},{ name: 'star-line'},{ name: 'star-s-fill'},{ name: 'star-s-line'},{ name: 'star-smile-fill'},{ name: 'star-smile-line'},{ name: 'steam-fill'},{ name: 'steam-line'},{ name: 'steering-2-fill'},{ name: 'steering-2-line'},{ name: 'steering-fill'},{ name: 'steering-line'},{ name: 'stethoscope-fill'},{ name: 'stethoscope-line'},{ name: 'sticky-note-2-fill'},{ name: 'sticky-note-2-line'},{ name: 'sticky-note-fill'},{ name: 'sticky-note-line'},{ name: 'stock-fill'},{ name: 'stock-line'},{ name: 'stop-circle-fill'},{ name: 'stop-circle-line'},{ name: 'stop-fill'},{ name: 'stop-line'},{ name: 'stop-mini-fill'},{ name: 'stop-mini-line'},{ name: 'store-2-fill'},{ name: 'store-2-line'},{ name: 'store-3-fill'},{ name: 'store-3-line'},{ name: 'store-fill'},{ name: 'store-line'},{ name: 'strikethrough-2'},{ name: 'strikethrough'},{ name: 'subscript-2'},{ name: 'subscript'},{ name: 'subtract-fill'},{ name: 'subtract-line'},{ name: 'subway-fill'},{ name: 'subway-line'},{ name: 'subway-wifi-fill'},{ name: 'subway-wifi-line'},{ name: 'suitcase-2-fill'},{ name: 'suitcase-2-line'},{ name: 'suitcase-3-fill'},{ name: 'suitcase-3-line'},{ name: 'suitcase-fill'},{ name: 'suitcase-line'},{ name: 'sun-cloudy-fill'},{ name: 'sun-cloudy-line'},{ name: 'sun-fill'},{ name: 'sun-foggy-fill'},{ name: 'sun-foggy-line'},{ name: 'sun-line'},{ name: 'superscript-2'},{ name: 'superscript'},{ name: 'surgical-mask-fill'},{ name: 'surgical-mask-line'},{ name: 'surround-sound-fill'},{ name: 'surround-sound-line'},{ name: 'survey-fill'},{ name: 'survey-line'},{ name: 'swap-box-fill'},{ name: 'swap-box-line'},{ name: 'swap-fill'},{ name: 'swap-line'},{ name: 'switch-fill'},{ name: 'switch-line'},{ name: 'sword-fill'},{ name: 'sword-line'},{ name: 'syringe-fill'},{ name: 'syringe-line'},{ name: 't-box-fill'},{ name: 't-box-line'},{ name: 't-shirt-2-fill'},{ name: 't-shirt-2-line'},{ name: 't-shirt-air-fill'},{ name: 't-shirt-air-line'},{ name: 't-shirt-fill'},{ name: 't-shirt-line'},{ name: 'table-2'},{ name: 'table-alt-fill'},{ name: 'table-alt-line'},{ name: 'table-fill'},{ name: 'table-line'},{ name: 'tablet-fill'},{ name: 'tablet-line'},{ name: 'takeaway-fill'},{ name: 'takeaway-line'},{ name: 'taobao-fill'},{ name: 'taobao-line'},{ name: 'tape-fill'},{ name: 'tape-line'},{ name: 'task-fill'},{ name: 'task-line'},{ name: 'taxi-fill'},{ name: 'taxi-line'},{ name: 'taxi-wifi-fill'},{ name: 'taxi-wifi-line'},{ name: 'team-fill'},{ name: 'team-line'},{ name: 'telegram-fill'},{ name: 'telegram-line'},{ name: 'temp-cold-fill'},{ name: 'temp-cold-line'},{ name: 'temp-hot-fill'},{ name: 'temp-hot-line'},{ name: 'terminal-box-fill'},{ name: 'terminal-box-line'},{ name: 'terminal-fill'},{ name: 'terminal-line'},{ name: 'terminal-window-fill'},{ name: 'terminal-window-line'},{ name: 'test-tube-fill'},{ name: 'test-tube-line'},{ name: 'text-direction-l'},{ name: 'text-direction-r'},{ name: 'text-spacing'},{ name: 'text-wrap'},{ name: 'text'},{ name: 'thermometer-fill'},{ name: 'thermometer-line'},{ name: 'thumb-down-fill'},{ name: 'thumb-down-line'},{ name: 'thumb-up-fill'},{ name: 'thumb-up-line'},{ name: 'thunderstorms-fill'},{ name: 'thunderstorms-line'},{ name: 'ticket-2-fill'},{ name: 'ticket-2-line'},{ name: 'ticket-fill'},{ name: 'ticket-line'},{ name: 'time-fill'},{ name: 'time-line'},{ name: 'timer-2-fill'},{ name: 'timer-2-line'},{ name: 'timer-fill'},{ name: 'timer-flash-fill'},{ name: 'timer-flash-line'},{ name: 'timer-line'},{ name: 'todo-fill'},{ name: 'todo-line'},{ name: 'toggle-fill'},{ name: 'toggle-line'},{ name: 'tools-fill'},{ name: 'tools-line'},{ name: 'tornado-fill'},{ name: 'tornado-line'},{ name: 'trademark-fill'},{ name: 'trademark-line'},{ name: 'traffic-light-fill'},{ name: 'traffic-light-line'},{ name: 'train-fill'},{ name: 'train-line'},{ name: 'train-wifi-fill'},{ name: 'train-wifi-line'},{ name: 'translate-2'},{ name: 'translate'},{ name: 'travesti-fill'},{ name: 'travesti-line'},{ name: 'treasure-map-fill'},{ name: 'treasure-map-line'},{ name: 'trello-fill'},{ name: 'trello-line'},{ name: 'trophy-fill'},{ name: 'trophy-line'},{ name: 'truck-fill'},{ name: 'truck-line'},{ name: 'tumblr-fill'},{ name: 'tumblr-line'},{ name: 'tv-2-fill'},{ name: 'tv-2-line'},{ name: 'tv-fill'},{ name: 'tv-line'},{ name: 'twitch-fill'},{ name: 'twitch-line'},{ name: 'twitter-fill'},{ name: 'twitter-line'},{ name: 'typhoon-fill'},{ name: 'typhoon-line'},{ name: 'u-disk-fill'},{ name: 'u-disk-line'},{ name: 'ubuntu-fill'},{ name: 'ubuntu-line'},{ name: 'umbrella-fill'},{ name: 'umbrella-line'},{ name: 'underline'},{ name: 'uninstall-fill'},{ name: 'uninstall-line'},{ name: 'unsplash-fill'},{ name: 'unsplash-line'},{ name: 'upload-2-fill'},{ name: 'upload-2-line'},{ name: 'upload-cloud-2-fill'},{ name: 'upload-cloud-2-line'},{ name: 'upload-cloud-fill'},{ name: 'upload-cloud-line'},{ name: 'upload-fill'},{ name: 'upload-line'},{ name: 'usb-fill'},{ name: 'usb-line'},{ name: 'user-2-fill'},{ name: 'user-2-line'},{ name: 'user-3-fill'},{ name: 'user-3-line'},{ name: 'user-4-fill'},{ name: 'user-4-line'},{ name: 'user-5-fill'},{ name: 'user-5-line'},{ name: 'user-6-fill'},{ name: 'user-6-line'},{ name: 'user-add-fill'},{ name: 'user-add-line'},{ name: 'user-fill'},{ name: 'user-follow-fill'},{ name: 'user-follow-line'},{ name: 'user-heart-fill'},{ name: 'user-heart-line'},{ name: 'user-line'},{ name: 'user-location-fill'},{ name: 'user-location-line'},{ name: 'user-received-2-fill'},{ name: 'user-received-2-line'},{ name: 'user-received-fill'},{ name: 'user-received-line'},{ name: 'user-search-fill'},{ name: 'user-search-line'},{ name: 'user-settings-fill'},{ name: 'user-settings-line'},{ name: 'user-shared-2-fill'},{ name: 'user-shared-2-line'},{ name: 'user-shared-fill'},{ name: 'user-shared-line'},{ name: 'user-smile-fill'},{ name: 'user-smile-line'},{ name: 'user-star-fill'},{ name: 'user-star-line'},{ name: 'user-unfollow-fill'},{ name: 'user-unfollow-line'},{ name: 'user-voice-fill'},{ name: 'user-voice-line'},{ name: 'video-add-fill'},{ name: 'video-add-line'},{ name: 'video-chat-fill'},{ name: 'video-chat-line'},{ name: 'video-download-fill'},{ name: 'video-download-line'},{ name: 'video-fill'},{ name: 'video-line'},{ name: 'video-upload-fill'},{ name: 'video-upload-line'},{ name: 'vidicon-2-fill'},{ name: 'vidicon-2-line'},{ name: 'vidicon-fill'},{ name: 'vidicon-line'},{ name: 'vimeo-fill'},{ name: 'vimeo-line'},{ name: 'vip-crown-2-fill'},{ name: 'vip-crown-2-line'},{ name: 'vip-crown-fill'},{ name: 'vip-crown-line'},{ name: 'vip-diamond-fill'},{ name: 'vip-diamond-line'},{ name: 'vip-fill'},{ name: 'vip-line'},{ name: 'virus-fill'},{ name: 'virus-line'},{ name: 'visa-fill'},{ name: 'visa-line'},{ name: 'voice-recognition-fill'},{ name: 'voice-recognition-line'},{ name: 'voiceprint-fill'},{ name: 'voiceprint-line'},{ name: 'volume-down-fill'},{ name: 'volume-down-line'},{ name: 'volume-mute-fill'},{ name: 'volume-mute-line'},{ name: 'volume-off-vibrate-fill'},{ name: 'volume-off-vibrate-line'},{ name: 'volume-up-fill'},{ name: 'volume-up-line'},{ name: 'volume-vibrate-fill'},{ name: 'volume-vibrate-line'},{ name: 'vuejs-fill'},{ name: 'vuejs-line'},{ name: 'walk-fill'},{ name: 'walk-line'},{ name: 'wallet-2-fill'},{ name: 'wallet-2-line'},{ name: 'wallet-3-fill'},{ name: 'wallet-3-line'},{ name: 'wallet-fill'},{ name: 'wallet-line'},{ name: 'water-flash-fill'},{ name: 'water-flash-line'},{ name: 'webcam-fill'},{ name: 'webcam-line'},{ name: 'wechat-2-fill'},{ name: 'wechat-2-line'},{ name: 'wechat-fill'},{ name: 'wechat-line'},{ name: 'wechat-pay-fill'},{ name: 'wechat-pay-line'},{ name: 'weibo-fill'},{ name: 'weibo-line'},{ name: 'whatsapp-fill'},{ name: 'whatsapp-line'},{ name: 'wheelchair-fill'},{ name: 'wheelchair-line'},{ name: 'wifi-fill'},{ name: 'wifi-line'},{ name: 'wifi-off-fill'},{ name: 'wifi-off-line'},{ name: 'window-2-fill'},{ name: 'window-2-line'},{ name: 'window-fill'},{ name: 'window-line'},{ name: 'windows-fill'},{ name: 'windows-line'},{ name: 'windy-fill'},{ name: 'windy-line'},{ name: 'wireless-charging-fill'},{ name: 'wireless-charging-line'},{ name: 'women-fill'},{ name: 'women-line'},{ name: 'wubi-input'},{ name: 'xbox-fill'},{ name: 'xbox-line'},{ name: 'xing-fill'},{ name: 'xing-line'},{ name: 'youtube-fill'},{ name: 'youtube-line'},{ name: 'zcool-fill'},{ name: 'zcool-line'},{ name: 'zhihu-fill'},{ name: 'zhihu-line'},{ name: 'zoom-in-fill'},{ name: 'zoom-in-line'},{ name: 'zoom-out-fill'},{ name: 'zoom-out-line'},{ name: 'zzz-fill'},{ name: 'zzz-line'}
          ]);







        const { name='', page = 1, limit = 72 } = req.query;
        const offset = (page - 1) * limit; // 计算偏移量  
        // 获取查询结果的总条数  
        const total = await remixicon.count({
            where: {
                name: { [Op.like]: `%${name}%` },
            }
        });

        const result = await remixicon.findAll({
            where: {
                name: { [Op.like]: `%${name}%` },
            },
            offset: offset, // 设置偏移量  
            limit: Number(limit) // 设置每页条数  
        });
        res.send({
            status: 200,
            message: 'success',
            data: { list: result, total: total }
        })
    } catch (error) {
        console.error('数据验证错误信息:', error.errors);
        next('Error finding user:', error);
    }
};