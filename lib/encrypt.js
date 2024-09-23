import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';

export const encryptRSA = (string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey("MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKCQ/7agIZMro+iXq1zGzBoEh+MRPxIxMpl2G7asfheMq9W7DGrzEOzbh9fCrOEjWou//uN0+X0wnFpoLEttp+cCAwEAAQ==");
  return encrypt.encrypt(string);
};

export function encryptAES(string) {
  const key = CryptoJS.enc.Utf8.parse("");
  const ivKey = CryptoJS.enc.Utf8.parse("");

  const encrypted = CryptoJS.AES.encrypt(string, key, {
    iv: ivKey,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

export function decryptAES(string) {
  const key = CryptoJS.enc.Utf8.parse("");
  const ivKey = CryptoJS.enc.Utf8.parse("");

  const decrypted = CryptoJS.AES.decrypt(string, key, {
    iv: ivKey,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return atob(decrypted.toString(CryptoJS.enc.Base64));
}
