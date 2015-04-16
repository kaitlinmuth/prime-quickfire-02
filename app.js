var array1 = [1, 2, 3, 4, 5, 6, 7, 8];
var array2 = [2, 3, 4, 5, 6, 7, 8, 9];
var array3 = [7, 7, 7, 7, 7, 7, 7, 7];
var array4 = [9, 8, 7, 6, 5, 4, 2, 0];
var array5 = [1, 3, 5, 7, 9, 7, 5, 3];
var array6 = [2, 4, 6, 8, 8, 6, 4, 2];

var masterArray = [array1, array2, array3, array4, array5, array6];

doubleUp(masterArray);

function doubleUp(array) {
	for (var i =0; i<array.length; i++){
		for (var j = 0; j<array[i].length; j++){
			array[i][j] = doubleIt(addOne(array[i][j]));
		}
		console.log(array[i]);
	}
	return array;
}

function addOne(num) {
	num += 1;
	return num;
}

function doubleIt(num) {
	num *= 2;
	return num;
}