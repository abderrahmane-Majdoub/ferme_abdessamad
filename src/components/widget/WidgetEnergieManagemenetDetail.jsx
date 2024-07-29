import Card from "components/card";
import { useParams } from "react-router-dom";
import { exampleItems } from "./exampleItems";
import "./EnergieManagement.css";

const WidgetEnergieManagemenetDetail = () => {
  const { title } = useParams();
  const findE = exampleItems.find((e) => e.itemTitle === title);
  const items = findE ? findE.items : [];

  return (
    <>
      {items.map((item, index) => (
         <Card key={index} extra="p-4 rounded-[20px]">
      
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">{item.desc}</p>
            <p className="text-lg font-bold text-navy-700">{item.in}</p>
          </div>
          <h2 className="font-bold text-navy-700 items-title">{item.title}</h2>
        </Card>
      ))}
    </>
  );
};

export default WidgetEnergieManagemenetDetail;
