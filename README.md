# Memory leaks in Node.js
## How does Node.js manage memory?
- Node.js has some built-in memory management mechanism related to object lifetimes;
- Node.js dynamically allocates memory to objects when they are created and frees the space whene these objects are not in use.
- It is predominantly handled by the garbage collector. GC refers to the process of finding all the live values and returning memory used by dead values.
- Node.js GC uses the *heap* data structure to store memory references to objects as they are created. This heap has a finite size, and the GC computes how fast the resources were depleted to dictate whether or not there could be a memory leak.
## Why do memory leaks occur?
- “A memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in such a way that memory which is no longer needed is not released”(Wikipedia).