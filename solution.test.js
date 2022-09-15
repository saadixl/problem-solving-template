const solution = require('./solution');
const testCases = require('./test-cases.json');

const callSolutionByArgs = (args, solution) => {
    const len = args.length;
    if(len === 1) {
        return solution(args[0]);
    } else if(len === 2) {
        return solution(args[0], args[1]);
    } else if(len === 3) {
        return solution(args[0], args[1], args[2]);
    } else if(len === 4) {
        return solution(args[0], args[1], args[2], args[3]);
    } else if(len === 5) {
        return solution(args[0], args[1], args[2], args[3], args[4]);
    } else {
        console.log("The test suite doesn't support more than 5 arguments as input");
        return 0;
    }
};

describe(`Executing ${testCases.length} test cases`, () => {
    testCases.forEach((testCase) => {
        const { input, output } = testCase;
        test(`INPUT: ${input}, OUTPUT: ${output}`, () => {
            expect(callSolutionByArgs(input, solution)).toBe(output);
        });
    });
});