import { create } from "zustand";
import { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[];
    fetchCryptos: () => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async() => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptoCurrencies: cryptocurrencies,
        }))
    }
})));
