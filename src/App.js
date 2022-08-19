import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from './data'
// import './index.css';



function App() {

    const cardsElements = data.map(card => {
        return <Card
            key={card.id}
            card={card}
            //{...card}
        />
    })

    return (

        <div className="container">
            <Navbar/>
            <Hero/>
            <section className='card-list'>
                {cardsElements}
            </section>
        </div>
    );
}

export default App;
