namespace jacdac {
    // Service: Barcode reader
    export const SRV_BARCODE_READER = 0x1c739e6c

    export const enum BarcodeReaderFormat { // uint8_t
        Aztec = 0x1,
        Code128 = 0x2,
        Code39 = 0x3,
        Code93 = 0x4,
        Codabar = 0x5,
        DataMatrix = 0x6,
        Ean13 = 0x8,
        Ean8 = 0x9,
        ITF = 0xa,
        Pdf417 = 0xb,
        QrCode = 0xc,
        UpcA = 0xd,
        UpcE = 0xe,
    }

    export const enum BarcodeReaderReg {
        /**
         * Read-write bool (uint8_t). Turns on or off the detection of barcodes.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Constant. Reports the list of supported barcode formats, as documented in https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API.
         *
         * ```
         * const [format] = jdunpack<[jacdac.BarcodeReaderFormat[]]>(buf, "u8[]")
         * ```
         */
        Formats = 0x180,
    }

    export const enum BarcodeReaderEvent {
        /**
         * Raised when a bar code is detected and decoded. If the reader detects multiple codes, it will issue multiple events.
         * In case of numeric barcodes, the `data` field should contain the ASCII (which is the same as UTF8 in that case) representation of the number.
         *
         * ```
         * const [format, data] = jdunpack<[jacdac.BarcodeReaderFormat, string]>(buf, "u8 s")
         * ```
         */
        //% block="detect"
        Detect = 0x1,
    }

}
