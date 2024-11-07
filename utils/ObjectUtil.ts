import { message } from "antd";

/**
 * Object utility
 */
class ObjectUtil {
  /**
   * Check value is object
   * @param {any} value
   * @return {boolean}
   */
  static isObject = (value: any): boolean => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  };

  /**
   * Get nested property value from object
   * @param {object} object
   * @param {string} key For example: foo.bar.baz
   * @return {any}
   */
  static getValue = (object: object, key: string): any => {
    if (typeof key !== "string") return null;
    return key
      .split(".")
      .reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), object);
  };

  /**
   * Set value of object's nested property
   * @param {object} object
   * @param {string} key For example: foo.bar.baz
   * @param {any} value
   */
  static setValue = (object: object, key: string, value: any): void => {
    if (typeof key !== "string") return;
    const keys = key.split(".");
    let current = object;

    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!(k in current)) {
        current[k] = {};
      }
      current = current[k];
    }

    current[keys[keys.length - 1]] = value;
  };

  /**
   * Safe JSON parse
   * @param {string} value
   * @return {object | null}
   */
  static safeJsonParse = (value: string): object | null => {
    try {
      const json = JSON.parse(value);
      if (json && typeof json === "object") return json;
    } catch (e) {
      message.error("Failed to parse JSON");
      console.error(e);
    }
    return null;
  };

  /**
   * Safe JSON stringify
   * @param {any} value
   * @return {string | null}
   */
  static safeJsonStringify = (value: any): string | null => {
    try {
      return JSON.stringify(value);
    } catch (e) {
      message.error("Failed to stringify JSON");
      console.error(e);
    }
    return null;
  };

  /**
   * Form data to JSON
   * @param {FormData} formData
   * @return {object}
   */
  static formDataToJson = (formData: FormData): object => {
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  };

  /**
   * JSON to form data
   * @param {object} json
   * @return {FormData}
   */
  static jsonToFormData = (json: any): FormData => {
    const formData = new FormData();
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        formData.append(key, json[key]);
      }
    }
    return formData;
  };
}

export default ObjectUtil;
