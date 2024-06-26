export function generateUUID() {
    const arr = new Uint8Array(16); // Create a 16 byte array
    window.crypto.getRandomValues(arr); // Fill the array with random values

    // Convert the bytes to hexadecimal and add dashes
    arr[6] = (arr[6] & 0x0f) | 0x40; // Version 4 UUID
    arr[8] = (arr[8] & 0x3f) | 0x80; // Variant 10xx

    const toHex = (byte) => byte.toString(16).padStart(2, '0');
    return `${toHex(arr[0])}${toHex(arr[1])}${toHex(arr[2])}${toHex(arr[3])}-${toHex(arr[4])}${toHex(arr[5])}-${toHex(arr[6])}${toHex(arr[7])}-${toHex(arr[8])}${toHex(arr[9])}-${toHex(arr[10])}${toHex(arr[11])}${toHex(arr[12])}${toHex(arr[13])}${toHex(arr[14])}${toHex(arr[15])}`;
}