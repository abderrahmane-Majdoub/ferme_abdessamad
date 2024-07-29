import React from "react";
import { useParams } from "react-router-dom";
import { exampleItems } from "components/widget/exampleItems";
import Navbar from "../../../components/navbar/index";
import Sidebar from "../../../components/sidebar/index";

import routes from "routes";
import DateFormat from "./FormatDate";
import WidgetEnergieManagemenetDetail from "components/widget/WidgetEnergieManagemenetDetail";

export default function EnergieManagementDetail(props: { [x: string]: any }) {
  const { title } = useParams<{ title: string }>();
  const findE = exampleItems.find((e) => e.itemTitle == title);
  const [currentRoute, setCurrentRoute] = React.useState(
    `Energie Management/ ${title}`
  );
  const { ...rest } = props;

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    setCurrentRoute(`${title}`);
  }, []);

  const getActiveNavbar = (routes: RoutesType[]): string | boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };

  return (
    <div>
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />

        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[270px]`}
          >
            <div className="h-full my-2 mx-2 ">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
                {...rest}
              />
              <div className="py-2 px-4 mb-2">
              <DateFormat  />

              </div>
            </div>

            {/* more detail divs  */}
            <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-3 3xl:grid-cols-4">
            <WidgetEnergieManagemenetDetail />

            </div>





          </main>
        </div>
      </div>
    </div>
  );
}
