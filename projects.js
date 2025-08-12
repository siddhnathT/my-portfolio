export default function Projects() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Projects</h1>
      
      <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h2>Hybrid Liver Tumor Detection</h2>
        <p>• Achieved 97% F1-score using CNN architectures</p>
        <p>• Implemented medical image segmentation</p>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h2>IoT-Based Electricity Theft Detection</h2>
        <p>• Real-time anomaly detection system</p>
        <p>• Machine learning for fraud detection</p>
      </div>
      
      <a 
        href="/" 
        style={{
          display: 'inline-block',
          marginTop: '30px',
          color: '#2563eb',
          textDecoration: 'none'
        }}
      >
        ← Back to Home
      </a>
    </div>
  );
}
