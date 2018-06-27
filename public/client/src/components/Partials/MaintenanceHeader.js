///////////////////////////////////////////////////////////////////////
//////////////////     Maintenance Header         /////////////////////
///////////////////////////////////////////////////////////////////////
// DGO

import React from "react";
import { Col } from "../../../../common/grid/";

/* 
REQUIRED PROPS: 
    client - the client object
    ////  FUTURE -- turn into an object
    hasErrors - boolean to tell us if we have errors and display a message 
    toggleSystem (method) - toggles when to go live, if we can go life
*/
<<<<<<< HEAD
export const MaintenanceHeader = ({ headerText, client, hasErrors, toggleSystem, deletePlatform }) => (
=======
export const MaintenanceHeader = ({ headerText, client, hasErrors, toggleSystem, launchModal }) => (
>>>>>>> upstream/master
  <div className="maintenance-header">
    <div className="toggle-section">
      {client.isLive ? (
        <h6>
          <i onClick={toggleSystem} className="fa fa-toggle-on toggle" /> system
          is live.
        </h6>
      ) : (
        <h6>
          <i onClick={toggleSystem} className="fa fa-toggle-off toggle" />{" "}
          system is off.
        </h6>
      )}
            
      {hasErrors && (
        <h6 className="badge badge-warning">
          Please check the forms for errors
        </h6>
      )}
    </div>
    <div className="delete-section">
<<<<<<< HEAD
      <button onClick={deletePlatform} className="btn btn-danger">
=======
      <button onClick={launchModal} className="btn btn-danger">
>>>>>>> upstream/master
        {headerText.deleteButton}
      </button>
    </div>
  </div>
);
