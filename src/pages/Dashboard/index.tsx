import React from "react";
import ProfileCard from "../../features/DashBoard/ProfilePanel";
import GraphView from "../../features/DashBoard/GraphView";
import Table from "../../features/DashBoard/Table";
import UserForm from "../../features/UserForm";

export default function Dashboard() {
  return <div className="px-8 pt-2">
    <div className="grid">
      <div className="col-5">
        <ProfileCard />
      </div>
      <div className="col-7">
        <GraphView />
      </div>
    </div>
    <div className="grid">
      <div className="col-12">
        <Table />
      </div>
    </div>
    <div className="grid">
      <div className="col-12">
        <UserForm />
      </div>
    </div>
  </div>;
}
