import { supabase } from "../lib/supabase"

export default async function Home() {

  const { data: players } = await supabase
    .from("players")
    .select("*")

  return (
    <div>
      <h1>Guild Manager</h1>

      {players?.map((player) => (
        <div key={player.id}>
          {player.name} - {player.role}
        </div>
      ))}

    </div>
  )
}