import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);
  
  return null;
}

export default Logout;
