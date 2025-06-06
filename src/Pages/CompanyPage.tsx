import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useNavigate } from "react-router-dom"
import Company from "../CompanyProfile/Company";
import SimiliarCompanies from "../CompanyProfile/SimiliarCompanies";


const CompanyPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] p-4 bg-mine-shaft-950 font-['poppins']">
     
    
        <Button my="md" onClick={()=> navigate(-1)} leftSection={<IconArrowLeft size={20}/>} color="brightSun.4"  variant="light">Back</Button>
       
       
        <div className='flex gap-5 justify-between'>
            <Company/>
            <SimiliarCompanies/>
        </div>
    </div>
  )
}

export default CompanyPage
