import React from "react";
import Table from "./Table";

function Information({ info, err }) {
  if (err) {
    return (
      <h1 className="text-red-900 text-3xl mt-4 text-center">
        No Data Available
      </h1>
    );
  } else {
    return <Table details={info} />;
  }

  // return <div>
  //   {err &&( <h1 className="text-red-900 text-3xl mt-4 text-center">
  //       No Data Available
  //     </h1>)}
  //   {!err && <Table details={info} />}
  //   </div>;
}

export default Information;
