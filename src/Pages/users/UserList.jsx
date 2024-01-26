import React, { useState } from "react";
import { userRows } from "../../datas";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);
  const userDelet = (userid)=>{
    setUserDatas(userDatas.filter(user => user.id !== userid))
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "کاربر",
      width: 200,
      renderCell: (params) => {
        return (
          <Link className="link" to="/">
            <div className="userListUser">
              <img
                src={params.row.avatar}
                alt="avatar"
                className="userListImg"
              />
              <span className="userListName"> {params.row.userName}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 200,
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "تراکنش",
      width: 150,
    },
    {
      field: "action",
      headerName: "ویرایش",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">ویرایش</button>
            </Link>
            <div className="userListAction" onClick={()=> userDelet(params.row.id)}>
              <DeleteOutlineIcon className="userListDelet"/>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={4}
        sx={{ fontSize: 15 }}
      />
    </div>
  );
}
