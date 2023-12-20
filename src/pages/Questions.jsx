import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
function Questions() {
  
  return (
    <section>
      <div className="k">
        <p>Suallar</p>
      </div>
      <div className="container">
        <div>
          <Faq data={data} />
        </div>
      </div>
    </section>
  );
}
export default Questions;
