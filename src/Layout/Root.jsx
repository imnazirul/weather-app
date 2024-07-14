import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins container mx-auto py-8 px-5">
      <Outlet />
    </div>
  );
};

export default Root;
