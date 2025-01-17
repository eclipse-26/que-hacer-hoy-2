function TodoList( props ){
  return (
    <>
    { props.error && props.onError() }
    { props.loading && props.onLoading()}
    { (!props.loading && !props.totalTodos) && props.onEmptyTodos()}
    { (!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
    { props.searchedTodos.map(props.children)}
    
    <ul className="w-full flex flex-col gap-2">
      {props.children}
    </ul>
    </>
  ) 
}

export { TodoList };
  