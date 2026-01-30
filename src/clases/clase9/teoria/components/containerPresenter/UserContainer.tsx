import React, { useState, useEffect, useCallback } from 'react';
import UserPresenter, { User } from './UserPresenter';

const UserContainer = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // Simulating network request
            await new Promise(resolve => setTimeout(resolve, 800));

            const mockUsers: User[] = [
                { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', website: 'hildegard.org' },
                { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', website: 'anastasia.net' },
                { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', website: 'ramiro.info' },
            ];

            setUsers(mockUsers);
        } catch (err) {
            setError('Error al cargar usuarios');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <UserPresenter
            users={users}
            loading={loading}
            error={error}
            onRefresh={fetchUsers}
        />
    );
};

export default UserContainer;
