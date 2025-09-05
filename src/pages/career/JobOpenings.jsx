import React, { useEffect } from "react";

export default function JobOpenings() {
  useEffect(() => {
    const initZohoWidget = () => {
      if (window.rec_embed_js) {
        const container = document.getElementById("rec_job_listing_div");
        if (!container) return;

        // Prevent duplicates by clearing previous content
        container.innerHTML = "";

        // Use a per-container flag
        if (!container.dataset.zohoInitialized) {
          window.rec_embed_js.load({
            widget_id: "rec_job_listing_div",
            page_name: "Careers",
            source: "CareerSite",
            site: "https://rsquaresoft.zohorecruit.in",
            brand_color: "#6875E2",
            empty_job_msg: "No current Openings",
          });

          container.dataset.zohoInitialized = "true"; // mark as initialized
        }
      }
    };

    // If script already loaded
    if (window.rec_embed_js) {
      initZohoWidget();
    } else {
      // Wait for script to load
      const script = document.getElementById("zoho-embed-js");
      if (script) {
        script.onload = initZohoWidget;
      }
    }

    // Cleanup: optional, just clears HTML
    return () => {
      const container = document.getElementById("rec_job_listing_div");
      if (container) container.innerHTML = "";
    };
  }, []); // run on mount

  return (
    <div className="embed_jobs_head embed_jobs_with_style_3 py-20 my-20">
      <h1 className="text-3xl font-bold text-center pb-10">Job Openings</h1>
      <div className="embed_jobs_head2">
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
      </div>
    </div>
  );
}
