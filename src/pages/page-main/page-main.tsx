import Header from "../../components/header/header.tsx";
import SectionMain from "../../components/section-main/section-main.tsx";
import SectionSolutions from "../../components/section-solutions/section-solutions.tsx";

export default function PageMain () {
    return (
        <>
            <Header />
            <main className="main">
                <SectionMain />
                <SectionSolutions />
            </main>
        </>

    )
}
