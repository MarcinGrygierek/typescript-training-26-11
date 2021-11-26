interface FullUserRes {
    id: string;
    name: string;
    phone: string;
    email: string;
}

interface UserRes {
    id: string;
    name: string;
    token: string;
}

const getUser = (): UserRes | FullUserRes => {
    return {
        id: 'asd',
        name: 'Marcin',
        token: 'Asd'
    }
}