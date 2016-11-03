//Page 16
//Add odd integers from -300,000 to 300,000 and console.log the final sum. Is there a shortcut?

function addOdds(start, end) {
	var sum = 0;
	for(var i = start; i <= end; i++) {
		if(i % 2 === 1 || i % 2 === -1) {
			sum += i;
		}
	}
	console.log(sum);
}

addOdds(-30000, 30000);

//Shortcut
//Just know how to do simple math? Ha
//I'm guessing the shortcut would be to use absolute value instead of logical or.

function addOddsShort(start, end) {
	var sum = 0;
	for(var i = start; i <= end; i++) {
		if(Math.abs(i % 2) === 1) {
			sum += i;
		}
	}
	console.log(sum);
}

addOddsShort(-30000, 30000);