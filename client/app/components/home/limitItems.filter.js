let limitItems = function() {
  return function(item, config) {
    
    let currentPage = config[0],
      pageSize = config[1];
        
    let start = ((currentPage - 1) * pageSize),
      end = start + pageSize;
      
    return item.slice(start, end);
  };    
}

export default limitItems;
