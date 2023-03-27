import { HomeView } from "@/components/organisms/dashboard/DashboardView";

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
