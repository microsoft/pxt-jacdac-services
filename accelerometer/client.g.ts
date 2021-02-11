namespace modules {
    /**
     * A 3-axis accelerometer.
     **/
    //% fixedInstances blockGap=8
    export class AccelerometerClient extends jacdac.SensorClient<[number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_ACCELEROMETER, role, "i6.10 i6.10 i6.10");
        }
    
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacaccelerometer_101_0
        //% group="Accelerometer" blockSetVariable=myModule
        //% blockCombine block="x" callInDebugger
        get x(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacaccelerometer_101_1
        //% group="Accelerometer" blockSetVariable=myModule
        //% blockCombine block="y" callInDebugger
        get y(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[1];
        }

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacaccelerometer_101_2
        //% group="Accelerometer" blockSetVariable=myModule
        //% blockCombine block="z" callInDebugger
        get z(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[2];
        }

            
    }

    //% fixedInstance whenUsed
    export const accelerometer = new AccelerometerClient("accelerometer");
}