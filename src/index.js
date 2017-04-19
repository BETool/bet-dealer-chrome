/* global chrome:true */

'use strict';

import BetDealer from 'bet-dealer';

class BetDealerChrome extends BetDealer {

  /*
  Interfaces:
  - this.runtime.sendMessage - send message to bg
  - this.runtime.onMessage.addListener - listener for forward messages
  */

  constructor (bg) {
    super(bg);
    this.runtime = chrome.runtime;
  }
}

export default BetDealerChrome;
