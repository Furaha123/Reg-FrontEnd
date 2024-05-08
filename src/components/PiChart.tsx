import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Optimal", value: 70, color: "#82ca9d" },
  { name: "Stress", value: 40, color: "#f08080" },
];

const PiChart = () => {
  return (
    <div className=" rounded-md bg-white mt-4 ">
      <h6 className="text-center bold ">Soil Moisture Overview</h6>
      <PieChart width={240} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex items-center justify-center gap-2">
        <div className="w-4 h-4 rounded-full bg-[#82ca9d] "></div>
        <div className="">Optimal</div>
        <div className="w-4 h-4 rounded-full bg-[#f08080] "></div>
        <div className="">Stress</div>
      </div>
    </div>
  );
};

export default PiChart;
