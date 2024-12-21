import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/test')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching from backend:', error));
    }, []);

    return (
        <div>
            <h1>Frontend</h1>
            <p>Response from backend: {message || 'Loading...'}</p>
        </div>
    );
}

export default App;
