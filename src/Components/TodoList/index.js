function TodoList( {children} ){
  return (
    <ul className="w-full flex flex-col gap-2">
      {children}
    </ul>
  ) 
}

export { TodoList };
  