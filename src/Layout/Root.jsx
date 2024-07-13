import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins container mx-auto py-8">
      <Outlet />
    </div>
  );
};

export default Root;
