function solve(param) {
    const input = JSON.parse(param);
    const newObj = input.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    // const newObj = input.reduce(
    //     (acc, curr) => (Object.assign({}, acc, curr), {}),
    //     {}
    // );
    console.log(newObj);
}

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
