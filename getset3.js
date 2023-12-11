function makeClass() {
    class Thermostat {
        constructor (temp) {
            this._temp = 5/9 * (temp - 32)
        }
        get temperature() {
            return this._temp;
        }
        set temperature(value) {
            this._temp = value;
        }
    }
    return Thermostat;
}


const Thermostat = makeClass();
const temp = new Thermostat(76);
let thermos = temp.temperature;
temp.temperature = 26;  
thermos = temp.temperature
console.log(temp.temperature)