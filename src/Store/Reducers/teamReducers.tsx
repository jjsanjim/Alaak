import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



interface teamListKey{
    [key:string]:object
}
export interface teamState{
    teamList:Array<teamListKey>
}
const initialState={
    teamList:
    [
        {
            "_id": "659bfe94b18cf88de54b82a3",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/mendoza_o8x5hh.png",
            "firstName": "César ",
            "lastName": "Mendoza",
            "area": "VP",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a2",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/emilio_ih0t1p.png",
            "firstName": "Emilio ",
            "lastName": "Camargo",
            "area": "CTO ",
        "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a1",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/amaury_jivg8l.png",
            "firstName": "Amaury ",
            "lastName": "Almanza",
            "area": "CEO ",
        "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a6",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/humberto_wu4cwn.png",
            "firstName": "Humberto ",
            "lastName": "Alonso",
            "area": "UX&UI Manager",
        "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a7",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/luis_yakodt.png",
            "firstName": "Luis ",
            "lastName": "Mota",
            "area": "Trainne UX&UI",
        "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a8",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/cesar_nx1vkn.png",
            "firstName": "César",
            "lastName": "Ramón",
            "area": "Trainne UX&UI",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a9",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/aline_kvxuq8.png",
            "firstName": "Aline",
            "lastName": "Palacios",
            "area": "Trainne UX&UI",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82aa",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/nathali_vefdzc.png",
            "firstName": "Nathali",
            "lastName": "Ortiz",
            "area": "Trainne UX&UI",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82ab",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/vane_povgjv.png",
            "firstName": "Vanessa",
            "lastName": "Luna",
            "area": "Trainne UX&UI",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a5",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/juan_rtex1c.png",
            "firstName": "Juan",
            "lastName": "Rivera",
            "area": "App MovileI",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        },
        {
            "_id": "659bfe94b18cf88de54b82a4",
            "avatar": "https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/claudia_bjobdx.png",
            "firstName": "Claudia ",
            "lastName": "Rodríguez",
            "area": "Product",
            "email": "cesar.ra@maanyuba.com",
            "phone": "5539700892",
            "admissionDate": "04 de Septiembre de 2023",
        }
    ]
}

const sliceName = 'team';

export const team = createSlice({
    name: sliceName,
    initialState, 
    reducers:{
        cleanTeamList:(state)=>{
            const teamList = []
            return(state = {teamList})
        },
        addNewPartner:(state,action:PayloadAction)=>{
            const teamList= [action.payload,...state.teamList]
            return ( state = {teamList})
        }
    }  
})


export const {cleanTeamList, addNewPartner} = team.actions;
export default team.reducer