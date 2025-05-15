
import  Features  from "./Compontents/Features/Features"
import Banner from "./Compontents/Banner/Banner"
import Content from "./Compontents/Content/Content"
import Hadder from "./Compontents/Hadder/Hadder"
import Container from "./Compontents/layout/Container"
import Navber from "./Compontents/Navber"
import Intergration from "./Compontents/Intergration/Intergration"
import Service from "./Compontents/Service/Service"
import Factssection from "./Compontents/Factssection/Factssection"
import Pricingtable from "./Compontents/Pricingtable/Pricingtable"

function App() {

  return (
   <>
   <Hadder>
    <Navber></Navber>
    <Banner></Banner>
   </Hadder>
   <Content></Content>
   <Features></Features>
   <Intergration></Intergration>
   <Service></Service>
   <Factssection></Factssection>
   <Pricingtable></Pricingtable>
   </>
  )
}

export default App
