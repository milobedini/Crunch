import { useEffect, useState } from "react"
import axios from "axios"

const NumberFact = ({ finalNumber }) => {
  const numberUrl = `http://numbersapi.com/${finalNumber}`
  const [numberTrivia, setNumberTrivia] = useState("")
  useEffect(() => {
    const getNumberFactFromApi = async () => {
      try {
        if (!finalNumber) {
          return
        }
        const response = await axios.get(numberUrl)
        setNumberTrivia(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    if (!finalNumber) {
      return
    }
    getNumberFactFromApi()
  }, [finalNumber, numberUrl])
  return <p>{numberTrivia}</p>
}

export default NumberFact
