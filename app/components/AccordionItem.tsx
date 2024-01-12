import Image from "next/image"

const AccordionItem = ({
  isOpen = false,
  onToggle = () => {},
  title,
  children,
}: {
  isOpen?: boolean
  onToggle?: () => void
  title: string
  children: React.ReactNode
}) => (
  <div className="border-light-pink w-full cursor-pointer border-b-[0.0625rem] last:border-b-0">
    <div
      onClick={onToggle}
      className="hover:text-pink flex w-full items-center gap-6 py-5 font-semibold"
    >
      <h3>{title}</h3>
      <Image
        width={30}
        height={30}
        src={`/images/icon-${isOpen ? "minus" : "plus"}.svg`}
        alt={`icon arrow ${isOpen ? "minus" : "plus"}`}
        className="ml-auto"
      />
    </div>
    {isOpen && <p className="text-grayish-purple pb-5">{children}</p>}
  </div>
)

export default AccordionItem
