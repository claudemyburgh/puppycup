import React from "react";
import { mainNavigation } from "../../data/navbar-links";
import classNames from "../../libs/class-names";

const NavigationLinks = () => {
  return (
    <>
      <div className="hidden lg:ml-10 lg:block">
        <div className="flex space-x-4">
          {mainNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-primary-100"
                  : "hover:bg-primary-100 hover:text-primary-700",
                "rounded-md px-3 py-2 text-sm font-medium text-primary-700"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationLinks;
