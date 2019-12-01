'use strict';

const Homey = require('homey');

class MyDriver extends Homey.Driver {
	
  onPairListDevices( data, callback ) {
    return callback(null, [
      {
        "data": { "id": "this-is-a-duplicate-id" },
        "icon" : "images/foobar.svg"
      }
    ]);
  }
}

module.exports = MyDriver;
