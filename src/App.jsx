import Loader from "./Components/Loader";
import Tours from "./Components/Tours";
import Error from "./Components/Error";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toursData, setToursData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [refresher, setRefresher] = useState(true);

  // Some UseFulFunctions
  const deleteTour = (id) => {
    setToursData(
      toursData.filter((tour) => {
        return tour.id != id;
      })
    );
  };

  const fetchToursData = async () => {
    const resp = await fetch(url);
    if (!resp.ok) {
      setIsLoading(false);
      setIsError(true);
      return;
    }
    return resp.json();
  };
  useEffect(() => {
    fetchToursData()
      .then((resp) => {
        console.log(resp);
        setToursData(resp);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      });
  }, [refresher]);

  if (isLoading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <Error />
      </main>
    );
  }
  return (
    <main>
      <Tours
        toursData={toursData}
        deleteTour={deleteTour}
        refreshFunc={() => {
          setRefresher(!refresher);
        }}
      />
    </main>
  );
};
export default App;
