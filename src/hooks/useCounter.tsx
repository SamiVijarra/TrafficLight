import { useState } from "react"


export const useCounter = (initialValue: number = 1) => {

  const [counter, setCounter] = useState(initialValue);
  return {
    counter, 
    setCounter,
  }
}
