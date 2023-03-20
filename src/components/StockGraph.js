// Get all the npm modules
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useDispatch, useSelector } from "react-redux";

// Get all local modules
import jsonData from "./../jsonData.json";
import { dateAlphaNumShortMonthDate12HrMinTime } from "./../utils/date.utils";

function StockGraph() {

  const calenderViewButtonLabels = ["1G", "1H", "1A", "3A", "1Y", "5Y"];
  const [calendarView, setCalendarView] = useState(calenderViewButtonLabels[0]);

  // custom tooltip that has modified values displayed as well as epoch ms converted to readable date.
  // @TODO: discuss and implement business logic for timezone offset.

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">Price: {payload[0].value}</p>
          <p className="intro">
            At: {dateAlphaNumShortMonthDate12HrMinTime(payload[0].payload["d"])}
          </p>
        </div>
      );
    }
    return null;
  };

  // calender view switch click handler
  const handleCalendarSwitch = (e) => {
    setCalendarView(e.target.name);
  };

  return (
    <>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart
          data={jsonData[calendarView]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="d" tick="" />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="c"
            stroke="#00E091"
            activeDot={{ r: 8 }}
            dot=""
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="button-group" aria-label="calender view switcher">
        {calenderViewButtonLabels.map((buttonLabel, idx) => (
          <button
            className={`ff-pill${
              calendarView === buttonLabel ? " active" : ""
            }`}
            key={buttonLabel + idx}
            onClick={handleCalendarSwitch}
            name={buttonLabel}
          >
            {buttonLabel}
          </button>
        ))}
      </div>
    </>
  );
}

export default StockGraph;
