import React from "react";
import ProgramTour from "./ProgramTour";
import TablePriceTour from "./TablePriceTour";
import InfomationTour from "./InfomationTour";
import OverviewTour from "./OverviewTour";

const OptionTour = ({ option, setOption }) => {
  return (
    <div className="option-tour">
      {option === "program" ? <ProgramTour /> : null}
      {option === "priceTable" ? <TablePriceTour /> : null}
      {option === "information" ? <InfomationTour /> : null}
      {option === "overview" ? <OverviewTour /> : null}
    </div>
  );
};

export default OptionTour;
