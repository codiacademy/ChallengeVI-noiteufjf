import ContactForm from '../../components/Form/ContactForm'

import './home.css'

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section id="hero-section" className='home-section'>
                <h1 id='title'>Home</h1>
            </section>

            {/* Nossos serviços */}
            <section id="services-section" className='home-section'>
                <h1 id='title'>Nossos serviços</h1>
            </section>

            {/* Sobre nós */}
            <section id="about-section" className='home-section'>
                <h1 id='title'>Sobre nós</h1>
            </section>

            {/* Reconhecimento */}
            <section id="recognition-section" className='home-section'>
                <h1 id='title'>Reconhecimento</h1>
            </section>

            {/* O que nossos clientes dizem */}
            <section id="testimony-section" className='home-section'>
                <h1 id='title'>Clientes dizem</h1>
            </section>

            {/* Entre em contato */}
            <section id="contact-section" className='home-section'>
                <h1 id='title'>Entre em Contato</h1>
                <div className="contentContact">
                    <div className="formCenter">
                        <ContactForm></ContactForm>
                    </div>
                    
                </div>

            </section>
        </>
    )
}