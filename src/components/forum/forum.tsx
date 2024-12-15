import  '../../proto/forum_pb';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './forum.css';

const client = new ForumClient('10.129.82.144:8080');
const ForumService = () => {
const navigate = useNavigate();
const token = JSON.parse(localStorage.getItem('token')!);

    return <div className='forum'>
        <div className='sections'>
            <button className='food' onClick={()=>navigate('/food') }>校园美食</button>
            <button className='sell' onClick={()=>navigate('/sell')}>交易信息</button>
            <button className='amuse' onClick={()=>navigate('/amuse')}>校内外娱乐</button>
        </div>
        <button className="personalPage" onClick={()=>navigate("/user")}>个人中心</button>
    </div>
}
export default ForumService;