import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

export const CircleChart = ({ data }) => {
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const percentage = (data[0].value / totalValue) * 100;
  const [isLabelVisible, setLabelVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLabelVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          innerRadius={60}
          outerRadius={80}
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="red" />;
            }
            return <Cell key={`cell-${index}`} fill="green" />;
          })}
          <Label
            value={`${percentage.toFixed(0)}%`}
            position="center"
            fill="black"
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              opacity: isLabelVisible ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
};
