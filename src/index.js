'use strict';

import BetDealer from 'bet-dealer';

class BetDealerChrome extends BetDealer {
  addListener () {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.sendAnswer(message, this.appId, sendResponse);
      return true;
    });
    super.addListener();
  }

  send (msg, cb) {
    chrome.runtime.sendMessage(null, msg, null, cb);
  }
}

export default BetDealerChrome;
