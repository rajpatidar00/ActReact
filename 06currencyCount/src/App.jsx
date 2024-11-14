import { useState } from "react";
import "./App.css";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const rate = currencyInfo[to] / currencyInfo[from];
    setConvertedAmount(amount * rate);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/9c/1a/83/9c1a83c56bff5bef16ea5d89f11360c1.jpg")`,
        }}
        className="read-the-docs bg-gray-800 text-red-800 bg-no-repeat bg-cover w-full h-screen flex items-center justify-center"
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="p-2">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={option}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full flex justify-center items-center">
                <button
                  onClick={swap}
                  className="bg-blue-600 absolute px-2 py-3 border-2 border-white rounded-3xl text-white text-sm"
                >
                  swap
                </button>
              </div>
              <div className="p-2">
                <InputBox
                  label="to"
                  currencyOptions={option}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <div className="flex justify-center p-3">
                <button
                  type="submit"
                  className="bg-blue-600 w-full text-white px-4 py-2 rounded-md"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
