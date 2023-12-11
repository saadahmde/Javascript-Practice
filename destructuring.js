// destructuring form object


var voxel = {
    x : `a`,
    y : `b`,
    z : `c`,
};


var first = voxel.x;
var second = voxel.y;
var third = voxel.z;

// this is the earlier way to do that 


let { x: a, y: b, z: c} = voxel // this is the easiest way to assign object in a variable

// lets make an easy function with it 

const AVG_TEMPERATURE = {
    today: 79.67,
    tomorrow: 57
}


function getTempOfTmrw(avgtemperature){
    "use strict";

    const { tomorrow : tomorrowTemperature} = avgtemperature;

    return tomorrowTemperature
}


console.log(getTempOfTmrw(AVG_TEMPERATURE))


// destructuring from nested object



const LOCAL_FORECAST = {
    today: {min: 89 , max: 100},
    tomorrow: {min: 78, max: 98}
};

function getLocalForecast(get_It) {
    "use strict";

    const {today: {min : getTodaysForecast}} = get_It;
    return getTodaysForecast;
}


console.log(getLocalForecast(LOCAL_FORECAST));