
import axios from "axios";
const baseUrl='http://localhost:9000/api/v1'
export const IMGURL='http://localhost:9000'

/************************MINISTERIOS */
/************************MINISTERIOS */
/************************MINISTERIOS */
export async function GetAllMin(err) {
    try {

        const response= await axios({
            url:`${baseUrl}/min`,
            method:'GET'
        })

        return response        
    } catch (error) {
        err();
        console.log('Error on Request: ',error)
    }
}

/************************CONTENIDO */
/************************CONTENIDO */
/************************CONTENIDO */
export async function GetPr(key) {

    try {

        const response=await axios({
            url:`${baseUrl}/contenido/Pr/${key}`,
            method:'GET'
        })

        return response  
        
    } catch (error) {
        console.log('Error on Request: ',error)
    }
    
}
export async function GetEst(key) {

    try {

        const response=await axios({
            url:`${baseUrl}/contenido/Est/${key}`,
            method:'GET'
        })

        return response  
        
    } catch (error) {
        console.log('Error on Request: ',error)
    }
    
}