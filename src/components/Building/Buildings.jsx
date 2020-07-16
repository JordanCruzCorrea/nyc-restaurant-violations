import React from "react";
import Building from "./Building";

export default function Buildings({ loading, buildings }) {
  return (
    <div className="container w-screen mx-auto flex flex-wrap justify-center">
      {!loading ? (
        buildings.map((building, index) => (
          <Building
            key={index}
            current={index}
            loading={loading}
            bldg={building}
            total={buildings.length}
          />
        ))
      ) : (
        <div className="loader ease-linear rounded-full border-8 border-t-8 mx-10 h-64 w-64"></div>
      )}
    </div>
  );
}