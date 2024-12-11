import React from 'react'
import Navbar from './Navbar';

const HomepageComponents = () => {
    
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Navbar/>
            <div className="flex-1 p-4 ml-64">
                <h2 className="text-black text-4xl font-bold p-8 pl-14 mt-14">Dashboard</h2>
                <div className="flex flex-wrap justify-evenly">
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-80 h-60">
                        <h2 className="text-lg font-semibold">Amce Plus</h2>
                        <p className="text-base text-gray-400 font-bold">SALES</p>
                        <p className="text-black text-4xl font-bold">$24,780</p>
                    </div>
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-80 h-60">
                        <h2 className="text-lg font-semibold">Amce Advanced</h2>
                        <p className="text-base text-gray-400 font-bold">SALES</p>
                        <p className="text-black text-4xl font-bold">$14,780</p>
                    </div>
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-80 h-60">
                        <h2 className="text-lg font-semibold">Amce Plus</h2>
                        <p className="text-base text-gray-400 font-bold">SALES</p>
                        <p className="text-black text-4xl font-bold">$9,980</p>
                    </div>
                </div>
                <div className="flex px-10">
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-1/2 h-80">
                        <h2 className="text-lg font-semibold">Direct VS Indirect</h2>
                        <p className="text-black text-4xl font-bold mt-3">$8.25k <span className="text-sm text-gray-500">Direct</span> $27.7 <span className="text-sm text-gray-500">Indirect</span></p>
                    </div>
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-1/2 h-80">
                        <h2 className="text-lg font-semibold">Real Time Value</h2>
                        <p className="text-black text-4xl font-bold mt-3">$58.25k</p>
                    </div>
                </div>
                <div className="flex px-10">
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-80 h-80">
                        <h2 className="text-lg font-semibold">Top Countries</h2>
                    </div>
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-2/3 h-80">
                        <h2 className="text-lg font-semibold">Top Channels</h2>
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">SOURCE</th>
                                    <th className="px-4 py-2 text-left">VISITORS</th>
                                    <th className="px-4 py-2 text-left">REVENUES</th>
                                    <th className="px-4 py-2 text-left">SALES</th>
                                    <th className="px-4 py-2 text-left">CONVERSION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Github.com</td>
                                    <td className="px-4 py-2">2.4K</td>
                                    <td className="px-4 py-2 text-green-600">$3,877</td>
                                    <td className="px-4 py-2">267</td>
                                    <td className="px-4 py-2 text-blue-600">4.7%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Facebook</td>
                                    <td className="px-4 py-2">2.2K</td>
                                    <td className="px-4 py-2 text-green-600">$3,426</td>
                                    <td className="px-4 py-2">249</td>
                                    <td className="px-4 py-2 text-blue-600">4.4%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Google (organic)</td>
                                    <td className="px-4 py-2">2.0K</td>
                                    <td className="px-4 py-2 text-green-600">$2,444</td>
                                    <td className="px-4 py-2">224</td>
                                    <td className="px-4 py-2 text-blue-600">4.2%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Vimeo.com</td>
                                    <td className="px-4 py-2">1.9K</td>
                                    <td className="px-4 py-2 text-green-600">$2,236</td>
                                    <td className="px-4 py-2">220</td>
                                    <td className="px-4 py-2 text-blue-600">4.2%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Indiehackers.com</td>
                                    <td className="px-4 py-2">1.7K</td>
                                    <td className="px-4 py-2 text-green-600">$2,034</td>
                                    <td className="px-4 py-2">204</td>
                                    <td className="px-4 py-2 text-blue-600">3.9%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex px-10">
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-1/2 h-80">
                        <h2 className="text-lg font-semibold">Sales Over Time</h2>
                        <p className="text-black text-4xl font-bold mt-3">$9,980</p>
                    </div>
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-1/2 h-80">
                        <h2 className="text-lg font-semibold">Sales VS Refunds</h2>
                        <p className="text-black text-4xl font-bold mt-3">$58.25k</p>
                    </div>
                </div>
                <div className="flex px-10">
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-1/2 hy-auto">
                        <h2 className="text-lg font-semibold">Recent Activity</h2>
                        <p className='text-gray-400 font-bold mt-5 hy-auto bg-blue-50'>TODAY</p>
                        <div className='flex mt-3'><p>Nick Mark mentioned Sara Smith in a new post.</p><button className='ml-28 text-blue-600'>View</button></div>
                        <div className='flex mt-3'><p>The post Post Name was removed by Nick Mark</p><button className='ml-28 text-blue-600'>View</button></div>
                        <div className='flex mt-3'><p>Patrick Sullivan published a new post</p><button className='ml-48 text-blue-600'>View</button></div>
                        <p className='text-gray-400 font-bold mt-5 hy-auto bg-blue-50'>YESTERDAY</p>
                        <div className='flex mt-3'><p>Nick Mark mentioned Sara Smith in a new post.</p><button className='ml-28 text-blue-600'>View</button></div>
                        <div className='flex mt-3'><p>The post Post Name was removed by Nick Mark</p><button className='ml-28 text-blue-600'>View</button></div>
                    </div>
                    <div className="m-4 bg-white shadow-lg rounded-lg p-6 w-1/2 h-96">
                        <h2 className="text-lg font-semibold">Income/Expenses</h2>
                        <p className='text-gray-400 font-bold mt-5 hy-auto bg-blue-50'>TODAY</p>
                        <div className='flex mt-3'><p>Nick Mark mentioned Sara Smith in a new post.</p><p className='ml-24'>-$49.88</p></div>
                        <div className='flex mt-3'><p>The post Post Name was removed by Nick Mark  </p><p className='text-green-500 ml-20 '>+$229.88</p></div>
                        <div className='flex mt-3'><p>Patrick Sullivan published a new post</p><p className='text-green-500 ml-40'>+$99.88</p></div>
                        <div className='flex mt-3'><p>Nick Mark mentioned Sara Smith in a new post.</p><p className='text-green-500 ml-20'>+$1,200.88</p></div>
                        <div className='flex mt-3'><p>The post Post Name was removed by Nick Mark</p><p className='ml-24'>-$99.99</p></div>
                        <div className='flex mt-3'><p>The post Post Name was removed by Nick Mark</p><p className='ml-24'>-$49.88</p></div>

                    </div>
                </div>
                <footer className="bg-white shadow w-full p-4 text-center mt-4">
                    <p className="text-gray-600">© 2023 Mosaic Template. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default HomepageComponents