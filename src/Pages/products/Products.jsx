import React, { useState } from "react";
import { products } from "../../datas";
import "./Porducts.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function UserList() {
  const [productsDatas, setProductsDatas] = useState(products);
  const productsDelet = (productID) => {
    setProductsDatas(
      productsDatas.filter((product) => product.id !== productID)
    );
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "محصول",
      width: 200,
      renderCell: (params) => {
        return (
          <Link className="link" to="/">
            <div className="userListUser">
              <img src={params.row.img} alt="avatar" className="userListImg" />
              <span className="userListName"> {params.row.title}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 150,
    },
    {
      field: "action",
      headerName: "ویرایش",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="userListEdit">ویرایش</button>
            </Link>
            <div
              className="userListAction"
              onClick={() => productsDelet(params.row.id)}
            >
              <DeleteOutlineIcon className="userListDelet" />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={productsDatas}
        columns={columns}
        disableRowSelectionOnClick  
        pageSize={3}
        sx={{ fontSize: 15 }} 
        checkboxSelection
      />
    </div>
  );
}
