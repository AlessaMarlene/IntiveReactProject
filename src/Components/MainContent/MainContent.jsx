import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import LogUser from '../LogUser/LogUser';
import About from '../About/About';
import Articles from '../Articles/Articles';
import CreateArticle from '../CreateArticle/CreateArticle';
import Article from '../Article/Article';
import './MainContent.css';

const MainContent = () => {
    const location = useLocation();
    
    return(
        <div className='mainContent'>
            {!location.pathname.includes('/article/') && <Home/>}
			<Routes>
                <Route path='/' element={<LogUser/>}/>
				<Route path='/logUser' element={<LogUser/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/articles' element={<Articles/>}/>
				<Route path='/create' element={<CreateArticle/>}/>
				<Route path='/article/:id' element={<Article/>}/>
                <Route path='*' element={<LogUser/>}/>
			</Routes>
        </div>
    );
}

export default MainContent;