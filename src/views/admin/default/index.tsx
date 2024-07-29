import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FaTemperatureEmpty } from "react-icons/fa6";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import { FiCloudRain } from "react-icons/fi";
import { FiWind } from "react-icons/fi";
import { MdCloudOff } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { PiCloudRainBold } from "react-icons/pi";
import ConsommationChart from "views/admin/default/components/ConsommationChart";
import { Area, AreaChart } from "recharts";
import AreaChartDashboard from "components/charts/dashboard/AreaChartDashboard";


const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

<div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<FaTemperatureEmpty className="h-7 w-7" />}
          title={"Temperature"}
          subtitle={"21.1 °C"}
        />
        <Widget
          icon={<MdCloudOff className="h-6 w-6" />}
          title={"Humidity"}
          subtitle={"70%"}
        />
        <Widget
          icon={<FiWind className="h-7 w-7" />}
          title={"title"}
          subtitle={"5.5 km/h"}
        />
        <Widget
          icon={<FiCloudRain className="h-6 w-6" />}
          title={"title"}
          subtitle={"3 mm"}
        />
        <Widget
          icon={<RiNeteaseCloudMusicFill className="h-7 w-7" />}
          title={"title"}
          subtitle={"140 °"}
        />
        <Widget
          icon={<PiCloudRainBold className="h-6 w-6" />}
          title={"title "}
          subtitle={"1017.2 hPa"}
        />
        
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <AreaChartDashboard />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
