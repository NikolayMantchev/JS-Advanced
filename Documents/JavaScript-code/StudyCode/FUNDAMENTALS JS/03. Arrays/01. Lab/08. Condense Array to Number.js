function solve(arr) {
    let nums = arr
    let condensed = [];

    while (nums.length > 1) {

        for (let i = 0; i < nums.length - 1; i++) {

            let curnum = Number(nums[i] + nums[i + 1]);

            condensed.push(curnum);
        }
        nums = condensed;
        condensed = [];
    }
    console.log(nums[0]);
}
solve([5, 50, 10])