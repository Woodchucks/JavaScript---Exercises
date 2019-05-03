// var hege = [1,2,3,4,6];
// var stale = [2,5,6];
// var children = [...new Set([].concat(...hege, stale))]; (not ordered)

function mergeSortedArray(a, b) {
    var arr = a.concat(b).sort(function(a, b) {
        return a - b;
     });
    return [...new Set(arr)];
 }
