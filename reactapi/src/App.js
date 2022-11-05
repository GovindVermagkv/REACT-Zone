import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/comments")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;

		return (
      
		<div className = "App">
    <input placeholder="search"/><button onClick={data}>click</button>
			<h1> Fetch data from an api in react </h1>
       {/* {
				items.map((item) => (
				<ol key = { item.id } >
					Full_Name: { item.name },
					</ol>
				))
			} */}
		</div>
	);
  function data(){
    items.map((item) => (
      <ol key = { item.id } >
        Full_Name: { item.name },
        </ol>
        
      ))
  }
}
}

export default App;
