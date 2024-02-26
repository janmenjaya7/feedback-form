import React from "react";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import Modals from "./Modul";
// import { v4 as uuidv4 } from "uuid";

function FeedbackDts() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(null);

  const handleShow = (item) => {
    setDetails(item);
    setModalShow(true);
    console.log(item.username);
  };
  console.log(details);

  // console.log("items", item);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const Comments = await response.json();
        setData(Comments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="card-section">Card Section</h1>
      <div className="containers">
        <div className="row">
          <div className="d-flex flex-wrap">
            {data.map((item, i) => (
              <div
                onClick={() => handleShow(item)}
                className="col col-sm-6 col-md-4 col-lg-4 col-xl-3"
                key={i}
              >
                <ul
                  id="lest-item"
                  className="card p-3 m-2"
                  // onClick={HandelShow}
                >
                  <h4 className="d-flex justify-content-between  align-items-center">
                    {item.name}
                    <span className="delete-button">
                      <IconButton
                        onClick={() => setModalShow(true)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </span>
                  </h4>
                  <hr className="m-0" />
                  <li>
                    <span className="icons">
                      <MarkEmailReadRoundedIcon />
                    </span>
                    <span className="p-2">{item.email}</span>
                  </li>
                  <li>
                    <span>
                      <PhoneCallbackRoundedIcon />
                    </span>
                    <span className="p-2">{item.phone}</span>
                  </li>
                  <hr className="m-0" />
                  <li id="show-more">
                    <samp>
                      <QuestionAnswerRoundedIcon />
                    </samp>
                    <span className="p-2" id="comment-section">
                      {item.website}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Modals
          className="test-modal"
          show={modalShow}
          onHide={() => setModalShow(false)}
          cards={details}
        />
      </div>
    </div>
  );
}

export default FeedbackDts;
