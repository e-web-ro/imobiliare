import { Link } from 'react-router-dom';
import { Home, Search, Menu, User } from 'lucide-react';
import { useState } from 'react';
import '../index.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" style={{
      height: 'var(--header-height)',
      backgroundColor: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--primary)' }}>
          <Home color="var(--secondary)" size={28} />
          E-Web Imobiliare
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {['Acasa', 'Proprietati', 'Agenti', 'Contact'].map((item) => (
            <Link key={item} to="/" style={{ fontWeight: '500', color: 'var(--text-main)', transition: 'var(--transition)' }} 
                  onMouseOver={(e) => e.target.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>
              {item}
            </Link>
          ))}
          <button className="btn btn-primary">Adauga Proprietate</button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }} className="mobile-toggle">
          <Menu size={24} color="var(--primary)" />
        </button>
      </div>
      
      {/* Mobile Nav logic can be added here or via CSS media queries context */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
