import { Card, Button } from "@grafana/ui";
import { Block } from "../../lib/river";
import specs from "../../generated/component_spec.json";

interface ComponentListProps {
  addComponent: (component: Block) => void;
}

const ComponentList = ({ addComponent }: ComponentListProps) => {
  return (
    <>
        {Object.keys(specs).map((name: string, i: number) => (
            <Card key={i}>
                <Card.Heading>{name}</Card.Heading>
                <Card.Meta>{[name]}</Card.Meta>
                <Card.Actions>
                    <Button onClick={() => addComponent(new Block(name,"just_added"))}>Add</Button>
                </Card.Actions>
            </Card>
        ))}
    </>
  );
};

export default ComponentList;
