import React, { useState } from "react";
import Modal from "./modal1";

const Navbar = () => {
  let Links = [
    { name: "Azure", link: "" },
    { name: "Subscriptions", link: "" },
    { name: "History", link: "" },
    { name: "Azure Devops", link: "" },
  ];
  let [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleonClose = () => setShowModal(false);

  return (
    <>
      <div className="nav md:flex flex bg-white  md:h-20 shadow-sm ">
        <div className="items items-start md:order-2 ">
          <div
            onClick={() => setOpen(!open)}
            className="hamburger absolute text-3xl  top-5 cursor-pointer ml-5 order-3"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={` space-x-8  left-0 static absolute md:shadow-none w-[100%] ${
              open ? "top-24" : "top-[-450px]"
            }`}
          >
            <li></li>
            <li><button>
            <div className="items-center font-semibold my-2">
                Azure
                </div>
              </button></li>
            <li>
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="flex"
              >
                <div className="items-center font-semibold px-4 my-2">
                  Subscriptions
                </div>
              </button>
            </li>
            <li> <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="flex"
              >
                <div className="items-center font-semibold px-4 my-2">
                  History
                </div>
              </button></li>
            <li> <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="flex"
              >
                <div className="items-center font-semibold my-2">
                   Azure Devops
                </div>
              </button></li>

            <li></li>
          </ul>
        </div>
      </div>

      <Modal onClose={handleonClose} visible={showModal} />
    </>
  );
};

export default Navbar;
