import Input from "./components/input/input";
import './App.css';
import { useGetDataQuery} from './store/dataApi';

function App() {
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  console.log(data);

  return (
      <>
      <Input/>
      <Input/>
</>
  );
}

export default App;
