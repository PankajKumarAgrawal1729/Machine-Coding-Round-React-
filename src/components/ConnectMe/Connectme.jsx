import { Link } from 'react-router-dom'
import {Container} from '../index'

function Connectme() {
  return (
    <Container containerStyle={`bg-[#3F72AF]`} headingStyle={`text-[#fff]`}>
      <div className="flex flex-col items-center justify-center rounded-2xl w-[500px] h-[350px] m-auto bg-[#F9F7F7] drop-shadow-[2px_2px_0_rgba(0, 0, 0, 0.25)] p-4 gap-3 mt-5">
        <Link className='bg-[#3F72AF] text-center items-center flex justify-center text-white w-32 h-20 rounded-md' to="https://linktr.ee/pankajkumar0322">Contact Me</Link>
        </div>
        </Container>
  )
}

export default Connectme
