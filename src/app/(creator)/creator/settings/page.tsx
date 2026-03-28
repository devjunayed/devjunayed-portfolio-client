import { Input } from "@/components/ui/input"

const page = () => {
  return (
    <div className='text-white mx-20 w-full'>
      <div>
        <h4 className='text-white text-xl'>Introduction Video link</h4>
        <Input type="text" placeholder='place youtube link here'/>
      </div>
    </div>
  )
}


export default page
