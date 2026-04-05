"use client"

import { useState } from "react"

import Sidebar from "../components/Sidebar"
import Dashboard from "../components/Dashboard"
import RosterTable from "../components/Roster"
import PartyBuilder from "../components/PartyBuilder"
import Wishlist from "../components/Wishlist"

export default function Home(){

const [page,setPage] = useState("dashboard")

return(

<div style={{display:"flex"}}>

<Sidebar setPage={setPage}/>

<div style={{padding:"30px",flex:1}}>

{page==="dashboard" && <Dashboard/>}
{page==="roster" && <RosterTable/>}
{page==="party" && <PartyBuilder/>}
{page==="wishlist" && <Wishlist/>}

</div>

</div>

)

}