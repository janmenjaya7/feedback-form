import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FeedbackDts from "./FeedbackDts";
import Feedback from "./Feedback";
import FeedbackDetails from "./feedback-details";
import Box from "@mui/material/Box";

function MyRouts() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback-details" element={<FeedbackDetails />} />
          {/* <Route path="/feedback-details" element={<FeedbackDts />} /> */}
        </Routes>
      </Box>
    </div>
  );
}

export default MyRouts;
