import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getRestrauntMenu() {
  const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
  );
  const json = await data.json();
  console.log(json.data);
}
const RestrauntMenu = () => {
  const [menu, setMenu] = useState({});

  useEffect(() => {
    getRestrauntMenu();
  }, []);

  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Restraunt {id}</h1>
      <h2>Menu</h2>
    </div>
  );
};
export default RestrauntMenu;
