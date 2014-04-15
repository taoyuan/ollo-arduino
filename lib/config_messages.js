exports.platformWelcome = {
  "contents":[
    { "type": "paragraph", "text":"Driver for interaction with the Arduino inside the Ninja Block"},
    { "type": "submit", "name": "Flash Official", "rpc_method": "manual_board_version" },
    { "type": "submit", "name": "Flash Custom", "rpc_method": "manual_hex_location" },
    { "type": "close", "text": "Close"}
  ]
};

exports.flashduinoFetchVersionNumber = {
  "contents":[
    { "type": "paragraph", "text":"Please select your arduino board version number"},
    { "type": "input_field_select", "field_name": "arduino_board_version", "label": "Cape Version"
     , "options": [{ "name": "None", "value": "", "selected": true}], "required": true },
    { "type": "submit", "name": "Flash", "rpc_method": "confirm_flash_arduino" },
    { "type": "close", "text": "Cancel" }
  ]
};

exports.flashduinoFetchHexURL = {
  "contents":[
    { "type": "paragraph", "text":"Please select your arduino board version number"},
    { "type": "input_field_text", "field_name": "arduino_hex_url"
      , "value": "https://raw.github.com/ninjablocks/arduino/master/hex/v12_0.46.hex"
      , "label": "Arduino .hex location"
      , "placeholder": "https://raw.github.com/ninjablocks/arduino/master/hex/v12_0.46.hex"
      , "required": true
    },
    { "type": "submit", "name": "Flash", "rpc_method": "confirm_flash_arduino" },
    { "type": "close", "text": "Cancel" }
  ]
};

exports.flashduinoConfirmToFlash = {
  "contents":[
    { "type": "paragraph", "text":"Ready to download and flash arduino. Are you sure?"},
    { "type": "submit", "name": "Yes", "rpc_method": "flashduino_begin" },
    { "type": "close", "text": "No" }
  ]
};

exports.flashduinoFlashingArduino = {
  "contents":[
    { "type": "paragraph", "text":"Flashing arduino. Please wait for the status LED to return to green"},
    { "type": "close", "text": "OK" }
  ]
};

exports.invalidURL = {
  "contents":[
    { "type": "paragraph", "text":"The given url could not be reached."},
    { "type": "submit", "name": "Retry", "rpc_method": "manual_hex_location" },
    { "type": "close", "text": "Cancel" }
  ]
};

exports.finish = {
  "finish": true
};
