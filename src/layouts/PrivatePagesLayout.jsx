import { useEffect } from 'react';
import { NavigationBar } from '../components/NavigationBar'
import { useNavigate } from 'react-router-dom'

export const PrivatePagesLayout = ({children}) => {

    const navigate = useNavigate();
    
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate("/login", {replace: true});
      }
    }, [localStorage.getItem('token')])

    return (
        <>
            <NavigationBar />
            <div className='container'>
                {children}
            </div>
        </>
    )
}
