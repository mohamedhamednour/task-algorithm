

ave the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.

If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr is [10, 9, 8, 2] then your program should return -1.

function maxProfit(array) {
    // map in  array becouse output idex  and vlaue  
	let profitArray = array.map((currentValue, index) => {
		// and slice becouse spread all vlaue in arrray by index with length array 
		return array.slice(index, array.length)
		// sort array by max value  and - currentValue
			.sort((a, b) => { return b - a })[0] - currentValue
	})
//  and return  max profitArray 
	return profitArray.sort((a, b) => { return b - a })[0];

}

console.log(maxProfit([44, 30, 24, 32, 35, 30, 40, 38, 15]));








Have the function TriangleRow(num) take num which will be a positive integer representing some row from Pascal's triangle. Pascal's triangle starts with a [1] at the 0th row of the triangle. Then the first row is [1, 1] and the second row is [1, 2, 1]. The next row begins with 1 and ends with 1, and the inside of the row is determined by adding the k-1 and kth elements from the previous row. The next row in the triangle would then be [1, 3, 3, 1], and so on. The input will be some positive integer and your goal is to return the sum of that row. For example: if num is 4 then your program should return the sum of 1 + 4 + 6 + 4 + 1 which is 16.
Examples






function printPascal(n)
{
	for( let line = 1; line <= n; line++)
	{

		
	let C=1;// used to represent C(line, i)
	for( let i = 1; i <= line; i++)
	{
		// The first value in a line is always 1
		console.log(C+"");

		C = C * (line - i) / i;
	}
	console.log("<br>");
	}
}



printPascal(5);




