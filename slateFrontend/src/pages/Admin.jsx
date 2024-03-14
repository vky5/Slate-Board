import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Admin(props) {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    setUserList(data);
                } else {
                    throw new Error('Response is not in JSON format');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [props.url]);

    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                userList.map((user) => (
                    <Card
                        key={user.email}
                        imageUrl={user.imageUrl}
                        name={user.name}
                        email={user.email}
                    />
                ))
            )}
        </div>
    );
}

export default Admin;
