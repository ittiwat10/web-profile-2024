import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Get a job and earn money 100k bath per month.</li>
          <li>Makes father not have to work hard anymore.</li>
          <li>Have the first girlfriend in the life.</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
