var arr = [1, 2, 3, 4];
var target = 9;
var kotae = [];
var sum = 0;
var stats = true;
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < target && stats == true) {
        sum += arr[i];
        kotae.push(i);
        if (sum >= 9) {
            stats = false;
        }
    }
}
console.log(sum);
console.log(kotae);
