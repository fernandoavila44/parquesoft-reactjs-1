import React from 'react';

export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

interface UserPresenterProps {
    users: User[];
    loading: boolean;
    error: string | null;
    onRefresh: () => void;
}

const UserPresenter: React.FC<UserPresenterProps> = ({ users, loading, error, onRefresh }) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h4>Lista de Usuarios (Presentational)</h4>
                <button onClick={onRefresh} disabled={loading}>
                    {loading ? 'Cargando...' : 'Recargar'}
                </button>
            </div>

            {error && <div style={{ color: 'red' }}>Error: {error}</div>}

            {loading && users.length === 0 ? (
                <p>Cargando usuarios iniciales...</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {users.map(user => (
                        <li key={user.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                            <strong>{user.name}</strong> <br />
                            <small>{user.email} | {user.website}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserPresenter;
