import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
  return (
    <main className="error-container ">
      <h1 className="error-title">404</h1>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default Error
