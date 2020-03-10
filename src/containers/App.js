import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() 
	{
	super()	
	this.state = {
			Robots: [],
			searchfield: ''
			}
		}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(respone=> respone.json())
		.then(users => this.setState({Robots: users})
		);
	}

    onsearchchange = (event) => {
    	this.setState({ searchfield: event.target.value })
    }

	render()
	{	const {Robots, searchfield} = this.state;
		const filteredRobots = Robots.filter(Robots =>{
    	return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
    	})
		return (
		   <div className = 'tc'>
		   <h1 className='f1'>Friends</h1>
		   <Searchbox searchChange = {this.onsearchchange}/>
	       <Scroll>
	         <CardList Robots= {filteredRobots} />
		   </Scroll>
		   </div>
			);}
}
export default App;