{
	console.log('二进制和八进制');
	console.log('0b ' + 0b1100);
	console.log('0o ' + 0o700)
}

{
	console.log('-----是不是数字-----');
	console.log('15', Number.isFinite(15));
	console.log('NaN', Number.isFinite(NaN));
	console.log('1/0', Number.isFinite('true'/0));
	console.log('NaN', Number.isNaN(NaN));
	console.log('0', Number.isNaN(0));
}

{
	console.log('-----是不是整数-----');
	console.log('25', Number.isInteger(25));
	console.log('25.0', Number.isInteger(25.0));
	console.log('25.1', Number.isInteger(25.1));
	console.log('\'25\'', Number.isInteger('25'));
}

{
	console.log('-----2^-53至2^53-----');
	console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
	console.log('10', Number.isSafeInteger(10));
	console.log('a', Number.isSafeInteger('a'));
}

{
	console.log('-----取整数-----');
	console.log(4.1, Math.trunc(4.1));
	console.log(4.9, Math.trunc(4.9));
}

{
	console.log('判断是正数、负数、还是零');
	console.log('-5', Math.sign(-5));
	console.log('0', Math.sign(0));
	console.log('5', Math.sign(5));
	console.log('50', Math.sign('50'));
	console.log('foo', Math.sign('foo'));
}

{
	console.log('-----立方根-----');
	console.log('-1', Math.cbrt(-1));
	console.log('8', Math.cbrt(8));
}