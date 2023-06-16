import React from 'react';
import {IUser} from "../../models/IUser";

interface UserInfoProps {
    user: IUser
    handlerBack: () => void;
}

const UserInfo = ({user, handlerBack}: UserInfoProps) => {
    return (
        <div style={{marginBottom: 10, border: '2px solid grey', borderRadius: 5, padding: 15}}>
            <h3>Info about user:</h3>
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Address: {user.address.city}, {user.address.street}</div>
        </div>
    );
};

export default UserInfo;