import {WebServicePost} from './Resources'

let tableData = {};


export function loadTableData(){
    if(tableData.length > 0){
        tableData.length = 0;
    }

    tableData = WebServicePost('https://api.adviceslip.com/advice');

}

export function editTableData(id){

}

export function deleteTableData(id){

}

export function editBtn(id){
    console.log(id)
}