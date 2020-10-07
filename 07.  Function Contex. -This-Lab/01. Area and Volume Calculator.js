function area(x, y) {
    return this.x * this.y;
}
function vol(x, y, z) {
    return this.x * this.y * this.z;
}
function solve(area, vol, input) {
    let objects = JSON.parse(input);

    let result = objects.map(function (calc) {
        let areaObj = Math.abs(area.call(calc));
        let volObj = Math.abs(vol.call(calc));
        return { area: areaObj, volume: volObj };
    });
    return result;
}

solve(
    area,
    vol,
    `[ 

	{"x":"10","y":"-22","z":"10"}, 
	
	{"x":"47","y":"7","z":"-5"}, 
	
	{"x":"55","y":"8","z":"0"}, 
	
	{"x":"100","y":"100","z":"100"}, 
	
	{"x":"55","y":"80","z":"250"} 
	
	]`
);
