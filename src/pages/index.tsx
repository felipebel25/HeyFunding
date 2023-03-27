import { HomeView } from "@/components/organisms/dashboard/DashboardView";
import Head from "next/head";



interface Props {
  pokemons: any;
}

const HomePage = ({ pokemons }: Props) => {


  return (
    <>
      <HomeView data={pokemons} />
    </>
  )
}
export default HomePage
