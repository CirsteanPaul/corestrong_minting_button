// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    
    try {
      
        let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply().call();
        let cost = await store.getState()
        .blockchain.smartContract.methods.publicCost().call();
        let alreadyMinted = await store.getState()
        .blockchain.smartContract.methods.publicClaimed(account).call();
        let maxPerWallet = await store.getState()
        .blockchain.smartContract.methods.maxPublic().call();
        let maxSupply = await store.getState()
        .blockchain.smartContract.methods.maxSupply().call();
      dispatch(
        fetchDataSuccess({
          totalSupply,
          cost,
          alreadyMinted,
          maxPerWallet,
          maxSupply
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};