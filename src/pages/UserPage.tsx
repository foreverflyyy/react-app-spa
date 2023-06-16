import React from 'react';
import {useParams} from "react-router-dom";

const UserPage = () => {

    const {id} = useParams();

    return (
        <>
            User {id}
        </>
    );
};

export default UserPage;