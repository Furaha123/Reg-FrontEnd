import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "AAA", uv: 100, pv: 2400, amt: 2400 },
  { name: "BBB", uv: 400, pv: 1398, amt: 2210 },
  { name: "CCC", uv: 200, pv: 9800, amt: 2290 },
  { name: "DDD", uv: 207, pv: 3908, amt: 2000 },
  { name: "EEE", uv: 89, pv: 4800, amt: 2181 },
];

import { Text } from "recharts";

interface CustomAxisTickProps {
  x: number;
  y: number;
  payload: { value: string };
}

const renderCustomAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  return (
    <Text x={x} y={y} dy={16} textAnchor="middle" fill="#666" fontSize="12px">
      {payload.value}
    </Text>
  );
};

const LineSoilChart = () => {
  return (
    <div className="w-[78%] rounded-md mt-4 bg-white p-4">
      <div className="flex items-center w-full">
        <AreaChart
          width={700}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#e1defc" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#3673e8"
            fill="url(#color)"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5" vertical={false} />
          <XAxis dataKey="name" tick={renderCustomAxisTick} />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default LineSoilChart;
