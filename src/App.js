import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
const App = () => {
	return (
		<div >
			<Header />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='about' element={<About/>} />
				<Route path='contact' element={<Contact/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
		</div>
	)
}
export default App