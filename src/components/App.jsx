import '../styles/index.scss'
import sword from '../images/swc-sword.png'

const App = () => {
  return (
    <>
      <section className='hero'>
        <main>
          <section>
            <h1>Oh hai, React</h1>
          </section>
          <img src={sword} alt='sword' width='250' />
        </main>
      </section>
    </>
  )
}

export default App
