import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


const query = `
query	{
  person(id:"6ZaEyMagIZ0K3GGiiP8H9k") {
    name
    age
  }
  
  personCollection(where: {
    AND: [
      {name_contains: "Alex"},
      {age: 24}
    ]
  }) {
    items {
      name
    }
  }
  assetCollection{
    items{
      sys{
        id
      }
    }
  }
}
`;
let url = "https://graphql.contentful.com/content/v1/spaces/k81mpx68dd93?access_token=5IAlIZteabFc8orTV-k__MNnSRgyrM-nvVBXzZ0WJJA"


function App() {
  let [data, setData] = useState(0)

  useEffect(() => {
    window.fetch(url, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
      }
    )
      .then(res => res.json)
      .then(json => console.log(json.data))

  }, [])

  if (!data) return <span>Loading...</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.person.name}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
