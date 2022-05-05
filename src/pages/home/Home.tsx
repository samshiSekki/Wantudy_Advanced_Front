import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
        <button onClick={() => navigate('/login')}>로그인가기</button>
        </div>
    )
}

export default Home;