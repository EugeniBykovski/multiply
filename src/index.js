module.exports = function multiply(first, second) {
    var newFirst = first.split('').reverse();
    var newSecond = second.split('').reverse();

    var stack = [];

    for (var i = 0; i < newFirst.length; i++) {
        for (var j = 0; j < newSecond.length; j++) {
            var m = newFirst[i] * newSecond[j];
            stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
        }
    }

    for (var i = 0; i < stack.length; i++) {
        var num = stack[i] % 10;
        var move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }

    return stack.reverse().join('');
}