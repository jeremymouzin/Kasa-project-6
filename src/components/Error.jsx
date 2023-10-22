
import { useRouteError } from "react-router-dom"
import Header from "../components/Header"
import { Link } from "react-router-dom";
import '../styles/Error.css'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
      <>
      <Header />
      <section id="error__page">
        <span className="error__number">404</span>
        <h1 className="error__text">Oups! La page que <span className="error__span">vous demandez n'existe pas.</span></h1>
        <Link className='error__link' to='/'>Retourner sur la page d'accueil</Link>
      </section>
      </>
    );
  }