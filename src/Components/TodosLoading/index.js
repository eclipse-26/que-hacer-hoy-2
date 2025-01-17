import React from "react";

function TodosLoading() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="bg-slate-200 h-11 w-full rounded-lg animate-pulse"></div>
      <div className="bg-slate-200 h-11 w-full rounded-lg animate-pulse"></div>
      <div className="bg-slate-200 h-11 w-full rounded-lg animate-pulse"></div>
    </div>
  );
}

export { TodosLoading };
