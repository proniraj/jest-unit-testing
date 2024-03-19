import sum from "../sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

afterAll(() => {
  console.log("All tests have been run!");
});

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])(".add(%i, %i)", (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(sum(a, b)).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(sum(a, b)).not.toBeLessThan(expected);
  });
});

describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`("add($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(sum(a, b)).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(sum(a, b)).not.toBeLessThan(expected);
  });
});

test.failing("It should fail", () => {
  expect(sum(1, 2)).toBe(4);
});

it.failing("It should fail", () => {
  expect(sum(1, 2)).toBe(4);
});

test.todo("It should be implemented later");

// The test function is an alias for it, so you can use either one.
// The describe function is used for grouping tests together.
// The test.each function is used for parameterized tests.
// The test.skip function is used to skip a test.
// The test.only function is used to run only one test.
// The beforeAll function is used to run some code before all tests.
// The beforeEach function is used to run some code before each test.
// The afterAll function is used to run some code after all tests.
// The afterEach function is used to run some code after each test.
// The expect function is used to make assertions.
// The jest.fn function is used to create a mock function.
// The jest.mock function is used to mock a module.
// The jest.spyOn function is used to spy on a method.
// The jest.setTimeout function is used to change the default timeout.
// The jest.clearAllMocks function is used to clear all mocks.
// The jest.resetAllMocks function is used to reset all mocks.
// The jest.restoreAllMocks function is used to restore all mocks.
// The jest.isolateModules function is used to isolate modules.
// The jest.retryTimes function is used to retry a test.
// The jest.retry function is used to retry a test.
// The jest.setTimeout function is used to change the default timeout.
// The jest.setSystemTime function is used to set the system time.
// The jest.useFakeTimers function is used to use fake timers.
// The jest.advanceTimersByTime function is used to advance timers by time.
// The jest.runAllTimers function is used to run all timers.
// The jest.runOnlyPendingTimers function is used to run only pending timers.
// The jest.runAllTicks function is used to run all ticks.
// The jest.runOnlyPendingTicks function is used to run only pending ticks.
// The jest.clearAllTimers function is used to clear all timers.
// The jest.resetAllTimers function is used to reset all timers.
// The jest.getTimerCount function is used to get the number of pending timers.
// The jest.isolateModules function is used to isolate modules.
// The jest.requireActual function is used to require the actual module.
