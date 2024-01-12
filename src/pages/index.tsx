import dynamic from "next/dynamic"

const DynamicMap = dynamic(()=> import ('../../component/Map'),{ssr:false}); 

export default function Home() {
  return (
    <DynamicMap/>
  )
}
