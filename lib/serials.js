"use strict";

var child  = require('child_process'),
    serial = require('serialport');

/*
 * Detect an Arduino board
 * Loop through all USB devices and try to connect
 * This should really message the device and wait for a correct response
 */
exports.detect = function (device, opts, callback) {
    if (typeof device != 'string') {
        throw new Error('`device` is invalid, must be string');
    }

    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    child.exec('ls /dev | grep -E "'+ device +'"', function(err, stdout, stderr){
        var result = find(stdout, opts);
        callback && callback(result.error, result.device);
    });
};

exports.detectSync = function (device, opts) {
    if (typeof device != 'string') {
        throw new Error('`device` is invalid, must be string');
    }

    var execSync = require('exec-sync');

    var result = execSync('ls /dev | grep -E "'+ device +'"');
    return find(result.stdout, opts);
};

function find(stdout, opts) {
    var usb = stdout ? stdout.slice(0, -1).split('\n') : [],
        found = false,
        error = null,
        possible, temp;

    if (usb.length) {
        opts = merge({ parser: serial.parsers.readline('\n') }, opts);
        while (usb.length) {
            possible = usb.pop();

            if (possible.slice(0, 2) !== 'cu') {
                try {
                    temp = new serial.SerialPort('/dev/' + possible, opts);
                } catch (e) {
                    error = e;
                }
                if (!error) {
                    found = temp;
                    break;
                } else {
                    error = new Error('Could not find Arduino');
                }
            }
        }
    } else {
        error = new Error('Could not find Serial Port');
    }

    return {
        error: error,
        device: found
    }
}


function merge(target, source) {
    if (source) {
        for (var k in source) {
            target[k] = source[k];
        }
    }

    return target;
}