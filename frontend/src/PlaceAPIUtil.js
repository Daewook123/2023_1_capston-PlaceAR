'use strict'
const URI = {
    "getplace": "/place/search",
    "getplacelist": "/place/placelist",
}

export default class PlaceAPIUtil {
    constructor(host = "localhost:8080", imageURL = '', lat = 0, lng = 0) {
        this.host = host;
        this.image = {
            uri: imageURL,
            name: "photo.jpg",
            type: "image/jpg",
        };
        this.lat = lat;
        this.lng = lng;
    }

    SetData = async (imageURL, lat, lng) => {
        this.image.uri = imageURL;
        this.lat = lat;
        this.lng = lng;
    }
    GetPlace = async () => {
        const body = new FormData();
        body.append('image', this.image);
        body.append('lat', this.lat);
        body.append('lng', this.lng);
        const uri = "http://" + this.host + URI.getplace;
        console.log(uri);
        const res = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": 'multipart/form-data',
            },
            body: body,
        });
        console.log(res.ok);
        if (!res.ok) {
            return null;
        }
        return res.json();
    }

    GetPlaceList = async () => {
        const body = new FormData();
        body.append('lat', this.lat);
        body.append('lng', this.lng);
        const uri = "http://" + this.host + URI.getplacelist;
        console.log(uri);
        const res = await fetch(uri, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: body,
        });
        
        if (!res.ok) {
            return {};
        }
        return res.json();
    }
}