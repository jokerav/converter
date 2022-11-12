import Form from "./components/Form/form";
import './App.css';
import 'antd/dist/antd.css';
import { useGetDataQuery} from './store/dataApi';
//номера валлют 2,24,25,32


function App() {
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  const currency = ['USD', 'CNY', "EUR", 'GBP'];
  let currencyValue = [];
  data.map(({cc,rate})=>{
    if (currency.includes(cc)){
      currencyValue.push({[cc]:rate})
    }});
  console.log(currencyValue);


  return (
      <Form/>
  );
}

export default App;
