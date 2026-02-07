import xlsx from 'xlsx'

export class ExcelUtils{

    //filepath 
    //filename

    static getDataFromExcel(filePath:string , sheetName:string){

        try{
        const workbook = xlsx.readFile(filePath)
        //workbook.SheetNames[]
        const sheet = workbook.Sheets[sheetName]

        const data =xlsx.utils.sheet_to_json(sheet)

        return data
        }
        catch(e){
            console.log(e)

        }

    }




}