import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../App.css'
// sortable: true,  filter: true, width: 400, resiable: true, editable: true, rowSelection="multiple"
const Grid = () => {
    const [rowData, setRowData] = useState([]);
  
    const colDefs = [
        { headerName: 'userId', field:"userId", sortable: true, filter: true, width: 250, resizable: true, editable: true, floatingFilter: true,checkboxSelection:true},
        { headerName: 'id', field: 'id', sortable: true, filter: true, width: 250, resizable: true, editable: true, floatingFilter: true},
        { headerName: 'title', field: 'title', sortable: true, filter: true,width:250, resizable: true, editable: true, floatingFilter: true},
        { headerName: 'completed', field: 'completed', sortable: true, filter: true,width:250, resizable: true, editable: true, floatingFilter: true}
    ]
    // let gridApi;
    const onGridReady = (params) => {
        // gridApi=params.api;
        // setGridApi(params.api);
        // setGridColumnApi(params.columnApi);
        console.log('ready gridd')
    }

    
    const onDoubleClick = (params) => {
       console.log('doubleclicked')
    }

    // const onExportClick=()=>{
    //     gridApi.exportDataAsCsv();
    
    //     // setGridApi(params.api);
    //     // setGridColumnApi(params.columnApi);
    //     console.log('Double clicked here')
    // }

    const onRowClicked = (event) => { 
        console.log('A row was clicked'); 
    }

    const onColumnResized = (event) => { 
        console.log('A column was resized'); 
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => {console.log(json)
    setRowData(json)
    json.map(m=>console.log('achea', m.id, '   ', m.title))
    console.log('acheaaaa = ', rowData)
})
  
        return () => {
            console.log('clean up stuff')
        }
    }, [])

    return (
       
        <div className="ag-theme-alpine" style={ { height: '700px'} }>
            <AgGridReact
                columnDefs={colDefs}
                rowData={rowData} 
                rowSelection="multiple" 
                onGridReady={onGridReady}
                onRowDoubleClicked={onDoubleClick}
                onRowClicked={onRowClicked}
                onColumnResized={onColumnResized} 
                defaultColDef={{flex:1, minWidth:100}}
                />
        </div>
        
    );
};


 const Gridd = () => {
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

export default Grid; 

