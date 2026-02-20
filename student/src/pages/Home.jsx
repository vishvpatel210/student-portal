import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('students');
    if (stored) {
      setStudents(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="page home-page">
      <div className="home-hero">
        <h1>🎓 Student Portal</h1>
        <p className="home-subtitle">Manage and track your students with ease</p>
      </div>
      <div className="home-card">
        <div className="stat-box">
          <span className="stat-number">{students.length}</span>
          <span className="stat-label">Total Students</span>
        </div>
        <div className="home-students-info">
          {students.length === 0 ? (
            <p className="no-students">No students added yet.</p>
          ) : (
            <p className="students-present">
              You have <strong>{students.length}</strong> student{students.length !== 1 ? 's' : ''} stored in the portal.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
