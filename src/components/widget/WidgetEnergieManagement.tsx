import React from 'react';
import Card from "components/card";
import "./EnergieManagement.css";
import { Link } from "react-router-dom";
import { exampleItems } from './exampleItems';
const WidgetEnergieManagement = () => {
  const indices = [0, 2];

  return (
    <>
    {exampleItems.map((e) =>(
      <>
       <Link to={`/admin/energie-management/${e.itemTitle}`}>
      <Card extra="p-4 rounded-[20px] wedget-card mt-2">
        <img src={e.imgSrc} alt={e.itemTitle} className="w-full h-[120px] rounded-[20px] mb-4" />
        <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-700 text-center globale-title">{e.itemTitle}</h4>
        <div className="mt-4 flex w-full justify-around info-div">
        {e.items.slice(0, 3).map((item, index) => (
        <div key={index} className="flex flex-col items-center px-2">
          <strong className="text-lg font-bold text-navy-700">{item.title}</strong>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
))}

        </div>
      </Card>
    </Link>
      </>
    ))}
    </>
  );
};

export default WidgetEnergieManagement;
