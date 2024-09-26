import { ChangeEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";

export const CryptoSearchFrom = () => {
    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);

    const [pair, setPair] = useState<Pair>({
        currency: "",
        cryptoCurrency: "",
    });

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Currency:</label>
                <select name="currency" id="currency" onChange={handleChange}>
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
