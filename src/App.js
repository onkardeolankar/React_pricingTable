import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pricecard from './pricecard'

function App() {
  let priceCard = [
    {
      title: "Free",
      price: 0,
      features: [
        {
          name: " Single User",
          isEnable: true,
        },
        {
          name: " 5GB Storage",
          isEnable: true,
        },
        {
          name: " Unlimited Public Projects",
          isEnable: true,
        },
        {
          name: " Community Access",
          isEnable: true,
        },
        {
          name: " Unlimited Private Projects",
          isEnable: false,
        },
        {
          name: " Dedicated Phone Support",
          isEnable: false,
        },
        {
          name: " Free Subdomain",
          isEnable: false,
        },
        {
          name: " Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      title: " Plus",
      price: 29,
      features: [
        {
          name: <strong> 5 Users</strong>,
          isEnable: true,
        },
        {
          name: " 50GB Storage",
          isEnable: true,
        },
        {
          name: " Unlimited Public Projects",
          isEnable: true,
        },
        {
          name: " Community Access",
          isEnable: true,
        },
        {
          name: " Unlimited Private Projects",
          isEnable: true,
        },
        {
          name: " Dedicated Phone Support",
          isEnable: true,
        },
        {
          name: " Free Subdomain",
          isEnable: true,
        },
        {
          name: " Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      title: "Pro",
      price: 49,
      features: [
        {
          name:  <strong> Unlimited Users</strong>,
          isEnable: true,
        },
        {
          name: " 150GB Storage",
          isEnable: true,
        },
        {
          name: " Unlimited Public Projects",
          isEnable: true,
        },
        {
          name: " Community Access",
          isEnable: true,
        },
        {
          name: " Unlimited Private Projects",
          isEnable: true,
        },
        {
          name: " Dedicated Phone Support",
          isEnable: true,
        },
        {
          name:" Unlimited Free Subdomains",
          isEnable: true,
        },
        {
          name: " Monthly Status Reports",
          isEnable: true,
        },
      ],
    },
  ];
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
      {
        priceCard.map((card)=>{
          return <Pricecard data={card}></Pricecard>
        })
      }
      </div>
  </div>
</section>
  );
}

export default App;
