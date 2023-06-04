import { GetStaticPaths, GetStaticProps } from 'next'
import hfApi from '@/services/hfApi'
import { ICompany } from '@/interfaces/ICompany';
import { CompanyView } from '@/components/organisms/company/CompanyView';

interface Props {
    company: ICompany;
}
const CompanyPage = ({ company }: Props) => {

    return (
        <CompanyView company={company} />
    )
}

export default CompanyPage

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const companies = ['julio', 'chowamandala', 'lamn', 'pizzaamericana', 'verdebendito'];
    const paths = companies.map(company => ({ params: { company } }))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { company } = ctx.params as { company: string };
    const { data } = await getCompanyInfo(company)

    return {
        props: {
            company: data[0]
        }
    }
}

const getCompanyInfo = async (company: string) => {
    const companyData = await hfApi.get(`/enterprise?company=${company}`)
    return companyData
}