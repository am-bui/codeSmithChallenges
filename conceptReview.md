VAR/LET/CONST:

Var keyword declares a variable which is scoped to its current execution context(lexical scope). Access before assignment returns undefined. It can be reassigned.

Let keyword declares a block scoped variable. Access before assignment throws ReferenceError. It can be reassigned.

Const keyword declares constants which are block scoped much like variables defined using let but the value of a constant cannot change. Constants cannot be reassigned. The const declaration creates a read-only reference to a value. Access before assignment throws ReferenceError.

CLOSURE:

// To simply put it:
// You have a closure when a function accesses variables defined outside of it.

// As I define the inner function, it gets a bond to the surrounding 'Variable Environment" in which it's been defined.
// This variable environment can include any variable or obj that was declare in the outer function. So,
// when I return a function from inside another function, not only am I returning the inner function but also its surrounding live data,
// aka lexical scope. This lets our functions have an associated cache/persistent memory, which can be useful in a case where I'm
// wanting to keep track of number of times something happens.

RECURSION:

// A recursive function solves repetitive problems by calling itself.
// With each recursive call, the function breaks down the input into
// the smallest possible solution to give us the result we want. 
// the Structure in implementing recursion:
// BASE CASE: is the simplest, smallest instance of the problem, that can’t be decomposed any further. 
// RECURSIVE STEP: transforms the problem into something smaller, that gets us closer to base case
// Why? 
- It's inuitive. 
- It's declarative programming.
- It reduces the complexity of iterative code
- It's an elegant way to traverse data structures










High-order fuctions:
Takes in a function or passes out a function

Generalizing the function:
We may not want to decide exactly what some of our functionality is until we run our function. 

Which is our higher-order function?
The outer function that takes in the function (our callback) is a higher-order function.

Which is our callback function?
The function we pass in is a callback function.



Closure:

// To simply put it:
// You have a closure when a function accesses variables defined outside of it.

// As I define the inner function, it gets a bond to the surrounding 'Variable Environment" in which it's been defined.
// This variable environment can include any variable or obj that was declare in the outer function. So,
// when I return a function from inside another function, not only am I returning the inner function but also its surrounding live data,
// aka lexical scope. This lets our functions have an associated cache/persistent memory, which can be useful in this case where I'm
// wanting to keep track of times invoked/count.

Functions with memories:
- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.
- When the function finishes executing, its local memory is deleted (except the returned value).
- But our functions have the capability to hold on to live data between executions.
- This lets our function definitions have an associated cache/persistent memory,
- But it all starts with us returning a function from another function

The closure or Closed-over 'Variable Environment' or 'backpack' of live data is attached to the inner function (then to the outer function) through the hidden property known as [[scopes]] which persists when the inner function is returned out.

Whenever the function is called, it will always look first in its immediate local memory (variable environment). Then, before it looks into the next execution context out, it will look in the [[scopes]] property (lexical scope). The bond to the surrounding live data, is known as Lexical Scope.

The bond:
- When a function is defined, it gets a bond to the surrounding Local Memory ("Variable Environment") in which it has been defined.
- This allows us to have functions that remember the previous time they were run. Now they're functions with some static instructions to be run AND a persistent store of data on their back.

You have a closure when a function accesses variables defined outside of it.
When you return a function from inside another function, you are not only returning the function but also its "Variable Environment". This variable environment includes any variable or object that was declared in the outer function. The returned function retains a link to this outside variable environment. This link is more formally called Closed over ‘Variable Environment’ (C.O.V.E.)
or Persistent Lexical Scope Referenced Data (P.L.S.R.D.).

A closure allows a function to access and manipulate variables that are external to that function. Closures allow a function to access all the variables, as well as other functions, that are in scope when the function itself is defined.

Recursion:

// A recursive function solves repetitive problems by calling itself.
// With each recursive call, the function breaks down the input into
// the smallest possible solution to give us the result we want. 
// the Structure in implementing recursion:
// BASE CASE: is the simplest, smallest instance of the problem, that can’t be decomposed any further. 
// RECURSIVE STEP: transforms the problem into something smaller, that gets us closer to base case

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

recursion is a procedural operation which involves a function calling itself until certain conditions are met. We typically refer to these conditions as the ‘base case’.


