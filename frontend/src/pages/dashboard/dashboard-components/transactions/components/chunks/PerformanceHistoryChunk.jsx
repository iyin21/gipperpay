import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsChevronDown } from "react-icons/bs";

function usePerformanceHistoryChunk() {
  const [isFrequencyDropdownOpen, setIsFrequencyDropDownOpen] = useState(false);
  const [frequency, setFrequency] = useState(0);

  const chartFrequencies = [
    { id: 0, name: "Daily" },
    { id: 1, name: "Weekly" },
    { id: 2, name: "Monthly" },
    { id: 3, name: "Yearly" },
  ];

  const chartData = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  function toggleFrequencyDropdown() {
    setIsFrequencyDropDownOpen((v) => !v);
  }

  function handleChangeFrequency(v) {
    setFrequency(v);
    toggleFrequencyDropdown();
  }

  return {
    chartData,
    frequencies: chartFrequencies,
    frequency,
    handleChangeFrequency,
    isFrequencyDropdownOpen,
    toggleFrequencyDropdown,
  };
}

export default function PerformanceHistoryChunk() {
  const {
    chartData,
    frequencies,
    frequency,
    handleChangeFrequency,
    isFrequencyDropdownOpen,
    toggleFrequencyDropdown,
  } = usePerformanceHistoryChunk();

  return (
    <div className="border rounded-lg p-5 sm:p-10">
      <div className="flex items-start justify-between mb-10">
        <div>
          <h6 className="font-medium"> Payment History </h6>
          <p className="font-big text-l mt-1 text-primary-dark"> $8,455 </p>
        </div>
        <div className="relative">
          <button
            className="text-xs pl-4 pr-3 py-2 flex items-center gap-3 rounded-lg bg-gray-50 text-gray-500"
            onClick={toggleFrequencyDropdown}
          >
            {frequencies[frequency].name}
            <BsChevronDown className="font-big" />
          </button>

          {isFrequencyDropdownOpen && (
            <ul
              className="bg-[#ffffff] border rounded-lg absolute top-full right-0 w-full min-w-[120px] border-gray-50 z-50"
              style={{
                boxShadow: "0px 4px 10px rgba(0,0,0,0.03)",
              }}
            >
              {frequencies.map((frequency) => (
                <li
                  key={frequency.id}
                  onClick={() => handleChangeFrequency(frequency.id)}
                  className="cursor-pointer text-xs py-1.5 text-gray-500 px-3 hover:bg-primary-30 hover:text-[#ffffff] rounded transition-colors duration-100"
                >
                  {frequency.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="-125.56%" stopColor="#fa3c121f" stopOpacity={1} />
              <stop offset="112.96%" stopColor="#fa3c1200" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="10"
            stroke="#F1F2F4"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            interval={"preserveStartEnd"}
          />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="step"
            dataKey="uv"
            stroke="#FA3C12"
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
