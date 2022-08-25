import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import PostDetailPage from '../pages/PostDetail';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 ,id:"Test"},
  { field: 'userId', headerName: 'User Id', width: 120 },
  { field: 'title', headerName: 'Title', width: 130 ,editable: true },
  {
    field: 'createdAt',
    headerName: 'Post Date',
    type: 'number',
    width: 150,
  },
];

const rows = [
  { id: 1, userId: 'cb.park', title: 'title 1', category: "category1", contents : "contents 1", createdAt:  "20220819", updatedAt: "20200819" },
  { id: 2, userId: 'ym.kim', title: 'title 2', category: "category2", contents : "contents 2", createdAt:  "20220820", updatedAt: "20200820" },
  { id: 3, userId: 'sj.kim', title: 'title 3', category: "category3", contents : "contents 3", createdAt:  "20220821", updatedAt: "20200821" },
];

export default function Posts(props) 
{ 
  const [mode, setMode] = useState("ReadAll");
  const [post, setPost] = useState(null);
    const handleEvent = (event)=>{
      setPost(event.row);
    }
    return  (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            experimentalFeatures={{ newEditingApi: true }}
            onRowClick={handleEvent}
          />
        </div>
      );
}