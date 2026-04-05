import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />

      <div style={{padding:"20px"}}>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}