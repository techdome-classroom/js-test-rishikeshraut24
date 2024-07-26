const getTotalIsles = function (grid) {


  // write your code here
  if(grid.length === 0) return 0;
  let count =0;
  const rows = grid.length;

  const cols =grid[0].length;

  function dfs(r ,c){
    if(r < 0 || c<0 || r >= rows || c >= cols || grid[r][c] == 'w'){
      return;
    }

    grid[r][c] = 'W';

    dfs(r -1, c);
    dfs(r +1, c);
    dfs(r ,c - 1);
    dfs(r ,c+ c);

  }
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols;j++){

      if(grid[i][j] == 'L'){
        
      }
    }
  }


};

module.exports = getTotalIsles;