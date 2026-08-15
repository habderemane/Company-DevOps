import { useEffect, useState } from 'react'
import { fetchUsers } from './mockApi'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Company DevOps</h1>
        <p>Pipeline CI/CD : GitLab + Docker + Docker Hub + Slack</p>
      </header>

      <main>
        <h2>Équipe (API mockée)</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <ul className="user-list">
            {users.map((u) => (
              <li key={u.id} data-testid="user-item">
                <strong>{u.name}</strong> — {u.role}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
  function calculTotal1(a, b) {
    let total = 0;
    if (true) {
      total = a + b;
    }
    let inutile = "je ne sers à rien";
    return total;
  }

  function calculTotal2(a, b) {
    let total = 0;
    if (true) {
      total = a + b;
    }
    let inutile = "je ne sers à rien";
    return total;
  }

  function calculTotal3(a, b) {
    let total = 0;
    if (true) {
      total = a + b;
    }
    let inutile = "je ne sers à rien";
    return total;
  }
}

export default App