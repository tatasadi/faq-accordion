import React, {
  useState,
  cloneElement,
  Children,
  ReactElement,
  JSXElementConstructor,
} from "react"

const Accordion = ({ children }: { children: React.ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return cloneElement(
        child as ReactElement<any, string | JSXElementConstructor<any>>,
        {
          isOpen: index === openIndex,
          onToggle: () => handleToggle(index),
        },
      )
    }
    return child
  })
}

export default Accordion
