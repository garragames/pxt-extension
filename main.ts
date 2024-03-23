

//% weight=100 color=#0fbc11 icon=""
namespace custom {
    //% block
    export function readAnalogPin0(): number {
        return pins.analogReadPin(AnalogPin.P0);
    }
}
