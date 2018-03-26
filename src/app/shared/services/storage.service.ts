import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from "../../../environments/environment";

@Injectable()
export class StorageService {

    constructor() { }

    private getKey(key: string, keyEncrypted: boolean = true) {
        key = keyEncrypted ? CryptoJS.AES.encrypt(
            key,
            environment.storageSecret
        ).toString() : key;
        return environment.storagePrefix + key;
    }

    public add(key: string, value: string) {
        let encryptedData = CryptoJS.AES.encrypt(
            value,
            environment.storageSecret
        ).toString();
        return sessionStorage.setItem(this.getKey(key), encryptedData);
    }

    public get(key: string) {
        let encryptedValue = sessionStorage.getItem(this.getKey(key)),
            decryptedValue = CryptoJS.AES.decrypt(
                encryptedValue,
                environment.storageSecret
            ).toString();
        return decryptedValue;
    }

    public remove(key: string) {
        return sessionStorage.removeItem(this.getKey(key));
    }
}
