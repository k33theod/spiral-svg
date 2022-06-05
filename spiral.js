function spiral2 (x, y, rx, ry, d, n, color )
        {
            
             //create the svg with the attirbutes
                const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg",);
                svg1.setAttribute("width", "500");
                svg1.setAttribute("height", "500");
                svg1.setAttribute("style", "border: 1px solid red;");
            
            const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path",);//create the path element
            
            //calculate path
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
            
            //add atribute to path
                path1.setAttribute("d", da);
                path1.setAttribute("fill", "transparent");
                path1.setAttribute("stroke", color);
            
            svg1.appendChild (path1);
            document.querySelector('body').appendChild(svg1);

            //return da;
        }
