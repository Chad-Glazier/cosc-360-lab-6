import Header from "../components/Header"
import "./Home.css"

function Home() {
	return (<>
		<Header pageTitle="Home" />
		<p>This will be the user's home page. This page should be functional even if the user isn't logged in.</p>
	</>)
}

export default Home
