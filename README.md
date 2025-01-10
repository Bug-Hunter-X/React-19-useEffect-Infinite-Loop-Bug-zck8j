# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common but easily overlooked bug in React 19 involving the `useEffect` hook. The bug arises from incorrectly updating state within the `useEffect` dependency array, leading to an infinite loop.

## Bug Description
The `useEffect` hook is designed to perform side effects after the component renders.  However, if the state update within the `useEffect` causes a re-render, which then triggers the `useEffect` again, it results in an infinite loop.  This is demonstrated in the `bug.js` file.

## Solution
The solution involves correctly managing the state update to prevent the infinite loop.  The corrected code is provided in `bugSolution.js`.