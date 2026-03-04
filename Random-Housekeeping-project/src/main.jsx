import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <main>
  <Header/>
  <h1>Fun facts about React!</h1>
   <ul>
    <li>was first release in 2013</li>
    <li>was originally created by Jordan Walke</li>
    <li>Has well over 200k stars on Github</li>
    <li>Is maintained by Meta</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
   </ul>
  </main>
)

function Header() {
  return(
    <header>
      <img src="/src/react-logo.png" width="40px" alt="React Logo"></img>
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      </header>
  )
}
