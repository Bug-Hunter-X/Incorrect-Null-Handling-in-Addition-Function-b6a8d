# Incorrect Null Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect handling of null values in a function.

The `foo` function adds two numbers, but it incorrectly returns 0 if either input is null.

A better solution would be to either throw an error or handle null values more gracefully.

## Bug

The bug is in the `foo` function.  If either `a` or `b` is `null`, the function returns 0, which may not be desired behavior.  It's important to handle null values appropriately based on the function's intended purpose.

## Solution

The solution demonstrates two approaches to handling null values:

1. **Throwing an error:** This approach is appropriate if null values are unexpected or invalid inputs.
2. **Returning null:** This approach is appropriate if null values are acceptable and should propagate through the function.

Choose the solution that best suits the specific requirements of your application.