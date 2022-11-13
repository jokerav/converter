import { Typography } from 'antd';
import FormConverter from "./components/form";
import CurrencyList from "./components/currencyList";
import { useGetDataQuery} from './store/dataApi';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const { Title } = Typography;
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
  return(
      <>
        <Title style={{textAlign:"center"}}>Поточний курс валют Національного банку України</Title>
        <CurrencyList data={currencyValue}/>
        <Title level={3}>Конвертер валют</Title>
        <FormConverter data={currencyValue}/>
      </>
  )}
export default App;
