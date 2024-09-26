import { useMemo } from "react";
import { useCryptoStore } from "../store";
import { Spinner } from "./Spinner";

export const CryptoPriceDisplay = () => {
    const result = useCryptoStore((state) => state.result);
    const loading = useCryptoStore((state) => state.loading);
    const hasResult = useMemo(() => Object.values(result).length > 0, [result]);

    return (
        <div className="result-wrapper">
            {loading ? (
                <Spinner />
            ) : (
                hasResult && (
                    <>
                        <h2>Exchange</h2>
                        <div className="result">
                            <img
                                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                                alt="Crypto image"
                            />
                            <div>
                                <p>
                                    The price is: <span>{result.PRICE}</span>
                                </p>
                                <p>
                                    Highest price of the day:{" "}
                                    <span>{result.HIGHDAY}</span>
                                </p>
                                <p>
                                    Lowest price of the day:{" "}
                                    <span>{result.LOWDAY}</span>
                                </p>
                                <p>
                                    Variation in the last 24hrs:{" "}
                                    <span>{result.CHANGEPCT24HOUR}</span>
                                </p>
                                <p>
                                    Last update:{" "}
                                    <span>{result.LASTUPDATE}</span>
                                </p>
                            </div>
                        </div>
                    </>
                )
            )}
        </div>
    );
};
