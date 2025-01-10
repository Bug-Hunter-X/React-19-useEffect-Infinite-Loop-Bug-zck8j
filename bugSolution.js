```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Update the state only once on mount
    console.log('Component mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```