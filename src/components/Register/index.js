import React, {useState} from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 100px;
  height: 50px;
`

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
`

const Register = ({topicsList}) => {
  const [name, setName] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(topicsList[0].id)
  const [error, setError] = useState('')

  const handleRegisterNow = () => {
    if (!name.trim()) {
      setError('Please enter your name')
    } else {
      setError('')
      // Perform actions to navigate or handle the registration
    }
  }

  return (
    <Container>
      <Header>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </Header>
      <form>
        <h1>Let us join</h1>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Select Topic:
          <select
            value={selectedTopic}
            onChange={e => setSelectedTopic(e.target.value)}
          >
            {topicsList.map(topic => (
              <option key={topic.id} value={topic.id}>
                {topic.displayText}
              </option>
            ))}
          </select>
        </label>
      </form>
      <br />
      {error && <p style={{color: 'red'}}>{error}</p>}
      <br />
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
        alt="website register"
      />
      <button onClick={handleRegisterNow}>Register Now</button>
    </Container>
  )
}

export default Register
