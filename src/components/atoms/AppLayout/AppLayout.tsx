import { PropsWithChildren } from "react";
import Head from "next/head"
import { NavbarHome } from "@/components/molecules/navbarHome/NavbarHome";

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const AppLayout = ({ children, title, pageDescription, imageFullUrl }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
            </Head>

            <main style={{ height: "100vh", overflow: "hidden" }}>
                <nav >
                    <NavbarHome />
                </nav>
                {children}
            </main>

        </>
    )
}
