// Third Party
import React, { useContext, useEffect } from "react";
import axios from "axios";

// Custom
import BountyCardDetails from "./BountyCardDetails";
import StoreContext from "../../store/Store/StoreContext";

const BountyCardDetailsModal = (props) => {
  const { issue, isClaimed, deposits, address } = props;
  const [appState] = useContext(StoreContext);

  useEffect(async () => {
    console.log("appState: ", appState.coinApiBaseUrl);
    let ethereum = 0.1;
    let bitcoin = 0.5;
    const data = {
      ethereum,
      bitcoin,
    };
    const json = JSON.stringify(data);

    const url = appState.coinApiBaseUrl + "/tvl";
    console.log("url: ", url);

    const res = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(json), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        } else console.log("res: ", res);
        return res;
      })
      .catch((err) => {
        console.log("Encountered errro: ", err.message);
      });

    /*  const res = await axios.post(url, data);
		console.log("res: ", res); */
  });

  const updateModal = () => {
    props.modalVisibility(false);
  };

  return (
    <div>
      <div className="justify-center font-mont items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-auto my-6 mx-auto max-w-3xl">
          <div className="rounded-lg shadow-lg  flex flex-col w-full bg-white">
            <BountyCardDetails
              issue={issue}
              isClaimed={isClaimed}
              deposits={deposits}
              address={address}
            />
            <div className="flex items-center justify-end">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => updateModal()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 bg-black"></div>
    </div>
  );
};

export default BountyCardDetailsModal;
