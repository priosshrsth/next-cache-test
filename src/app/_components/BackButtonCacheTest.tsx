/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { type PropsWithChildren, useEffect } from "react";

export function BackButtonCacheTest({ children }: PropsWithChildren) {
  // useEffect(() => {
  //   const onChangeState = (
  //     state: unknown,
  //     title: string,
  //     url?: string | URL,
  //     isReplace?: boolean,
  //   ) => {
  //     // define your listener here ...
  //     // alert("test");
  //   };
  //
  //   // set onChangeState() listener:
  //   ["pushState", "replaceState"].forEach((changeState) => {
  //     window.history.back = () => {
  //       // alert(";asd");
  //     };
  //     // store original values under underscored keys (`window.history._pushState()` and `window.history._replaceState()`):
  //     // @ts-expect-error unsafe assigment
  //     window.history["_" + changeState] = window.history[changeState];
  //     // @ts-expect-error unsafe assigment
  //     window.history[changeState] = new Proxy(window.history[changeState], {
  //       apply(target, thisArg, argList) {
  //         const [state, title, url] = argList as Parameters<
  //           (typeof History.prototype)["pushState"]
  //         >;
  //         onChangeState(
  //           state,
  //           title,
  //           url ?? undefined,
  //           changeState === "replaceState",
  //         );
  //
  //         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
  //         return target.apply(thisArg, argList);
  //       },
  //     });
  //   });
  // }, []);
  return children;
}
