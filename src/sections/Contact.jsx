
import Contactexp from '../components/Contactexp'
import ContactForm from '../components/ContactForm'
import TitleHearder from '../components/TitleHearder'
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <section id='contact'
    className='flex-center relative md:p-0 px-5 '
    >
        <div className="w-full h-full container md:my-40 my-20">
            <TitleHearder
          title={"Contact Me"}
          text={"I am a passionate developer."}
          number={"04"}
        />

        <div className="mt-20">
            <div className="grid grid-cols-12">
                <div className="md:col-span-5 col-span-12">
                    <ContactForm />
                    <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
                </div>
                <div className="md:col-span-7 col-span-12">
                  <div className="w-full h-full md:m-0 -mt-32">
                    <Contactexp />
                  </div>
                </div>
            </div>
        </div>
        </div>
      
    </section>
  )
}

export default Contact
