import { useEffect, useState } from "react";
import BorderButton from "./BorderButton";

function Borders({borders}) {
  const [borderList, setBorderList] = useState([])
  console.log(borders)

  useEffect(() => {
    setBorderList([])
    borders.forEach((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then(res => res.json())
        .then(data => {
          setBorderList(prevBorderList => [...prevBorderList, data[0].name.common]);
        });
    });
  }, [borders]);
  
  
  console.log(borderList)
  
  return (
    <div className="borders">
      <span className="label">Border Countries: </span> {borderList.map((border, index) => {
        return <BorderButton key={index} name={border} />
      })}
    </div>
  )
}
export default Borders