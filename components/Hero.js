import Image from "next/image"
import hero from "/public/images/hero-image.png"
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between items-center w-full py-9">
      <div className="md:w-[45%] order-2 md:order-1">
        <h1 className="header text-5xl md:text-[64px] lg:text-5xl xl:text-[64px] 2xl:text-[72px] leading-[56px] md:leading-[74px] lg:leading-[56px] xl:leading-[74px] 2xl:leading-[80px] font-inter font-[900]  text-transparent  bg-clip-text bg-gradient-to-r 
        from-[#E6145B]  to-[#7E48A5]" >Tell your story on one page</h1>
        <p className="font-inter text-[#2A3337] dark:text-primary-dark xl:text-lg leading-[32px] 2xl:leading-[40px]">Pagechap is a one-link-for-all solution that allows creators house all their content in one dynamic page.
Join our waitlist and we’d let you know when we’re up and running!</p>
       <form className="space-y-4 md:space-y-0 font-inter md:start md:space-x-4 flex flex-col md:flex-row my-8">
         <input type="email" placeholder="Email Address" className="w-full h-[56px] 2xl:h-[64px] bg-[#F1F1F2] text-primary-grey 2xl:text-xl dark:bg-secondary-dark rounded-xl px-6"/>
         <input type="submit" value="Join waitlist" className="w-full md:min-w-[140px] md:max-w-[140px] 2xl:max-w-[160px] 2xl:min-w-[160px] bg-[#E6145B] h-[56px] 2xl:h-[64px] text-white rounded-xl 2xl:text-xl"/>
       </form>
      </div>
      <div className="md:w-[40%] order-1 md:order-2">
        <Image src={hero} />
      </div>
    </section>
  )
}

export default Hero