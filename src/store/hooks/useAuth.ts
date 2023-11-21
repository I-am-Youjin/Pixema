import { useDispatch } from "react-redux";
import { userActions } from "../Actions/userActions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
export function useAuth() {
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  const { email } = useSelector((state) => (state as any).user);
  if (!email) {
    onAuthStateChanged(auth, (user) => {
      if (user && user?.emailVerified) {
        dispatch(
          userActions.setUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: (user as any).accessToken,
          })
        );
        const uid = user.uid;
      }
    });
  }
}
