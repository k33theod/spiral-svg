  function spiral (x, y, rx, ry, d, n)
  {
      let da = "M " + x.toString() +" "+ y.toString()+" ";
      let sx = x;
      let ex = x+2*rx;
      for (let i = 0; i< n ; i+=1)
      {
          da = da+ "A "+ rx.toString()+" "+ ry.toString() +",0,0,0," + ex.toString()+" "+y.toString()+" "+
                  "A "+ (rx+d/2).toString()+" "+  (ry+d/2).toString() +",0,0,0, " + (sx-d).toString()+" "+y.toString()+" ";

          ex+=d;
          sx-=d;
          rx = rx+d/2;
          ry = ry+d/2;
      }
      return da;
  }
