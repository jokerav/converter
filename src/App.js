import FormConverter from "./components/form";
import './App.css';
import 'antd/dist/antd.css';
import CurrencyList from "./components/currencyList";
import { useGetDataQuery} from './store/dataApi';

function App() {
  const { data = []
    // , error, isLoading
  } = useGetDataQuery();
  const currency = ['USD', 'CNY', "EUR", 'GBP'];
  let currencyValue = [];
  data.forEach(({cc,rate})=>{
    if (currency.includes(cc)){
      currencyValue.push({
        currency: cc, rate}          )
    }});
  // console.log(currencyValue);
  return(  <>
  <CurrencyList data={currencyValue}/>
  <FormConverter data={currencyValue}/>
</>)
}
export default App;
