import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../assets/styles/Table.css";

interface TableProps {
  rows: any[];
}

const Table: React.FC<TableProps> = ({ rows }) => {
  const columns = [
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "id", headerName: "ID", width: 150 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  return (
    <DataGrid className="data-grid" rows={rows} columns={columns} autoHeight />
  );
};

export default Table;
