import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../App.css'

export const Table = () => {
    const data =[
        {name:'dan', age:20},
        {name:'dm', age:30},
        {name:'dabe', age:35},
        {name:'dskdfjm', age:60}

    ]
    const columns=[
        {headerName:'Name', field:'name' , sortable: true},
        {headerName:'Age', field:'age'}
    ]
    return (
     <div className="ag-theme-alpine" style={{height:'250px'}}>
         
        <AgGridReact  rowData={data} columnDefs={columns}
        defaultColDef={{flex:1, minWidth:100}}
        />
     </div>
    )
}