import { useEffect, useState } from "react";

function Tour(tour) {
  console.log(tour);
  const { id, name, info, image, price } = tour.tour;
  const [infoFinal, setInfoFinal] = useState(info);
  const [isShortInfo, setIsShortInfo] = useState(false);
  const ToggleInfo = () => {
    const shortInfo = () => {
      setInfoFinal(info.slice(0, 200) + "...");
      setIsShortInfo(true);
    };
    const longInfo = () => {
      setInfoFinal(info);
      setIsShortInfo(false);
    };
    if (isShortInfo) longInfo();
    else shortInfo();
  };
  useEffect(() => {
    ToggleInfo();
  }, []);

  return (
    <article className="single-tour">
      <img src={image} alt="no Image Found" className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {infoFinal}
          <button className="info-button" onClick={ToggleInfo}>
            {isShortInfo ? "read more" : "read less"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => {
            tour.deleteTour(id);
          }}
        >
          Not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
