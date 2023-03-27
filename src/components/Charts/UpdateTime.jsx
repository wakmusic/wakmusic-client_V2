import React, { useState, useEffect } from "react";
import { getUpdated } from "../../apis/charts";

const UpdateTime = (props) => {
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    getUpdated().then((item) => {
      setUpdate(item.data);
    });
  }, []);

  if (!update) return <div className="updated fadein">벽돌 나르는 중...</div>;

  if (props.type === "daily")
    return (
      <div className="updated fadein">
        일간 차트는 매일 0시에 업데이트됩니다.
      </div>
    );
  if (props.type === "weekly")
    return (
      <div className="updated fadein">
        주간 차트는 매주 월요일 0시에 업데이트됩니다.
      </div>
    );
  if (props.type === "monthly")
    return (
      <div className="updated fadein">
        월간 차트는 매월 1일 0시에 업데이트됩니다.
      </div>
    );

  const date = new Date(update * 1000);
  console.log(
    date.getMonth() + 1 < 10
      ? "0" + parseInt(date.getMonth() + 1)
      : date.getMonth() + 1
  );
  return (
    <div className="updated fadein">
      최종 업데이트 | {date.getFullYear()}.
      {date.getMonth() + 1 < 10
        ? "0" + parseInt(date.getMonth() + 1)
        : date.getMonth() + 1}
      .{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}{" "}
      {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
      {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
    </div>
  );
};

export default UpdateTime;
