import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { setUser } from "../components/redux/user/user.reducer";

const userDetails = async (uid, dispatch) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    dispatch(setUser({ user: docSnap.data(), isLogging: true }));
  } else {
    dispatch(setUser({ user: docSnap.data() }));
  }
};
export default userDetails;
