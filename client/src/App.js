import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import DisplayData from './components/displayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache,
    uri: "http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <div className="App">
        List of users
      </div>
      <DisplayData />
    </ApolloProvider>
  );
}

export default App;
