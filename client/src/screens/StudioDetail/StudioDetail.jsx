import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneStudio } from "../../services/studios";

function StudioDetail() {
  // set state for studio
  const [studioItem, setStudioItem] = useState(null);
  const { id } = useParams();

  // function to call single studio
  useEffect(() => {
    const fetchStudioItem = async () => {
      const studioData = await getOneStudio(id);
      console.log(studioData);
      // setStudioItem(studioData)
    };
    fetchStudioItem();
  }, [id]);

  return (
    <div>
      <h3>This is studio detail page</h3>
      {/* show studio info including classes */}
      {/* if studio belongs currentuser  then give edit option */}
    </div>
  );
}

export default StudioDetail;
