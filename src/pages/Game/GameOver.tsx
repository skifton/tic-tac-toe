import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface IProps {
  isEnd: boolean;
  restartHandler: () => void;
  title: string;
}

const GameOver: React.FC<IProps> = ({ isEnd, restartHandler, title }) => {
  return (
    <Transition.Root show={isEnd} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={restartHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-clip-padding backdrop-filter backdrop-blur-sm">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg transition-all flex flex-col justify-center items-center space-y-10">
                <h1 className="text-5xl text-white">{title}</h1>
                <p
                  className="text-4xl text-white animate-pulse cursor-pointer"
                  onClick={restartHandler}
                >
                  Tap to play again
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default GameOver;
