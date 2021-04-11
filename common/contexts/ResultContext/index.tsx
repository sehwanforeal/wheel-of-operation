import { NextPage } from "next";
import React, { useContext, useState, SetStateAction, Dispatch } from "react";

type Result = number[] | null;

type ResultContextValues = {
  isDone: boolean;
  result: Result;
  setResult: Dispatch<SetStateAction<Result>>;
};

export const ResultContext = React.createContext<ResultContextValues>({
  isDone: false,
  result: null,
  setResult: () => undefined,
});

export const useResultContext = () => useContext(ResultContext);

export const ResultProvider: NextPage = ({ children }) => {
  const [result, setResult] = useState<Result>(null);
  return (
    <ResultContext.Provider
      value={{
        isDone: result !== null,
        result,
        setResult,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
