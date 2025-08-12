export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Siddhnath Arjun Tiwari</h1>
      <h2>AI | IoT | Blockchain Developer</h2>
      
      <section style={{ marginTop: '30px' }}>
        <h3>About Me</h3>
        <p>
          Technology professional specializing in smart systems and cybersecurity. 
          Currently pursuing Masters in Medical Systems Engineering.
        </p>
      </section>
      
      <a 
        href="/projects" 
        style={{
          display: 'inline-block',
          background: '#2563eb',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          marginTop: '20px',
          textDecoration: 'none'
        }}
      >
        View My Projects →
      </a>
    </div>
  );
}
