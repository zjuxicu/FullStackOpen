import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allClicks = good + neutral + bad

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Header = () => {
  return (
    <div>
      <h1>
        give feedback
      </h1>
    </div>
  )
}
const Statistics = ({ good, neutral, bad, allClicks }) => {
  if (allClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )

  }
  return (
    <div>
      <h1>statistics</h1>
      <p>
        <StatisticsLine text = "good" value = {good}/><br/>
        <StatisticsLine text = "neutral" value = {neutral}/><br/>
        <StatisticsLine text = "bad" value = {bad}/><br/>
        <StatisticsLine text = "average" value = {average(good, bad, allClicks)}/><br/>
        <StatisticsLine text = "positive" value = {positive(good, allClicks)}/> %<br/>
      </p>
      <br/>
      <h4>HTML Table version:</h4>
      <HtmlTable good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}
const HtmlTable = ({good, neutral, bad, allClicks}) => {
  return (
    <table>
      <Row name = "good" value = {good}/>
      <Row name = "neutral" value = {neutral}/>
      <Row name = "bad" value = {bad}/>
      <Row name = "average" value = {average(good, bad, allClicks)}/>
      <Row name = "positive" value = {positive(good, allClicks)} />
    </table>
  )
}
const Row = ({name, value}) => {
  if (name === "positive"){
    return (
      <tr>
        <td>{name}</td>
        <td>{value} %
        </td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{value}
      </td>
    </tr>
  )
}
const StatisticsLine = ({text, value}) => {
  return(
    <>{text} {value}</>
  )
}
const average = (good, bad, allClicks) => (good - bad) / allClicks
const positive = (good, allClicks) => good / allClicks * 100

export default App