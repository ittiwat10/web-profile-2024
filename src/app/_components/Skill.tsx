import {
  faJava,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";
import { faC } from "@fortawesome/free-solid-svg-icons/faC";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10 text-blue-900" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10 text-blue-900" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10 text-blue-900" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10 text-blue-900" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faC} className="h-10 text-blue-900" />
          <p>C</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
