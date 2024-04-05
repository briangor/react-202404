import { useState, useEffect, useMemo } from 'react';

export default function CacheUseMemo() {
    const [txt, setTxt] = useState("Some Text");
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const sum = useMemo(() => {
        console.log('Computing sum... ');
        return a + b;
    }, [a, b]);

    // Calculate sum without memoization
    // const sum = a + b;

    // Effect to compute sum whenever 'a' or 'b' changes
    const sum2 = useEffect(() => {
        console.log('Computing sum...(useEffect)');
        console.log(a + b);
    }, [a, b]);

    return (
        <div>
            <p>Text: {txt}</p>
            <p>a: {a}</p>
            <p>b: {b}</p>
            <p>sum: {sum}</p>
            <p>sum2: {sum2}</p>
            <button onClick={() => setTxt('New Text!')}>Set Text</button>
            <button onClick={() => setA(a + 1)}>Increment a</button>
            <button onClick={() => setB(b + 1)}>Increment b</button>
        </div >
    )
}