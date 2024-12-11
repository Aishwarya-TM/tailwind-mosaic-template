import React from 'react'
import Navbar from './Navbar';

const CustomersComponents = () => {
  return (
    <div className="container bg-gray-100">
        <Navbar/>
    <div className="flex-1 p-8 ml-64 pt-24">
        <h2 className='font-bold text-3xl'>Cutomers</h2>
    <table className="table-auto w-full border-collapse bg-white mt-6 rounded-lg">
      <thead>
        <tr>
          <th className="px-4 py-2  border-b">Order</th>
          <th className="px-4 py-2 border-b">Name</th>
          <th className="px-4 py-2 border-b">Email</th>
          <th className="px-4 py-2 border-b">Location</th>
          <th className="px-4 py-2 border-b">Orders</th>
          <th className="px-4 py-2 border-b">Last Order</th>
          <th className="px-4 py-2 border-b">Total Spent</th>
          <th className="px-4 py-2 border-b">Refunds</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 pl-12 border-b">⭐</td>
          <td className="px-4 py-2 pl-12 border-b">Patricia Semklo</td>
          <td className="px-4 py-2 pl-12 border-b">patricia.semklo@app.com</td>
          <td className="px-4 py-2 pl-12 border-b">London, UK</td>
          <td className="px-4 py-2 pl-12 border-b">24</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#123567</td>
          <td className="px-4 py-2 pl-12 border-b text-green-500">$2,890.66</td>
          <td className="px-4 py-2 pl-12 border-b">-</td>
        </tr>
        <tr>
          <td className="px-4 py-2 pl-12 border-b">⭐</td>
          <td className="px-4 py-2 pl-12 border-b">Dominik Lamakani</td>
          <td className="px-4 py-2  pl-12 border-b">dominik.lamakani@gmail.com</td>
          <td className="px-4 py-2 pl-12 border-b">Dortmund, DE</td>
          <td className="px-4 py-2 pl-12 border-b">77</td>
          <td className="px-4 py-2 pl-12 border-b text-sky-400">#779912</td>
          <td className="px-4 py-2 pl-12 border-b text-green-500">$14,767.04</td>
          <td className="px-4 py-2  pl-12 border-b">4</td>
        </tr>
        <tr>
          <td className="px-4 py-2  pl-12 border-b">⭐</td>
          <td className="px-4 py-2   pl-12 border-b">Ivan Mesaros</td>
          <td className="px-4 py-2  pl-12 border-b">imivanmes@gmail.com</td>
          <td className="px-4 py-2  pl-12 border-b">Paris, FR</td>
          <td className="px-4 py-2  pl-12 border-b">44</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#889924</td>
          <td className="px-4 py-2  pl-12 border-b text-green-500">$4,996.00</td>
          <td className="px-4 py-2  pl-12 border-b">1</td>
        </tr>
        <tr>
          <td className="px-4 py-2  pl-12 border-b">⭐</td>
          <td className="px-4 py-2  pl-12 border-b">Maria Martinez</td>
          <td className="px-4 py-2  pl-12 border-b">martinezhome@gmail.com</td>
          <td className="px-4 py-2  pl-12 border-b">Bologna, IT</td>
          <td className="px-4 py-2  pl-12 border-b">29</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#897726</td>
          <td className="px-4 py-2  pl-12 border-b text-green-500">$3,220.66</td>
          <td className="px-4 py-2  pl-12 border-b">2</td>
        </tr>
        <tr>
          <td className="px-4 py-2  pl-12 border-b">⭐</td>
          <td className="px-4 py-2  pl-12 border-b">Vicky Jung</td>
          <td className="px-4 py-2  pl-12 border-b">itsvicky@contact.com</td>
          <td className="px-4 py-2  pl-12 border-b">London, UK</td>
          <td className="px-4 py-2  pl-12 border-b">22</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#123567</td>
          <td className="px-4 py-2  pl-12 border-b text-green-500">$2,890.66</td>
          <td className="px-4 py-2  pl-12 border-b">-</td>
        </tr>
        <tr>
          <td className="px-4 py-2  pl-12 border-b">⭐</td>
          <td className="px-4 py-2  pl-12 border-b">Tisho Yanchev</td>
          <td className="px-4 py-2  pl-12 border-b">tisho.y@kurlytech.com</td>
          <td className="px-4 py-2  pl-12 border-b">London, UK</td>
          <td className="px-4 py-2  pl-12 border-b">14</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#896644</td>
          <td className="px-4 py-2  pl-12 border-b text-green-500">$1,649.99</td>
          <td className="px-4 py-2  pl-12 border-b">1</td>
        </tr>
        <tr>
          <td className="px-4 py-2  pl-12 border-b">⭐</td>
          <td className="px-4 py-2  pl-12 border-b">James Cameron</td>
          <td className="px-4 py-2  pl-12 border-b">james.ceo@james.tech</td>
          <td className="px-4 py-2  pl-12 border-b">Marseille, FR</td>
          <td className="px-4 py-2  pl-12 border-b">34</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#136988</td>
          <td className="px-4 py-2  pl-12 border-b text-green-500">$3,569.87</td>
          <td className="px-4 py-2  pl-12 border-b">2</td>
        </tr>
        <tr>
          <td className="px-4 py-2  pl-12 border-b">⭐</td>
          <td className="px-4 py-2  pl-12 border-b">Haruki Masuno</td>
          <td className="px-4 py-2  pl-12 border-b">haruki@supermail.jp</td>
          <td className="px-4 py-2  pl-12 border-b">Tokio, JP</td>
          <td className="px-4 py-2  pl-12 border-b">112</td>
          <td className="px-4 py-2  pl-12 border-b text-sky-400">#442206</td>
          <td className="px-4 py-2  pl-12 border-b text-green-500">$19,246.07</td>
          <td className="px-4 py-2  pl-12 border-b">6</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
);
};

export default CustomersComponents