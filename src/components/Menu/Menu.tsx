"use client";
import React from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { filType, filter, menutype } from "@/interfaces/menu";
import { Icon } from "components/Icon";
import { ImageCommon } from "components/Image/ImageCommon";
import { menuList } from "@/data/menu";


const cx = classNames.bind(styles);
export const MenuApp = () => {
  return (
    <div className={cx("shadow-xl rounded-lg min-w-[250px] !h-full")}>
      <ul className="">
        {menuList.map((itemMenu: menutype, index: number) => (
          <li
            key={index}
            className={cx(
              "px-[10px] min-h-[32px] z-4 hover:bg-[#f3f4f6] hover:rounded-sm",
              "item-menu"
            )}
          >
            <Link
              href={itemMenu.slug}
              className={cx(
                "!text-[#343a40]  hover:!text-red-500 leading-8 font-semibold w-full flex flex-row items-center justify-between"
              )}
            >
              <span className="inline-flex items-center">
                <div className="!w-[25px] !h-[25px] mr-1"><ImageCommon size={25} className="" src={""} /></div>
                {itemMenu.title}
              </span>
              <Icon name="forward-ios" />
            </Link>
            {/* <div className="absolute w-[50px] h-full left-[240px]"></div> */}
            {itemMenu.filter && (
              <div
                className={cx(
                  "absolute bg-white !text-[#343a40]  z-4 grid grid-flow-row-dense grid-cols-5 px-5 py-2 rounded-md shadow-xl",
                  "menu-filter"
                )}
              >
                {itemMenu.filter.map((ft: filter, i: number) => (
                  <div key={i}>
                    <h5 className="text-sm py-2">
                      {ft.label}
                      {ft.hot && "⚡"}
                    </h5>
                    {ft.fil.length > 0 && (
                      <ul>
                        {ft.fil.map((fil: filType, n: number) => (
                          <li key={n} className="text-[calc(13/16)rem] py-1 ">
                            <Link
                              href={`${ft.code}/${fil.value}`}
                              className="!text-[#343a40] hover:!text-red-500  "
                            >
                              {fil.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
