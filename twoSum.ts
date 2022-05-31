

let arr: number []= [1, 2, 3, 4]
let target: number = 9

let kotae: number [] = [];
let sum: number = 0;
let stats: boolean = true
for(let i = 0; i <= arr.length - 1; i++) {
    if(arr[i] < target && stats == true) {
        sum += arr[i]
        kotae.push(i)
        if(sum >= 9) {
            stats = false
        }
    }
}
console.log(sum);
console.log(kotae);