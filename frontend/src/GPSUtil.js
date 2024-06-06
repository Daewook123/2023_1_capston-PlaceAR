'use strict'

import Geolocation from 'react-native-geolocation-service';

export default class GPS {
    constructor(callback) {
        this._gpsID = undefined;
        this._isInitialized = false;
        this._gps = {'lat': 0, 'lng':0};
        this.callback = callback;
    }

    Start = () => {
        if(this._gpsID) {
            return;
        }
        this._gpsID = Geolocation.watchPosition(
            (result) => {
                this._gps.lat = result.coords.latitude;
                this._gps.lng = result.coords.longitude;
                if(!this._isInitialized) {
                    this.callback()
                }
                this._isInitialized = true;
            },
            (err) => console.log(err),
            {
                accuracy: {
                    android: 'high',
                    ios: 'best',
                },
                timeout: 2000,
                maximumAge: 1000,
                distanceFilter: 0,
                interval: 500,
            }
        )
    }
    Get = () => {
        if (!this._isInitialized) {
            throw new Error('Failed to load gps');
        }
        return this._gps;
    }

    Availbale = () => {
        return this._isInitialized;
    }


    Clear = () => {
        if (this._gpsID) {
            Geolocation.clearWatch(this._gpsID);
        }
    }
}