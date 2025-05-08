import React, { useState, useEffect } from 'react';
import Bitcoin from './images/Bitcoin.png';
import Ethereum from './images/Ethereum.png'
import BNB from './images/BNB.png'
import solana from './images/solana.png'
import tether from './images/tether.png'
import xrp from './images/xrp.png';
import chart1 from './images/chart1.png';
import chart2 from './images/chart2.png';
import chart3 from './images/chart3.png';
import chart4 from './images/chart4.png';

const initialData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', image: Bitcoin, marketcap: "$1,861,618,902,186", volume: "$43,874,950,974", value: "467.81k BTC", circulating: "19.85M BTC", image1: chart1 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', image: Ethereum, marketcap: "$217,581,279,327", volume: "$23,288,870,274", value: "467.81k BTC", circulating: "120.71M ETH", image1: chart4 },
  { id: 3, name: 'Tether', symbol: 'USDT', image: BNB, marketcap: "$145,320,022,085", volume: "$37,674,830,274", value: "467.81k BTC", circulating: "145.27B USDT", image1: chart3 },
  { id: 4, name: 'XRP', symbol: 'XRP', image: solana, marketcap: "$130,073,814,966", volume: "$$217,581,279,327", value: "467.81k BTC", circulating: "58.39B XRP", image1: chart2 },
  { id: 5, name: 'BNB', symbol: 'BNB', image: tether, marketcap: "$85,471,956,947", volume: "145,320,022,085", value: "467.81k BTC", circulating: "140.89M BNB", image1: chart3 },
  { id: 6, name: 'Solana', symbol: 'SOL', image: xrp, marketcap: "$78,381,958,631", volume: "$1,861,618,902,186", value: "467.81k BTC", circulating: "517.31M SOL", image1: chart1 }
];

function CryptoTable() {
  const [rows, setRows] = useState(
    initialData.map(item => ({
      ...item,
      price: 1000,
      change1h: 0,
      change24h: 0,
      change7d: 0,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prev =>
        prev.map(row => ({
          ...row,
          price: +(row.price + (Math.random() - 0.5) * 20).toFixed(2),
          change1h: +((Math.random() - 0.5) * 2).toFixed(2),
          change24h: +((Math.random() - 0.5) * 10).toFixed(2),
          change7d: +((Math.random() - 0.5) * 20).toFixed(2),
        }))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <table className="table   text-center w-100  no-border-table" style={{ tableLayout: 'fixed' }}>
        <thead >
          <tr>
            <th className="text-left">#</th>
            <th style={{ width: '200px' }} > Name</th>
            <th style={{ width: '100px' }} >Price</th>
            <th style={{ width: '100px' }}>1h%</th>
            <th style={{ width: '100px' }}>24h%</th>
            <th style={{ width: '100px' }}>7d%</th>
            <th style={{ width: '150px' }}>Market Cap</th>
            <th style={{ width: '150px' }} >Volume(24h)</th>
            <th style={{ width: '150px' }} >Circulathing Supply</th>
            <th style={{ width: '150px' }} >Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={row.image}
                  alt={row.symbol}
                  className="rounded-circle me-2"
                  width="30"
                  height="30"
                />
                {row.name}  <spam style={{ color: '#6c757d' }}>{row.symbol}</spam>
              </td>
              <td>${row.price}</td>
              <td style={{ color: row.change1h >= 0 ? 'green' : 'red' }}>
                {row.change1h >= 0 ? '▲' : '▼'} {row.change1h}%
              </td>
              <td style={{ color: row.change24h >= 0 ? 'green' : 'red' }}>
                {row.change24h >= 0 ? '▲' : '▼'} {row.change24h}%
              </td>
              <td style={{ color: row.change7d >= 0 ? 'green' : 'red' }}>
                {row.change7d >= 0 ? '▲' : '▼'} {row.change7d}%
              </td>


              <td>{row.marketcap}</td>
              <td>{row.volume}
                <br />
                <span style={{ color: '#6c757d' }}>{row.value}</span>
              </td>
              <td>{row.circulating}</td>
              <td> <img src={row.image1} alt="Chart" width="100" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
