
import axios from "axios";
const baseUrl='http://localhost:9000/api/v1'
export const IMGURL='http://localhost:9000'

/************************CONTENIDO */
/************************CONTENIDO */
/************************CONTENIDO */
export async function GetContent(key) {

    try {

        const response=await axios({
            url:`${baseUrl}/contenido/${key}`,
            method:'GET'
        })

        return response  
        
    } catch (error) {
        console.log('Error on Request: ',error)
    }
    
}

export async function GetContentOp(key) {

    try {

        const response=await axios({
            url:`${baseUrl}/contenido/op1/${key}`,
            method:'GET'
        })

        return response  
        
    } catch (error) {
        console.log('Error on Request: ',error)
    }
    
}