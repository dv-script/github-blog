import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/home';
import { Post } from './pages/post';

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/post/:id' element={<Post />}/>
            </Route>        
        </Routes>
    )
}