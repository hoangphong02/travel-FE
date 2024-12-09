import { ReactComponent as NoData } from "~/assets/images/iconography/Solid/no_data.svg";

const NodataSection = () => (
  <div
    className="no-data-section d-flex flex-column align-items-center w-100 mt-4"
    style={{ overflow: "hidden" }}
  >
    <NoData style={{ height: "22vh", width: "100%" }} />
    <h3 className="mt-4">
      <span>No data</span>
    </h3>
  </div>
);

export default NodataSection;
