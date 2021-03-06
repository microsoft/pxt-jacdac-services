namespace jacdac {
    // Service: Sound level
    export const SRV_SOUND_LEVEL = 0x14ad1a5d
    export const enum SoundLevelReg {
        /**
         * Read-only ratio u0.16 (uint16_t). The sound level detected by the microphone
         *
         * ```
         * const [soundLevel] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        SoundLevel = 0x101,

        /**
         * Read-write bool (uint8_t). Turn on or off the microphone.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Read-write dB int16_t. The minimum power value considered by the sensor.
         * If both ``min_decibels`` and ``max_decibels`` are supported,
         * the volume in deciment can be linearly interpolated between
         * ``[min_decibels, max_decibels]``.
         *
         * ```
         * const [minDecibels] = jdunpack<[number]>(buf, "i16")
         * ```
         */
        MinDecibels = 0x81,

        /**
         * Read-write dB int16_t. The maximum power value considered by the sensor.
         * If both ``min_decibels`` and ``max_decibels`` are supported,
         * the volume in deciment can be linearly interpolated between
         * ``[min_decibels, max_decibels]``.
         *
         * ```
         * const [maxDecibels] = jdunpack<[number]>(buf, "i16")
         * ```
         */
        MaxDecibels = 0x82,

        /**
         * Read-write ratio u0.16 (uint16_t). The sound level to trigger a loud event.
         *
         * ```
         * const [loudThreshold] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        LoudThreshold = 0x5,

        /**
         * Read-write ratio u0.16 (uint16_t). The sound level to trigger a quite event.
         *
         * ```
         * const [quietThreshold] = jdunpack<[number]>(buf, "u0.16")
         * ```
         */
        QuietThreshold = 0x6,
    }

    export const enum SoundLevelEvent {
        /**
         * Raised when a loud sound is detected
         */
        //% block="loud"
        Loud = 0x6,

        /**
         * Raised when a period of quietness is detected
         */
        //% block="quiet"
        Quiet = 0x5,
    }

}
