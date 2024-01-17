// // import React from 'react'
// // import {Link} from 'react-router-dom'
// // import styled from 'styled-components'

// // const Container = styled.div`
// //   font-family: 'Arial', sans-serif;
// //   text-align: center;
// //   margin: 20px;
// // `

// // const Header = styled.header`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// // `

// // const Logo = styled.img`
// //   width: 100px;
// //   height: 50px;
// // `

// // const Home = () => (
// //   <Container>
// //     <Header>
// //       <Logo
// //         src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
// //         alt="website logo"
// //       />
// //     </Header>
// //     <h1>Welcome to Meetup</h1>
// //     <p>Please register for the topic</p>
// //     <Logo
// //       src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
// //       alt="meetup"
// //     />
// //     <Link to="/register">
// //       <button>Register</button>
// //     </Link>
// //   </Container>
// // )

// // export default Home

// import React from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'

// const Container = styled.div`
//   font-family: 'Arial', sans-serif;
//   text-align: center;
//   margin: 20px;
// `

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const Logo = styled.img`
//   width: 100px;
//   height: 50px;
// `

// const Home = ({registeredName}) => (
//   <Container>
//     <Header>
//       <Logo
//         src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
//         alt="website logo"
//       />
//     </Header>
//     <h1>Welcome to Meetup</h1>
//     <p>Please register for the topic</p>
//     {registeredName && <p>Hello {registeredName}</p>}
//     <Logo
//       src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
//       alt="meetup"
//     />
//     <Link to="/register">
//       <button>Register</button>
//     </Link>
//   </Container>
// )

// export default Home

import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 100px;
  height: 50px;
`

const MeetupImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: auto;
`

const Home = ({registeredName}) => (
  <Container>
    <Header>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Header>
    <h1>Welcome to Meetup</h1>
    <p>Please register for the topic</p>
    {registeredName && <p>Hello {registeredName}</p>}
    <MeetupImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
      alt="meetup"
    />
    <Link to="/register">
      <button>Register</button>
    </Link>
  </Container>
)

export default Home
