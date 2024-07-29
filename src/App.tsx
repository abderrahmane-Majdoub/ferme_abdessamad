import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import EnergieManagementDetail from "views/admin/EnergieManagement/EnergieManagementDetail";
import Source from "components/widget/water-management/Source";

const App = () => {
  return (
    <Routes> 
      <Route path="auth/*" element={<AuthLayout />} />

      {/* Energie Management  */}
      <Route path="/admin/energie-management/:title" element={<EnergieManagementDetail />} />

      {/* Water Management  */}

      <Route path="/admin/water-management/source" element={<Source/>}></Route>

      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
