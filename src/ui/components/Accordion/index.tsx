import { ReactNode, useState } from "react";

interface AccordionProps {
  childrens: {
    id: number;
    title: string;
    content: string | ReactNode;
  }[];
}

function Accordion({ childrens }: AccordionProps): JSX.Element {
  const [childrenOppened, setChildrenOppened] = useState(
    childrens[0] ? childrens[0].id : null
  );

  function toggleAccordion(id: number) {
    setChildrenOppened(childrenOppened === id ? null : id);
  }

  return (
    <div className="border rounded-md shadow-md mb-4">
      {childrens.map((children) => (
        <div key={children.id} className="accordion__item">
          <div
            className="flex justify-between items-center cursor-pointer px-4 py-2 border-b transition duration-300 ease-in-out"
            onClick={() => {
              toggleAccordion(children.id);
            }}
          >
            <span>{children.title}</span>
            <span className="text-gray-500 transform transition-transform">
              {childrenOppened === children.id ? "-" : "+"}
            </span>
          </div>
          <div
            className={`px-4 transition transition-all duration-300 ease-in-out overflow-hidden ${
              childrenOppened === children.id ? "h-auto" : "h-0"
            }`}
          >
            {children.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export { Accordion };
