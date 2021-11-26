interface UserEntity {
    id: string;
    name: string;
    pwd: string;
    age: number;
    phone: string;
    height: number;
    address: string;
}

type UserResponse = Omit<UserEntity, 'pwd' | 'id'>;

type UserListResponse = Pick<UserEntity, 'id' | 'name'>;

const res: UserResponse = { 
    name: 'Marcin',
    age: 28,
    phone: '123123123',
    height: 179,
    address: 'Gliwice'
}

type UserUpdateReq = Partial<UserResponse>;

const dataToUpdate: UserUpdateReq = {
    name: 'Jan',
    address: 'Warszawa'
}