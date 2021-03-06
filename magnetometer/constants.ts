namespace jacdac {
    // Service: Magnetometer
    export const SRV_MAGNETOMETER = 0x13029088
    export const enum MagnetometerReg {
        /**
         * Indicates the current magnetic field on magnetometer.
         * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
         *
         * ```
         * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i32 i32 i32")
         * ```
         */
        Forces = 0x101,

        /**
         * Read-only nT int32_t. Error on the readings.
         *
         * ```
         * const [forcesError] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        ForcesError = 0x106,
    }

    export const enum MagnetometerCmd {
        /**
         * No args. Forces a calibration sequence where the user/device
         * might have to rotate to be calibrated.
         */
        Calibrate = 0x2,
    }

}
