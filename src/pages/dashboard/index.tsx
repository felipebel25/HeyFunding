import { DashboardView } from "@/components/organisms/dashboard/DashboardView"
import { getPokemons } from "@/services/pokemons";
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from "next/head";

interface Props {
  pokemons: any;
}

const DashboardPage = ({ pokemons }: Props) => {
  return (
    <>
      <Head>
        <title>Pokemons : Monoma</title>
      </Head>
      <DashboardView data={pokemons} />
    </>
  )
}
export default DashboardPage

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    // Hacer una solicitud a la API de Pokemon para obtener el listado de los primeros 10 pokemones
    const { pokemons, count } = await getPokemons()

    return { props: {pokemons: { pokemons, count }} };
  } catch (error) {
    console.error(error);
    // Devolver un mensaje de error si ocurre algún problema
    return { props: { error: 'Error interno del servidor' } };
  }
};