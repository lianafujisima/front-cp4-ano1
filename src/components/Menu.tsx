import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <nav className="menu text-3xl text-blue-950 flex space-x-8 font-semibold bg-blue-300 text-center">
            <Link to={'/'} className='m-2'>Home</Link>
            <Link to={'/produtos'} className='m-2'>Produtos</Link>
        </nav>
    )
}