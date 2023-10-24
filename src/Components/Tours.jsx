import Tour from "./Tour";

function Tours(toursData) {
  return (
    <section>
      {toursData.toursData.length ? (
        <>
          <div>
            <h2 className="title">Our Tours</h2>
            <div className="title-underline"></div>
          </div>
          <div className="tours">
            {toursData.toursData.map((tour) => {
              return (
                <Tour
                  tour={tour}
                  deleteTour={toursData.deleteTour}
                  key={tour.id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 className="title">No Tours Left</h2>
            <div className="title-underline"></div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              className="btn info-btn"
              style={{ alignSelf: "center", marginTop: "4px" }}
              onClick={toursData.refreshFunc}
            >
              Refresh
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Tours;
