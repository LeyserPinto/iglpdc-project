


import axios from "axios";


const baseUrl='http://localhost:9000/api/v1'

export const IMGURL='http://localhost:9000'

export async function getEvents(err) {
    try {

        const response= await axios({
            url:`${baseUrl}/ev`,
            method:'GET'
        })

        return response        
    } catch (error) {
        err();
        console.log('Axios Request Error: ', error)
    }
}


/************************MINISTERIOS */
export async function GetMin(key) {
    try {

        const response= await axios({
            url:`${baseUrl}/min/${key}`,
            method:'GET'
        })

        return response        
    } catch (error) {
        console.log('Axios Request Error: ', error)
    }
}

export async function GetAlltoCard() {
    try {

        const response= await axios({
            url:`${baseUrl}/min`,
            method:'GET'
        })

        return response        
    } catch (error) {
        console.log('Axios Request Error: ', error)
    }
}



//COnsomo API with Data Fetching
// const apiBaseUrl='http://localhost:9000/api/v1';

// // export let event;


// // export async function getEvents(){    

// //     let result

// //     const response = await fetch('http://localhost:9000/api/v1')
// //         .then((res) => res.json())
// //         .then((data) => {
// //             return result = data.body
// //         }).catch(error => {
// //             console.log('Hubo un problema con la petición Fetch:' + error.message);
// //         })
// //     event=response;

// // }

// export function GetEvents() {
//     const fetching=fetch(apiBaseUrl+'/ev')
//       .then(res => {return res.json()})
//       .then(data => {return data})

//       return fetching;
// }