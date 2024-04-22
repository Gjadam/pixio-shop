import DashboardBox from '../../Modules/AdminPanel/DashboardBox'
import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import DashBoardTable from '../../Modules/AdminPanel/DashBoardTable'
import { PiUsersDuotone } from 'react-icons/pi'
import { FiShoppingBag } from 'react-icons/fi'
import { IoPricetagOutline } from 'react-icons/io5'


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


export default function AdminDashboard() {
    return (
        <div className='container mx-auto p-10'>
            <div className="flex justify-evenly items-center flex-wrap gap-5 mb-10">
                <DashboardBox text='All Users' count='265' bgColor='bg-sky-300' icon={<PiUsersDuotone className=' text-3xl' />} />
                <DashboardBox text='All Products' count='500' bgColor='bg-violet-300' icon={<FiShoppingBag className=' text-3xl' />} />
                <DashboardBox text='Products sold' count='265' bgColor='bg-teal-300' icon={<IoPricetagOutline className=' text-3xl' />} />
            </div>
            <div className="  flex justify-start items-start w-full flex-col gap-20 ">
                <div className="  w-full h-[25rem] my-30 text-white">
                    <div className=" mb-10">
                        <SectionHeader text='Sale Statistics' />
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className=" mb-10 text-white w-full">
                    <div className=" mb-10 ">
                        <SectionHeader text='Recent Users' />
                    </div>
                    <div className="relative overflow-auto shadow-lg w-full shadow-gray-600 rounded-lg border-1 border-primary ">
                        <table className="w-full text-sm  rtl:text-right text-primary text-center ">
                            <thead className="text-xs uppercase border-b border-primary">
                                <tr>
                                    <th scope="col" className="px-6 py-3 ">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <DashBoardTable id={1} username='mohammad javad babaei' email='javad@gmail.com' />
                                <DashBoardTable id={2} username='ali rahmani' email='ali@gmail.com' />
                                <DashBoardTable id={2} username='ali rahmani' email='ali@gmail.com' />
                                <DashBoardTable id={2} username='ali rahmani' email='ali@gmail.com' />
                                <DashBoardTable id={2} username='ali rahmani' email='ali@gmail.com' />
                                <DashBoardTable id={2} username='ali rahmani' email='ali@gmail.com' />
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
