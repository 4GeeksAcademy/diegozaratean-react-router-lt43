import React, { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Service from "./services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";


const Home = () => {
	const [secreto,setSecreto] = useState('tengo un secreto')
	return (
		<>
			<BrowserRouter>			
				<Header />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/contactanos" element={<Contact />} />
					<Route path="/servicios" element={<Service />} />
				</Routes>
				<p>

					Sabias que : {secreto}
					<button onClick={()=>setSecreto('los humanos vienen de los anunaquis')}>Revelar secreto</button>
				</p>
				<h3>footer</h3>
			</BrowserRouter>
		</>
	);
};

export default Home;
