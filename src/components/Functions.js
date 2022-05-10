import {WebServicePost, WebServices} from './Resources'

let tableData = {};


function loadTableData(){
    if(tableData.length > 0){
        tableData.length = 0;
    }

    WebServicePost(WebServices+'', [], []);

}

function editTableData(id){

}

function deleteTableData(id){

}

function editBtn(id){

}
