import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bienvenido a Creatívate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav id="nav-bar">
          <div className="image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/creativate.appspot.com/o/banner%2FLogo%20sin%20fondo.png?alt=media&token=8a339baa-916a-46f4-9699-e9813b926e2c"
              alt=""
              className="img logo__creativate"
            />
          </div>
          <div className="links">
            <ul>
              <li>
                <img src="img/Deslizar.png" alt="" className="img icono" />
              </li>
              <li>
                <img src="img/Ayuda.png" alt="" className="img icono" />{' '}
              </li>
              <li>
                <img src="img/Fechas.png" alt="" className="img icono" />
              </li>
              <li>
                <img src="img/Personas.png" alt="" className="img icono" />
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <header className="banner">
        <img src="img/portada.png" alt="" className="img banner__image" />
        <p className="texto-banner">
          Somos un grupo que busca <br /> impulsar el desarrollo físico, <br />
          emocional y cognitivo de <br />
          niños de primaria.
        </p>
      </header>

      <main>
        <section className="nuestras-clases">
          <h2 className="section-title">Nuestras clases</h2>
          <div className="grid-container">
            <article className="clase idiomas spacing">
              <img src="img/Idiomas.png" alt="" className="img clase__image" />
              <a href="" className="btn">
                Más información
              </a>
            </article>

            <article className="clase programacion spacing">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/creativate.appspot.com/o/banner%2FLogo%20sin%20fondo.png?alt=media&token=8a339baa-916a-46f4-9699-e9813b926e2c"
                alt=""
                className="img crativate-image"
              />
              <img
                src="/img/Programacion.png"
                alt=""
                className="img programacion-image"
              />
              <a href="" className="btn">
                Más información
              </a>
            </article>

            <article className="clase musica spacing">
              <img src="img/Musica.png" alt="" className="img clase__image" />
              <a href="" className="btn">
                Más información
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>
          ¿Necesitas ayuda? <a href="">Contáctanos</a>
          <br />
          <a href="">Aviso de privacidad</a>
        </p>
      </footer>

      {/* <style jsx>{`

      `}</style> */}

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
