import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import { ErrorMessage } from "./ErrorMessage";

export const CryptoSearchFrom = () => {
    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
    const fetchData = useCryptoStore((state) => state.fetchData);

    const [pair, setPair] = useState<Pair>({
        currency: "",
        cryptoCurrency: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Object.values(pair).includes("")) {
            setError("All field are required.");
            return;
        }
        setError("");
        fetchData(pair);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="field">
                <label htmlFor="currency">Currency:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Select --</option>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label htmlFor="cryptoCurrency">Cryptocurrency:</label>
                <select
                    name="cryptoCurrency"
                    id="cryptoCurrency"
                    onChange={handleChange}
                    value={pair.cryptoCurrency}
                >
                    <option value="">-- Select --</option>
                    {cryptoCurrencies.map((crypto) => (
                        <option
                            key={crypto.CoinInfo.FullName}
                            value={crypto.CoinInfo.Name}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Exchange" />
        </form>
    );
};
