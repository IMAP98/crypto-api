import { useEffect } from "react";
import { CryptoSearchFrom } from "./components/CryptoSearchFrom";
import { useCryptoStore } from "./store";

function App() {
    const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

    useEffect(() => {
        fetchCryptos();
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="app-title">
                    <span>Cryptocurrency</span> quoter
                </h1>
                <div className="content">
                    <CryptoSearchFrom />
                </div>
            </div>
        </>
    );
}

export default App;
