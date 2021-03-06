namespace jacdac {
    // Service: WIFI
    export const SRV_WIFI = 0x18aae1fa

    export const enum WifiAPFlags { // uint32_t
        HasPassword = 0x1,
        WPS = 0x2,
        HasSecondaryChannelAbove = 0x4,
        HasSecondaryChannelBelow = 0x8,
        IEEE_802_11B = 0x100,
        IEEE_802_11A = 0x200,
        IEEE_802_11G = 0x400,
        IEEE_802_11N = 0x800,
        IEEE_802_11AC = 0x1000,
        IEEE_802_11AX = 0x2000,
        IEEE_802_LongRange = 0x8000,
    }

    export const enum WifiCmd {
        /**
         * Argument: results pipe (bytes). Initiate search for WiFi networks. Results are returned via pipe, one entry per packet.
         *
         * ```
         * const [results] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        Scan = 0x80,

        /**
         * Connect to named network.
         *
         * ```
         * const [ssid, password] = jdunpack<[string, string]>(buf, "z z")
         * ```
         */
        Connect = 0x81,

        /**
         * No args. Disconnect from current WiFi network if any.
         */
        Disconnect = 0x82,
    }


    /**
     * pipe_report Results
     * ```
     * const [flags, rssi, channel, bssid, ssid] = jdunpack<[jacdac.WifiAPFlags, number, number, Buffer, string]>(buf, "u32 x[4] i8 u8 b[6] s[33]")
     * ```
     */


    export const enum WifiReg {
        /**
         * Read-only bool (uint8_t). Indicates whether or not we currently have an IP address assigned.
         *
         * ```
         * const [connected] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Connected = 0x180,
    }

    export const enum WifiEvent {
        /**
         * Emitted upon successful join and IP address assignment.
         */
        //% block="got ip"
        GotIp = 0x1,

        /**
         * Emitted when disconnected from network.
         */
        //% block="lost ip"
        LostIp = 0x2,
    }

}
