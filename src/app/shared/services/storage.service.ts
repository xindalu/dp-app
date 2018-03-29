import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from "../../../environments/environment";

@Injectable()
export class StorageService {
    keys: string[] = [
        'user',
        'auth'
    ];

    constructor() { }

    private getKey(key: string) {
        return environment.storagePrefix + key;
    }

    public add(key: string, value: string) {
        let encryptedData = CryptoJS.AES.encrypt(
            value,
            environment.storageSecret
        ).toString();

        sessionStorage.removeItem(this.getKey(key));

        return sessionStorage.setItem(this.getKey(key), encryptedData);
    }

    public get(key: string) {
        let encryptedValue = sessionStorage.getItem(this.getKey(key)),
            decryptedValue = '';

        if (encryptedValue) {
            decryptedValue = CryptoJS.AES.decrypt(
                encryptedValue,
                environment.storageSecret
            ).toString(CryptoJS.enc.Utf8)
        }

        return decryptedValue;
    }

    public clear() {
        this.keys.forEach(key => {
            sessionStorage.removeItem(this.getKey(key));
        });
    }

    public remove(key: string) {
        return sessionStorage.removeItem(this.getKey(key));
    }
}
