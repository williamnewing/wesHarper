// Page 101
// Given x,y coordinates for a target value, every value that is adjacent to that
// value and shares the same value will change to new value, cascading through
// continually adjacent blocks(no diagonal adjacency)
function rFloodFill(start, matrix, char) {

}


var mat = [
	[1,1,1],
	[2,1,2],
	[2,2,2]
];

var start = [0,0];
console.log(rFloodFill(start, mat, 0))