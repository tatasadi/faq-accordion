"use client"
import Image from "next/image"
import Accordion from "./components/Accordion"
import AccordionItem from "./components/AccordionItem"

export default function Home() {
  return (
    <main className="flex max-w-[37.5rem] items-center justify-center p-6">
      <div className="flex flex-col items-start gap-6 rounded-lg bg-white p-6 shadow-[0_32px_56px_0px_rgba(80,0,118,0.10)]">
        <div className="flex items-center justify-start gap-6">
          <Image
            src="/images/icon-star.svg"
            width={24}
            height={24}
            alt="icon star"
          />
          <h1 className="text-[2rem] font-bold leading-normal">FAQs</h1>
        </div>
        <div className="flex flex-col items-start">
          <Accordion>
            <AccordionItem title="What is Frontend Mentor, and how will it help me?">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It’s suitable for all levels and ideal
              for portfolio building.
            </AccordionItem>
            <AccordionItem title="Is Frontend Mentor free?">
              The majority of our challenges are free, yes. We do have some that
              are premium and require a Pro subscription to access. It will say
              on each challenge whether they are free or premium, so it's easy
              to tell the difference.
            </AccordionItem>
            <AccordionItem title="Can I use Frontend Mentor projects in my portfolio?">
              Definitely! Please do feel free to use whatever you build in your
              portfolio. Helping developers add professional-looking projects to
              their portfolio was one of the reasons we created this platform!
            </AccordionItem>
            <AccordionItem title="How can I get help if I'm stuck on a challenge?">
              The best (and quickest) way to get help on a challenge is in our
              Discord server. There are thousands of other developers in there,
              so it's a great place to ask questions. We even have a dedicated
              "help" channel! If you haven't joined yet, you can get an invite
              to our Discord server here.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  )
}
