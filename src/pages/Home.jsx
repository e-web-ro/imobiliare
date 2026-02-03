import { Search, MapPin, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="home">
            <Header />

            {/* Hero Section */}
            <section className="hero" style={{
                position: 'relative',
                height: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                overflow: 'hidden'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/hero-house.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                    >
                        Gaseste Casa Visurilor Tale
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}
                    >
                        Cele mai exclusive proprietati din Romania, acum la un click distanta.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="search-bar" style={{
                            background: 'white',
                            padding: '1rem',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            gap: '1rem',
                            maxWidth: '800px',
                            margin: '0 auto',
                            boxShadow: 'var(--shadow-xl)',
                            flexWrap: 'wrap'
                        }}
                    >
                        <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                            <MapPin size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input type="text" placeholder="Locatie (ex: Bucuresti)" style={{
                                width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: '1rem'
                            }} />
                        </div>

                        <div style={{ flex: 1, minWidth: '150px' }}>
                            <select style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: '1rem', height: '100%' }}>
                                <option>Tip Proprietate</option>
                                <option>Apartament</option>
                                <option>Casa / Vila</option>
                                <option>Teren</option>
                            </select>
                        </div>

                        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                            <Search size={20} /> Cauta
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="section container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Proprietati In Evidenta</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Exploreaza cele mai noi oferte adaugate</p>
                    </div>
                    <a href="#" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Vezi Toate <ArrowRight size={18} />
                    </a>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="card">
                            <div style={{ height: '220px', background: '#ddd', position: 'relative' }}>
                                <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="House" />
                                <span style={{ position: 'absolute', top: '1rem', left: '1rem', padding: '0.25rem 0.75rem', background: 'rgba(15, 23, 42, 0.8)', color: 'white', borderRadius: '4px', fontSize: '0.875rem' }}>Vanzare</span>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>Vila Moderna Primaverii</h3>
                                <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '1.25rem', marginBottom: '1rem' }}>€ 450,000</p>
                                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <span>4 Cam</span>
                                    <span>•</span>
                                    <span>250 mp</span>
                                    <span>•</span>
                                    <span>2 Bai</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
