import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
  } from "react-accessible-accordion";// Importa componentes do "react-accessible-accordion" que ajudam a criar um accordion acessível.
  
  import "react-accessible-accordion/dist/fancy-example.css"; // Importa o CSS para estilizar o accordion.
  import {
    MdOutlineArrowDropDown, //Icones
    MdOutlineArrowDropDownCircle,
  } from "react-icons/md";
  
  import data from "../../utils/accordion.jsx";
  import "./Value.css";

  
  const Value = () => {
    return (
      <section id="value" className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.jpg" alt="" />
            </div>
          </div>
  
          {/* right */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
  
            <span className="primaryText">Value We Give to You</span>
  
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              <br />
              We beleive a good blace to live can make your life better
            </span>
  
            <Accordion
              className="accordion"
              allowMultipleExpanded={false} // Permite que apenas um item do accordion seja expandido por vez.
              preExpanded={[0]} //Define qual vai ser
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton ">

                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span
                          className="primaryText"
                        >
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };

export default Value;
