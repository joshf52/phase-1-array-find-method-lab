function superbowlWin(win) {
    let year = win.year;
    if (win.result === "L") {
      return year;
    } else {
      return undefined;
    }
  }
  
  const finder = record.find(superbowlWin);