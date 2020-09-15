Var keyword declares a variable which is scoped to its current execution context(lexical scope). Access before assignment returns undefined. It can be reassigned.

Let keyword declares a block scoped variable. Access before assignment throws ReferenceError. It can be reassigned.

Const keyword declares constants which are block scoped much like variables defined using let but the value of a constant cannot change. Constants cannot be reassigned. The const declaration creates a read-only reference to a value. Access before assignment throws ReferenceError.



High-order fuctions:
Takes in a function or passes out a function

Generalizing the function:
We may not want to decide exactly what some of our functionality is until we run our function. 

Which is our higher-order function?
The outer function that takes in the function (our callback) is a higher-order function.

Which is our callback function?
The function we pass in is a callback function.



Closure:

Functions with memories:
- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.
- When the function finishes executing, its local memory is deleted (except the returned value).
- But our functions have the capability to hold on to live data between executions.
- This lets our function definitions have an associated cache/persistent memory,
- But it all starts with us returning a function from another function

The closure or Closed-over 'Variable Environment' or 'backpack' of live data is attached to the inner function (then to the outer function) through the hidden property known as [[scope]] which persists when the inner function is returned out.

Whenever the function is called, it will always look first in its immediate local memory (variable environment). Then, before it looks into the next execution context out, it will look in the [[scope]] property (lexical scope). The bond to the surrounding live data, is known as Lexical Scope.

The bond:
- When a function is defined, it gets a bond to the surrounding Local Memory ("Variable Enviornment") in which it has been defined.
- This allows us to have functions that remember the previous time they were run. Now they're functions with some static instructions to be run AND a persistent store of data on their back.



Recursion:
A recursive function is one that solves a repetitive problem by calling itself. 
Each function invocation breaks the problem down to solve smaller pieces of the same problem. The goal is to break the input down into the smallest possible solution to generate the result.

Key Idea:
Ask: "How is this task self-similar?"

- In a recursive function, you can handle a small part of the overall task yourself, then make a recursive call to handle the result(decomposition). 
- Each function invocation passes the responsibility of solving the problem to the next function.

Structure of Recursive Implementations // mit.edu : 

A recursive implementation always has two parts:
- BASE CASE, which is the simplest, smallest instance of the problem, that can’t be decomposed any further. Base cases often correspond to emptiness – the empty string, the empty list, the empty set, the empty tree, zero, etc.

- RECURSIVE "STEP", which decomposes a larger instance of the problem into one or more simpler or smaller instances that can be solved by recursive calls, and then recombines the results of those subproblems to produce the solution to the original problem.
[RECURSIVE "CASE" can be descibed in smaller occurences of the same problem. Recursively call the function with an input that gets us closer to the base case. // Codesmith]

It’s important for the recursive step to transform the problem instance into something smaller, otherwise the recursion may never end. If every recursive step shrinks the problem, and the base case lies at the bottom, then the recursion is guaranteed to be finite.

A recursive implementation may have more than one base case, or more than one recursive step. For example, the Fibonacci function has two base cases, n=0 and n=1.


