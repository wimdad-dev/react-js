import React from 'react'
import PageOne from './components/PageOne/PageOne'
import PageTwo from './components/PageTwo/PageTwo.jsx'
const App = () => {
    const users = [
        {
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776',
            intro: '',
            tag: 'satisfied'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
            intro: '',
            tag: 'Underserved'
        },
        {
            img: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
            intro: '',
            tag: 'Underbanked'
        }
    ]
  return (
    <div>
      <PageOne users = { users } />
      <PageTwo />
    </div>
  )
}

export default App