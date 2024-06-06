import { useState } from "react"
import ProductPage from "./ProductPage";


export default function Callback() {
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <label>
                <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)}/>
                Dark Mode
            </label>
            <br />
            <ProductPage
                referrer="wizard_of_oz"
                productId={123}
                theme={isDark ? 'red' : 'blue'}
            />
        </>
    );
}
