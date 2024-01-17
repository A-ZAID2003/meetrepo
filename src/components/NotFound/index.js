// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//   font-family: 'Arial', sans-serif;
//   text-align: center;
//   margin: 20px;
// `

// const NotFound = () => (
//   <Container>
//     <h1>Page Not Found</h1>
//     <img
//       src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png "
//       alt="not found"
//     />
//     <p>We are sorry, the page you requested could not be found</p>
//   </Container>
// )

// export default NotFound

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 20px;
`

const NotFound = () => (
  <Container>
    <h1>Page Not Found</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png "
      alt="not found"
    />
    <p>We are sorry, the page you requested could not be found</p>
  </Container>
)

export default NotFound
