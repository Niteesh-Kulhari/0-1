import { useState, useMemo } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);

    const expensiveValue = useMemo(() => {
        const calculateFactorial = function(num) {
            if (num === 0 || num === 1) {
                return 1;
            } else {
                return num * calculateFactorial(num - 1);
            }
        };

        return calculateFactorial(input);
    }, [input]);

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
