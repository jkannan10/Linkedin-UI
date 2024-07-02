import ManageNetwork from "../components/ManageNetwork";
import Suggestions from "../components/Suggestions";
import Footerpage from "./Footerpage";

const Network: React.FC = () => (
  <div className="row justify-content-center">
    <div className="col-2 col-md-2" style={{ marginLeft: "130px" }}>
      <div className="">
        <ManageNetwork />
        <div className="mt-2"></div>
        <Footerpage />
      </div>
      <div className="mt-3"></div>
    </div>
    <div className="col-7 col-md-7" style={{ width: "53%" }}>
      <div className="mb-2 border rounded p-2 d-flex justify-content-between bg-white align-items-center">
        <div className="p-2">No pending Invitations</div>
        <div className="" style={{}}>
          <button
            style={{ border: "none", background: "white", color: "#0000009d" }}
            className=" fw-bold"
          >
            Manage
          </button>
        </div>
      </div>
      <div className="mb-2 border rounded p-2 d-flex justify-content-between bg-white">
        <div className="p-2">
          Celebrations
          <br />
          <span style={{ color: "#0000009d" }}>
            Job changes, Birthdays, Work anniversaries
          </span>
        </div>
        <div className="mt-2 ">
          <button
            style={{ border: "none", background: "white", color: "#0000009d" }}
            className="fw-bold"
          >
            Show all
          </button>
        </div>
      </div>
      <Suggestions />
    </div>
    <div className="col-1"></div>
  </div>
);

export default Network;
