import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CrudDisplay = (props) => {
  const { open, handleOpen } = props;

  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  const deleteInfo = (id) => {
    fetch(
      "https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/" + id,
      {
        method: "DELETE",
      }
    )
      .then((y) => y.json())
      .then((y) => {
        setId(id);
      });
  };

  useEffect(() => {
    fetch("https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee")
      .then((y) => y.json())
      .then((y) => {
        setData(y);
      });
  }, [open, id]);

  const columns = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "firstname", headerName: "First Name", width: 150 },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "cpntactnumber", headerName: "Contact Number", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                handleOpen(params.row);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                deleteInfo(params.id);
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
};

export default CrudDisplay;
