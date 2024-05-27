function taskFirst() {
	const task = 'I prefer const when i can.';
	return task;
}
module.exports = taskFirst;
function getLast() {
	return 'is okay';
}

function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}
module.exports = {
	taskFirst,
	taskNext
};
