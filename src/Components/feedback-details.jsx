import React from "react";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modals from "./Modul";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
function FeedbackDetails() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  const handleShow = (item) => {
    setSelectedCard(item);
    setModalShow(true);
    console.log(item.name);
    console.log("items", item);
  };
  console.log(selectedCard);

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
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <div className="containers">
          <div className="row">
            <div className="d-flex flex-wrap">
              {data.map((item, i) => (
                <div
                  onClick={() => handleShow(item)}
                  className="col col-sm-6 col-md-4 col-lg-4 col-xl-3"
                  key={i}
                >
                  <Card
                    sx={{
                      m: "4px",
                      borderRadius: "20px",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 5px",
                      backgroundColor: "hsla(0, 10%, 84%, 0.181)",
                      cursor: "pointer",
                    }}
                  >
                    <ul
                      // id="lest-item"
                      className="cards 
                      p-3 m-2"
                      // onClick={HandelShow}
                    >
                      <h4 className="d-flex justify-content-between  align-items-center">
                        {item.name}
                        <span className="delete-button">
                          <IconButton
                            onClick={() => handleShow(true)}
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
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {selectedCard ? (
            <Modals
              className="test-modal"
              show={modalShow}
              onHide={() => setModalShow(false)}
              cards={selectedCard}
            />
          ) : null}
        </div>
      </Box>
    </div>
  );
}

export default FeedbackDetails;
