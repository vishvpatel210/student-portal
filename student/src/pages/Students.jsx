import { useState, useEffect } from 'react';
import './Students.css';

function Students() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data. Please try again.');
        return res.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="page students-page">
      <h1 className="page-title">Students</h1>
      <p className="page-subtitle">API data from JSONPlaceholder</p>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="error-box">
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && (
        <div className="cards-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>
              <div className="user-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-detail">
                  <span className="detail-icon">✉️</span> {user.email}
                </p>
                <p className="user-detail">
                  <span className="detail-icon">📞</span> {user.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;
