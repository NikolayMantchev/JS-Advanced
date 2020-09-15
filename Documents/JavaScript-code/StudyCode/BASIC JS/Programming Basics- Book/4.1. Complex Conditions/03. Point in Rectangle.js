function coordinates ([a1,a2,b1,b2,c1,c2 ]){
    let x1 = Number (a1);
    let y1 = Number (a2);
    let x2 = Number (b1);
    let y2 = Number (b2);
    let x = Number (c1);
    let y = Number (c2);
    
    if ((x1 <= x && x <= x2) && (y1 <= y && y <=y2)) {
        console.log ("Inside")
    } else {
        console.log("Outside")
    }
}
coordinates ([2,-3,12,3,8,-1]);