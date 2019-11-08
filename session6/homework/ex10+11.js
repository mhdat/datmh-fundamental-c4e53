function between(x, p, y){
    result = false
    if (x < y) {
        if ( p > x && p < y){
            result = true;
        }
    }
    if (x > y){
        if ( p > x && p < y){
            result = true
        }
    }
    if ( p == x || p == y ){
        result = true;
    } 
    return result;
}

function is_inside([x, y], [left, top, right, bottom]) {
    result = false
    if (between(left,x,right) && between(top,y,bottom)){
      result = true;
    }
    return result;
}
is_inside([100, 120], [140, 60, 240,260])
console.log(result)
is_inside([200, 120], [140, 60, 240,260])
console.log(result)