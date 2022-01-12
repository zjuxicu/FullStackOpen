import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState({ //Kuinka tehdä järkevämmmin?
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const handleVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1
    })
  }
  const getMostVoted = Object.keys(votes).sort((a, b) => votes[b] - votes[a])[0];
  console.log("App:", votes)

  return (
    <div>
      <Header />
      {anecdotes[selected]}
      <br />
      <br />
      <Votes amount={votes[selected]} />
      <Button text="vote" handleClick={() => handleVote()} />
      <Button text="next anecdote" handleClick={() => setSelected(getRandomInt(anecdotes.length))} />
      <TopAnecdote votes={votes[getMostVoted]} anecdote={anecdotes[getMostVoted]} />
    </div>
  )
}

const Votes = (props) => {
  console.log("Votes:", props)
  return (
    <div>
      has {props.amount} votes
    </div>
  )
}

const getRandomInt = (max) => Math.floor(Math.random() * max)


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const TopAnecdote = ({ votes, anecdote }) => {
  return (
    <div>
      <h1>Anecdote with the most votes:</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}
const Header = () => {
  return (
    <h1>Anecdote of the day</h1>
  )
}
export default App