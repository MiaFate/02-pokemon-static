import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface LayoutProps {
    title?: string;
    children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Mia Ramos" />
                <meta name="description" content={`Informacion sobre Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
