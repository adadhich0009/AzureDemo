# Manual Test Cases - programs.ts

## Test Case 1: Union Type Variable (a)
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-01 | Assign number to union type variable | a = 10 | value of a is 10 | Pass/Fail |
| TC-02 | Assign string to union type variable | a = 'a' | value of a is a | Pass/Fail |

## Test Case 2: Constant Variable (b)
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-03 | Read constant value | b = 20 | value of b is 20 | Pass/Fail |
| TC-04 | Attempt to reassign constant | b = 15 | Error/Compilation fail | Pass/Fail |

## Test Case 3: Array Iteration (for...of)
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-05 | Iterate array using for...of | ar = [1, 2, 3, 2, 4, 5, 7, 2, 1, 2, 1] | Print all values 1,2,3,2,4,5,7,2,1,2,1 | Pass/Fail |

## Test Case 4: Duplicate Finding Logic
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-06 | Find duplicates in array | ar = [1, 2, 3, 2, 4, 5, 7, 2, 1, 2, 1] | Print duplicate values | Pass/Fail |

## Test Case 5: Literal Type Variable (seat)
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-07 | Assign valid literal value | seat = "aisle" | my seat is aisle | Pass/Fail |
| TC-08 | Assign "window" literal | seat = "window" | my seat is window | Pass/Fail |
| TC-09 | Assign "middle" literal | seat = "middle" | my seat is middle | Pass/Fail |
| TC-10 | Assign invalid literal | seat = "invalid" | Error/Compilation fail | Pass/Fail |

## Test Case 6: getChai Function (Type Guard)
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-11 | Pass string to getChai | type = "masala" | my chai is masala, my chai count is masala | Pass/Fail |
| TC-12 | Pass number to getChai | type = 2 | my chai count is 2 | Pass/Fail |

## Test Case 7: isSandwich Function (Optional Parameter)
| Test ID | Description | Input | Expected Output | Status |
|---------|-------------|-------|-----------------|--------|
| TC-13 | Pass value to isSandwich | type = "veg" | my sandwich is veg | Pass/Fail |
| TC-14 | Call isSandwich without parameter | (no input) | my sandwich is not available | Pass/Fail |
| TC-15 | Pass empty string | type = "" | my sandwich is not available | Pass/Fail |

---

## Summary
| Category | Total Test Cases |
|----------|-----------------|
| Union Types | 2 |
| Constants | 2 |
| Arrays | 2 |
| Literal Types | 4 |
| Function Overloads | 2 |
| Optional Parameters | 3 |
| **Total** | **15** |